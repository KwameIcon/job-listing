import { ReactNode } from "react";
import { Job } from "../components/UIComponents/cards/primaryJobCard";

// function types
export interface RenderJobsProps {
  isLoading: boolean;
  isError: boolean;
  error: { message: string } | null;
  jobs: Job[] | [];
  children: ReactNode;
}

export const renderJobs = ({isLoading, isError, error, jobs, children,}: RenderJobsProps) => {
  if (isLoading) {
    return <div className="lg:w-9/12 m-auto text-indigo-500">Loading jobs ...</div>;
  } else if (isError) {
    const errorMessage =
      error?.message === "Request failed with status code 429"
        ? "Too many requests. Please wait a moment and try again"
        : error?.message ?? "An unknown error occurred. Please try again later."; 

    return <div className="lg:w-9/12 m-auto text-red-500">{errorMessage}</div>;
  } else if (jobs.length === 0) {
    return <div className="lg:w-9/12 m-auto text-red-500">No jobs available.</div>;
  } else {
    return <>{children}</>; // Render children here
  }
};
