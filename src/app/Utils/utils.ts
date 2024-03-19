export const joinedDate = (joinedAt: string) => {
    const date = new Date(joinedAt);
    const formattedDate = date.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    const capitalizedMonth =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
    return capitalizedMonth;
  };