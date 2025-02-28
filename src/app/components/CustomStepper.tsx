import React from "react";
import { CheckCircle, Circle } from "lucide-react";
import Link from "next/link";

// Custom StepperItem component
interface StepperItemProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  isLast?: boolean;
  link: string;
}

const StepperItem: React.FC<StepperItemProps> = ({
  title,
  description,
  isCompleted,
  isActive,
  isLast = false,
  link,
}) => {
  return (
    <div className="flex">
      {/* Left side with icon and connector line */}
      <div className="flex flex-col items-center">
        <div className="flex-shrink-0">
          {isCompleted ? (
            <CheckCircle className="h-6 w-6 text-emerald-600" />
          ) : isActive ? (
            <div className="h-6 w-6 rounded-full border-2 border-emerald-600 bg-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
            </div>
          ) : (
            <Circle className="h-6 w-6 text-gray-300" />
          )}
        </div>
        {!isLast && (
          <div
            className={`w-0.5 h-16 mt-1 ${
              isCompleted ? "bg-emerald-600" : "bg-gray-200"
            }`}
          ></div>
        )}
      </div>

      {/* Right side with content */}
      <div className="ml-4 pb-8">
        <Link
          href={link}
          className={`font-medium ${
            isActive || isCompleted ? "text-gray-900" : "text-gray-500"
          }`}
        >
          {title}
        </Link>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default StepperItem;
