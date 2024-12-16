export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
    return array.reduce((result, currentValue) => {
      const groupKey = String(currentValue[key]);
  
      // Initialize the group if it doesn't exist
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
  
      // Push the current item into the appropriate group
      result[groupKey].push(currentValue);
      return result;
    }, {} as Record<string, T[]>);
  }
  
  export function groupByToArrays<T>(array: T[], key: keyof T): T[][] {
    // Create a map to group elements
    const map = array.reduce((result, currentValue) => {
      const groupKey = String(currentValue[key]);
  
      if (!result.has(groupKey)) {
        result.set(groupKey, []);
      }
  
      result.get(groupKey)!.push(currentValue);
      return result;
    }, new Map<string, T[]>());
  
    // Convert the map to an array of arrays
    return Array.from(map.values());
  }

export function convertToISO(dateString: string, isEndOfTheDay: boolean = false): string | null {
  if (!dateString) {
    return null;
  }
  // Parse the MM/DD/YYYY string to a Date object
  const [month, day, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day); // Note: Month is 0-based in JS

  if (isEndOfTheDay) {
    date.setHours(23, 59, 59, 999);
  }
  else {
    date.setHours(0, 0, 0, 1);
  }
  // Convert to ISO 8601 format
  return date.toISOString(); // Returns "YYYY-MM-DDTHH:mm:ss.sssZ"
}