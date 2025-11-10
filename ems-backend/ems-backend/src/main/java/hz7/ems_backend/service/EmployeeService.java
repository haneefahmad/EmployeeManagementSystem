package hz7.ems_backend.service;

import hz7.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(long employeeId, EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeId);
}
