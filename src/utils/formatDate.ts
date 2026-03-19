import { format, parseISO } from "date-fns";

/**
 * Formats a date string into a readable format.
 *
 * @param dateString - The date string to format (e.g., "2024-11-22 13:42:36.85286 +0000 UTC").
 * @param outputFormat - The desired output format (default is "dd MMM, yyyy").
 * @returns A formatted date string or "-" if the input is invalid.
 */
export const formatDate = (
  dateString: string,
  outputFormat = "dd MMM, yyyy"
): string => {
  if (!dateString) return "-";

  try {
    // Preprocess the date string to remove the "+0000 UTC" part
    const cleanedDateString =
      dateString.split(" ")[0] + "T" + dateString.split(" ")[1];
    const parsedDate = parseISO(cleanedDateString);

    return format(parsedDate, outputFormat);
  } catch (error) {
    console.error("Invalid date string:", dateString, error);
    return "-";
  }
};
