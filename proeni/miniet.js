const locale = formatLocale("en-US");
const formatNumber = locale.format(".2f");
const formattedNumber = formatNumber(1234.5678); // "1,234.57"
