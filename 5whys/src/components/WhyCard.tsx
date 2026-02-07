import { useState, useCallback } from "react";
import { z } from "zod";

// Validation schema - prevents XSS by validating input
const inputSchema = z
  .string()
  .max(500, "Text too long (max 500 characters)")
  .refine(
    (val) => !/<script|javascript:|on\w+=/i.test(val),
    "Invalid content"
  );

interface WhyCardProps {
  whyNumber: number;
  question: string;
  onAnswerSubmit: (answer: string) => void;
  isActive: boolean;
  isCompleted: boolean;
  answer?: string;
}

const cardClasses: Record<number, string> = {
  1: "why-card-1",
  2: "why-card-2",
  3: "why-card-3",
  4: "why-card-4",
  5: "why-card-5",
};

const badgeClasses: Record<number, string> = {
  1: "why-badge-1",
  2: "why-badge-2",
  3: "why-badge-3",
  4: "why-badge-4",
  5: "why-badge-5",
};

export const WhyCard = ({
  whyNumber,
  question,
  onAnswerSubmit,
  isActive,
  isCompleted,
  answer,
}: WhyCardProps) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const sanitizeInput = useCallback((value: string): string => {
    // Remove any HTML tags and potential XSS vectors
    return value
      .replace(/<[^>]*>/g, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+=/gi, "");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const rawValue = e.target.value;
    const sanitized = sanitizeInput(rawValue);
    setInputValue(sanitized);
    setError(null);
  };

  const handleSubmit = () => {
    const result = inputSchema.safeParse(inputValue);
    
    if (!result.success) {
      setError(result.error.errors[0]?.message || "Input error");
      return;
    }

    if (inputValue.trim()) {
      onAnswerSubmit(inputValue.trim());
      setInputValue("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className={`rounded-xl p-4 transition-all duration-300 shadow-md ${
        cardClasses[whyNumber]
      } ${isActive ? "ring-2 ring-white/20 animate-fade-in scale-[1.01]" : ""} ${
        !isActive && !isCompleted ? "opacity-40 scale-[0.98]" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`${badgeClasses[whyNumber]} px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm`}
        >
          Why #{whyNumber}
        </span>
        
        <div className="flex-1 space-y-3">
          <p className="text-foreground/90 font-medium leading-relaxed text-sm">
            {question}
          </p>

          {isCompleted && answer && (
            <div className="bg-background/20 backdrop-blur-sm rounded-lg p-3 text-foreground/80 border border-white/10">
              <span className="text-foreground/60 text-xs block mb-1">Answer:</span>
              <span className="text-sm">{answer}</span>
            </div>
          )}

          {isActive && (
            <div className="space-y-3">
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Write your answer here..."
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                data-lpignore="true"
                data-form-type="other"
                className="w-full bg-background/30 border border-white/20 rounded-lg p-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 resize-none min-h-[70px] transition-all backdrop-blur-sm text-sm"
              />
              
              {error && (
                <p className="text-destructive text-xs bg-destructive/10 px-2 py-1.5 rounded">{error}</p>
              )}
              
              <button
                onClick={handleSubmit}
                disabled={!inputValue.trim()}
                className="bg-white/20 hover:bg-white/30 text-foreground px-4 py-2 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all backdrop-blur-sm border border-white/20"
              >
                {whyNumber < 5 ? "Continue →" : "Complete ✓"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
