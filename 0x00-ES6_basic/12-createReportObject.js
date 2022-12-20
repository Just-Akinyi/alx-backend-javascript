export default function createReportObject(employeesList) {
  getNumberOfDepartments = (employeesList) => {
    let count = 0;
    for (const employeeDepartments in employeesList) {
      count += 1;
      return count;
    }
  };
  return {
    [allEmployees]: employeesList,
  }, getNumberOfDepartments();
}
