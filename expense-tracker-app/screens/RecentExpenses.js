import { StyleSheet } from "react-native";
import { useContext } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { ExpensesContext } from "../store/context/expenses-context";

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const dateSevenDaysAgo = getDateMinusDays(today, 7);
    return expense.date >= dateSevenDaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      style={styles.container}
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
    />
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
