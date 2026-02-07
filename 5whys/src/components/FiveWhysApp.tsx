import { useState, useCallback } from "react";
import { z } from "zod";
import { WhyCard } from "./WhyCard";
import { RotateCcw, Info, Linkedin } from "lucide-react";
import headerImage from "@/assets/5whys-header.jpeg";

// Validation schema for the initial problem
const problemSchema = z
  .string()
  .min(3, "Problem must be at least 3 characters")
  .max(500, "Text too long (max 500 characters)")
  .refine(
    (val) => !/<script|javascript:|on\w+=/i.test(val),
    "Invalid content"
  );

interface WhyStep {
  question: string;
  answer: string;
}

export const FiveWhysApp = () => {
  const [problem, setProblem] = useState("");
  const [isStarted, setIsStarted] = useState(false);
  const [whySteps, setWhySteps] = useState<WhyStep[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const sanitizeInput = useCallback((value: string): string => {
    return value
      .replace(/<[^>]*>/g, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+=/gi, "");
  }, []);

  const handleProblemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const sanitized = sanitizeInput(e.target.value);
    setProblem(sanitized);
    setError(null);
  };

  const startAnalysis = () => {
    const result = problemSchema.safeParse(problem);
    
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Input error");
      return;
    }

    setIsStarted(true);
    setWhySteps([{ question: `Why is "${problem}" happening?`, answer: "" }]);
    setCurrentStep(0);
  };

  const handleAnswerSubmit = (answer: string) => {
    const updatedSteps = [...whySteps];
    updatedSteps[currentStep].answer = answer;
    setWhySteps(updatedSteps);

    if (currentStep < 4) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      setWhySteps([
        ...updatedSteps,
        { question: `Why is "${answer}" happening?`, answer: "" },
      ]);
    } else {
      setCurrentStep(5); // Mark as completed
    }
  };

  const resetAnalysis = () => {
    setProblem("");
    setIsStarted(false);
    setWhySteps([]);
    setCurrentStep(0);
    setError(null);
  };

  const isCompleted = currentStep === 5;

  return (
    <div className="min-h-screen bg-background py-8 px-4 flex flex-col">
      <div className="max-w-6xl mx-auto flex-1">
        {/* Header */}
        <div className="text-center space-y-4 animate-slide-down mb-6">
          <img
            src={headerImage}
            alt="5 Whys"
            className="w-full max-w-xs mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10"
          />
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            A root cause analysis tool — ask "Why?" five times to discover the true source of any problem
          </p>
        </div>

        {/* Side by Side Layout: Description + Problem Input */}
        {!isStarted && (
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {/* Method Description - Left Side */}
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-5 text-left border border-border/50">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">What is the 5 Whys Method?</h3>
              </div>
              <div className="space-y-2 text-muted-foreground text-xs leading-relaxed">
                <p>
                  The <span className="text-foreground font-medium">5 Whys</span> is a root cause analysis technique developed by 
                  <span className="text-foreground"> Taiichi Ohno</span> for the Toyota Production System.
                </p>
                <p>
                  By repeatedly asking <span className="text-foreground font-medium">"Why?"</span> (typically five times), 
                  you uncover the fundamental cause of a problem.
                </p>
                <div className="bg-background/40 rounded-lg p-3 mt-3">
                  <p className="text-foreground font-medium mb-2 text-xs">Example:</p>
                  <ul className="space-y-0.5 text-[11px]">
                    <li><span className="text-[hsl(var(--why-1))]">Why #1:</span> Car won't start → Battery dead</li>
                    <li><span className="text-[hsl(var(--why-2))]">Why #2:</span> Battery dead → Alternator failed</li>
                    <li><span className="text-[hsl(var(--why-3))]">Why #3:</span> Alternator failed → Belt broke</li>
                    <li><span className="text-[hsl(var(--why-4))]">Why #4:</span> Belt broke → Beyond service life</li>
                    <li><span className="text-[hsl(var(--why-5))]">Why #5:</span> Beyond service life → No maintenance</li>
                  </ul>
                  <p className="text-foreground text-[11px] mt-2">
                    <strong>Root cause:</strong> Lack of preventive maintenance
                  </p>
                </div>
              </div>
            </div>

            {/* Problem Input - Right Side */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 shadow-xl border border-border/50 space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                What problem do you want to analyze?
              </h2>
              
              <textarea
                value={problem}
                onChange={handleProblemChange}
                placeholder="Describe your problem here..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                data-lpignore="true"
                data-form-type="other"
                className="w-full bg-input/30 border border-border/50 rounded-xl p-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none min-h-[100px] transition-all"
              />
              
              {error && (
                <p className="text-destructive text-sm">{error}</p>
              )}

              <button
                onClick={startAnalysis}
                disabled={!problem.trim()}
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-3 rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/20"
              >
                Start 5 Whys Analysis
              </button>
            </div>
          </div>
        )}

        {/* Why Cards */}
        {isStarted && (
          <div className="space-y-3 max-w-3xl mx-auto">
            {/* Problem Statement */}
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-3 border border-border/50">
              <span className="text-muted-foreground text-xs">Problem: </span>
              <span className="text-foreground font-medium text-sm">{problem}</span>
            </div>

            {/* Why Steps */}
            {whySteps.map((step, index) => (
              <WhyCard
                key={index}
                whyNumber={index + 1}
                question={step.question}
                answer={step.answer}
                onAnswerSubmit={handleAnswerSubmit}
                isActive={currentStep === index}
                isCompleted={index < currentStep}
              />
            ))}

            {/* Completion Message */}
            {isCompleted && (
              <div className="bg-gradient-to-br from-card to-card/80 rounded-xl p-5 border-2 border-[hsl(var(--why-5))] animate-fade-in text-center space-y-3 shadow-xl shadow-[hsl(var(--why-5))]/10">
                <div className="text-3xl">🎉</div>
                <h3 className="text-lg font-bold text-foreground">
                  Excellent! You've found the root cause!
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
                  Your final answer is likely the root cause of the original problem.
                </p>
                
                <div className="bg-background/50 rounded-lg p-3">
                  <span className="text-muted-foreground text-xs block mb-1">Root Cause:</span>
                  <span className="text-foreground font-bold">
                    {whySteps[4]?.answer}
                  </span>
                </div>
              </div>
            )}

            {/* Reset Button */}
            <button
              onClick={resetAnalysis}
              className="flex items-center justify-center gap-2 w-full bg-secondary/80 text-secondary-foreground py-3 rounded-lg font-medium hover:bg-secondary transition-all text-sm"
            >
              <RotateCcw className="w-4 h-4" />
              Start New Analysis
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 py-4 text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
          <span>Built by Ophir Oren 2026</span>
          <a
            href="https://www.linkedin.com/in/ophiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </footer>
    </div>
  );
};
