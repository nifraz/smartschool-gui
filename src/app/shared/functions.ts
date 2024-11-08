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