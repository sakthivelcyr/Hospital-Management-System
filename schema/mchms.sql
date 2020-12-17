-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 17, 2020 at 05:59 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mchms`
--

-- --------------------------------------------------------

--
-- Table structure for table `allowances`
--

CREATE TABLE `allowances` (
  `id` int(11) NOT NULL,
  `healthcare_id` int(11) NOT NULL,
  `allowance_name` varchar(20) NOT NULL,
  `total` int(11) NOT NULL,
  `monthly` int(11) NOT NULL,
  `remaining` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `allowances`
--

INSERT INTO `allowances` (`id`, `healthcare_id`, `allowance_name`, `total`, `monthly`, `remaining`, `status`) VALUES
(1, 1, 'House Loan', 100000, 5000, 85000, 0),
(2, 6, 'Car Loan', 50000, 5000, 40000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `attendance_details`
--

CREATE TABLE `attendance_details` (
  `id` int(11) NOT NULL,
  `healthcare_id` int(11) NOT NULL,
  `in_time` time NOT NULL,
  `out_time` time NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `attendance_details`
--

INSERT INTO `attendance_details` (`id`, `healthcare_id`, `in_time`, `out_time`, `date`) VALUES
(1, 1, '08:49:10', '15:49:10', '2020-12-09'),
(2, 6, '08:49:10', '14:49:10', '2020-12-09');

-- --------------------------------------------------------

--
-- Table structure for table `clinical_testing_details`
--

CREATE TABLE `clinical_testing_details` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `serial` varchar(5) NOT NULL,
  `time` datetime NOT NULL,
  `result` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clinical_testing_details`
--

INSERT INTO `clinical_testing_details` (`id`, `patient_id`, `serial`, `time`, `result`) VALUES
(1, 2, 'OP001', '2020-12-17 21:35:33', 0),
(2, 2, 'IP001', '2020-12-10 21:35:33', 1);

-- --------------------------------------------------------

--
-- Table structure for table `department_details`
--

CREATE TABLE `department_details` (
  `id` int(11) NOT NULL,
  `department` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `department_details`
--

INSERT INTO `department_details` (`id`, `department`) VALUES
(4, 'Cardiology'),
(3, 'Casualty'),
(5, 'Ears, Nose and Throat'),
(2, 'Inpatient Service'),
(6, 'Maternity'),
(7, 'Optholmology'),
(1, 'Outpatient Service');

-- --------------------------------------------------------

--
-- Table structure for table `designation_details`
--

CREATE TABLE `designation_details` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `designation_details`
--

INSERT INTO `designation_details` (`id`, `name`) VALUES
(1, 'Doctor'),
(2, 'Nurse'),
(3, 'Receptionist'),
(4, 'Security'),
(5, 'Sweeper'),
(6, 'Lab Technician'),
(7, 'Dean');

-- --------------------------------------------------------

--
-- Table structure for table `fee_structure`
--

CREATE TABLE `fee_structure` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `description` varchar(50) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `fee_structure`
--

INSERT INTO `fee_structure` (`id`, `name`, `description`, `price`) VALUES
(1, 'Bed Charges', NULL, 200);

-- --------------------------------------------------------

--
-- Table structure for table `healthcare_workers`
--

CREATE TABLE `healthcare_workers` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `address` varchar(50) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `bank_acc_no` varchar(20) NOT NULL,
  `ifsc_code` varchar(10) NOT NULL,
  `role_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `from_date` datetime NOT NULL DEFAULT current_timestamp(),
  `to_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `healthcare_workers`
--

INSERT INTO `healthcare_workers` (`id`, `name`, `address`, `mobile`, `email`, `bank_acc_no`, `ifsc_code`, `role_id`, `dept_id`, `from_date`, `to_date`) VALUES
(1, 'Arun Kumar', 'Cuddalore', '962567980', 'arunkumar@gmail.com', '1030000987', 'IDIB000267', 1, 1, '2020-12-16 07:30:37', '0000-00-00 00:00:00'),
(6, 'Dinesh', 'Cheyyar', '9121567980', 'dinesh217@gmail.com', '1030000881', 'IDIB000167', 1, 1, '2020-12-17 16:28:44', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inpatient_details`
--

CREATE TABLE `inpatient_details` (
  `id` int(5) NOT NULL,
  `serial` varchar(5) DEFAULT NULL,
  `patient_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `joined_on` datetime NOT NULL DEFAULT current_timestamp(),
  `releaved_on` datetime DEFAULT NULL,
  `ward_number` int(11) NOT NULL,
  `bed_number` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inpatient_details`
--

INSERT INTO `inpatient_details` (`id`, `serial`, `patient_id`, `dept_id`, `doctor_id`, `joined_on`, `releaved_on`, `ward_number`, `bed_number`) VALUES
(5, 'IP005', 2, 1, 1, '2020-12-17 06:43:06', '2020-12-17 06:56:46', 2, 1),
(7, 'IP007', 2, 1, 1, '2020-12-17 07:22:44', '2020-12-17 06:56:46', 3, 5);

-- --------------------------------------------------------

--
-- Table structure for table `leave_allowance`
--

CREATE TABLE `leave_allowance` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `leave_count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `leave_allowance`
--

INSERT INTO `leave_allowance` (`id`, `role_id`, `leave_count`) VALUES
(1, 1, 3),
(2, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `medicine_details`
--

CREATE TABLE `medicine_details` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `medicine_details`
--

INSERT INTO `medicine_details` (`id`, `name`, `stock`, `price`) VALUES
(5, 'Vicks', 200, 1);

-- --------------------------------------------------------

--
-- Table structure for table `outpatient_details`
--

CREATE TABLE `outpatient_details` (
  `id` int(11) NOT NULL,
  `serial` varchar(5) DEFAULT NULL,
  `patient_id` int(11) NOT NULL,
  `dept_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `appointment` datetime NOT NULL DEFAULT current_timestamp(),
  `description` varchar(50) DEFAULT NULL,
  `fee` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_details`
--

CREATE TABLE `patient_details` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `age` int(11) NOT NULL,
  `address` varchar(40) NOT NULL,
  `adhaar` varchar(15) NOT NULL,
  `mobile` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient_details`
--

INSERT INTO `patient_details` (`id`, `name`, `age`, `address`, `adhaar`, `mobile`, `email`) VALUES
(2, 'Arun', 20, 'Cuddalore', '5412 0917 1456', '8123452576', 'arun@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `patient_fees`
--

CREATE TABLE `patient_fees` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `serial` varchar(5) NOT NULL,
  `fee_category` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient_fees`
--

INSERT INTO `patient_fees` (`id`, `patient_id`, `serial`, `fee_category`, `quantity`) VALUES
(2, 2, 'OP002', 1, 3);

-- --------------------------------------------------------

--
-- Table structure for table `payroll`
--

CREATE TABLE `payroll` (
  `id` int(11) NOT NULL,
  `healthcare_id` int(11) NOT NULL,
  `net_salary` int(11) NOT NULL,
  `gross_salary` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payroll`
--

INSERT INTO `payroll` (`id`, `healthcare_id`, `net_salary`, `gross_salary`) VALUES
(1, 1, 25000, 30000),
(2, 6, 28000, 40000);

-- --------------------------------------------------------

--
-- Table structure for table `payslip`
--

CREATE TABLE `payslip` (
  `id` int(11) NOT NULL,
  `healthcare_id` int(11) NOT NULL,
  `payroll_id` int(11) NOT NULL,
  `month_year` date NOT NULL DEFAULT current_timestamp(),
  `deductions` int(11) NOT NULL,
  `working_days` int(11) NOT NULL,
  `net_salary` int(11) NOT NULL,
  `paid_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payslip`
--

INSERT INTO `payslip` (`id`, `healthcare_id`, `payroll_id`, `month_year`, `deductions`, `working_days`, `net_salary`, `paid_status`) VALUES
(1, 1, 1, '2020-12-01', 1000, 26, 25000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `shift`
--

CREATE TABLE `shift` (
  `id` int(11) NOT NULL,
  `healthcare_id` int(11) NOT NULL,
  `duty` int(11) NOT NULL,
  `from_time` datetime NOT NULL,
  `to_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shift`
--

INSERT INTO `shift` (`id`, `healthcare_id`, `duty`, `from_time`, `to_time`) VALUES
(1, 1, 0, '2020-12-17 18:44:27', '2020-12-30 18:44:27'),
(2, 6, 1, '2020-12-08 18:44:27', '2020-12-15 18:44:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allowances`
--
ALTER TABLE `allowances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `healthcare_id` (`healthcare_id`);

--
-- Indexes for table `attendance_details`
--
ALTER TABLE `attendance_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clinical_testing_details`
--
ALTER TABLE `clinical_testing_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `department_details`
--
ALTER TABLE `department_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `department` (`department`);

--
-- Indexes for table `designation_details`
--
ALTER TABLE `designation_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fee_structure`
--
ALTER TABLE `fee_structure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `healthcare_workers`
--
ALTER TABLE `healthcare_workers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`),
  ADD UNIQUE KEY `bank_acc_no` (`bank_acc_no`),
  ADD KEY `role_id` (`role_id`),
  ADD KEY `dept_id` (`dept_id`);

--
-- Indexes for table `inpatient_details`
--
ALTER TABLE `inpatient_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `dept_id` (`dept_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `leave_allowance`
--
ALTER TABLE `leave_allowance`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `medicine_details`
--
ALTER TABLE `medicine_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `outpatient_details`
--
ALTER TABLE `outpatient_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `serial` (`serial`),
  ADD KEY `dept_id` (`dept_id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `patient_details`
--
ALTER TABLE `patient_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `adhaar` (`adhaar`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Indexes for table `patient_fees`
--
ALTER TABLE `patient_fees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `patient_id` (`patient_id`);

--
-- Indexes for table `payroll`
--
ALTER TABLE `payroll`
  ADD PRIMARY KEY (`id`),
  ADD KEY `healthcare_id` (`healthcare_id`);

--
-- Indexes for table `payslip`
--
ALTER TABLE `payslip`
  ADD PRIMARY KEY (`id`),
  ADD KEY `healthcare_id` (`healthcare_id`),
  ADD KEY `payroll_id` (`payroll_id`);

--
-- Indexes for table `shift`
--
ALTER TABLE `shift`
  ADD PRIMARY KEY (`id`),
  ADD KEY `healthcare_id` (`healthcare_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `allowances`
--
ALTER TABLE `allowances`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `attendance_details`
--
ALTER TABLE `attendance_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `clinical_testing_details`
--
ALTER TABLE `clinical_testing_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `department_details`
--
ALTER TABLE `department_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `designation_details`
--
ALTER TABLE `designation_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fee_structure`
--
ALTER TABLE `fee_structure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `healthcare_workers`
--
ALTER TABLE `healthcare_workers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `inpatient_details`
--
ALTER TABLE `inpatient_details`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `leave_allowance`
--
ALTER TABLE `leave_allowance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `medicine_details`
--
ALTER TABLE `medicine_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `outpatient_details`
--
ALTER TABLE `outpatient_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patient_details`
--
ALTER TABLE `patient_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient_fees`
--
ALTER TABLE `patient_fees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `payroll`
--
ALTER TABLE `payroll`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payslip`
--
ALTER TABLE `payslip`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `shift`
--
ALTER TABLE `shift`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `allowances`
--
ALTER TABLE `allowances`
  ADD CONSTRAINT `allowances_ibfk_1` FOREIGN KEY (`healthcare_id`) REFERENCES `healthcare_workers` (`id`);

--
-- Constraints for table `healthcare_workers`
--
ALTER TABLE `healthcare_workers`
  ADD CONSTRAINT `healthcare_workers_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `designation_details` (`id`),
  ADD CONSTRAINT `healthcare_workers_ibfk_2` FOREIGN KEY (`dept_id`) REFERENCES `department_details` (`id`);

--
-- Constraints for table `inpatient_details`
--
ALTER TABLE `inpatient_details`
  ADD CONSTRAINT `inpatient_details_ibfk_1` FOREIGN KEY (`doctor_id`) REFERENCES `healthcare_workers` (`id`),
  ADD CONSTRAINT `inpatient_details_ibfk_2` FOREIGN KEY (`dept_id`) REFERENCES `department_details` (`id`),
  ADD CONSTRAINT `inpatient_details_ibfk_3` FOREIGN KEY (`patient_id`) REFERENCES `patient_details` (`id`);

--
-- Constraints for table `leave_allowance`
--
ALTER TABLE `leave_allowance`
  ADD CONSTRAINT `leave_allowance_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `designation_details` (`id`);

--
-- Constraints for table `outpatient_details`
--
ALTER TABLE `outpatient_details`
  ADD CONSTRAINT `outpatient_details_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department_details` (`id`),
  ADD CONSTRAINT `outpatient_details_ibfk_2` FOREIGN KEY (`doctor_id`) REFERENCES `healthcare_workers` (`id`),
  ADD CONSTRAINT `outpatient_details_ibfk_3` FOREIGN KEY (`patient_id`) REFERENCES `patient_details` (`id`);

--
-- Constraints for table `patient_fees`
--
ALTER TABLE `patient_fees`
  ADD CONSTRAINT `patient_fees_ibfk_1` FOREIGN KEY (`patient_id`) REFERENCES `patient_details` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `patient_fees_ibfk_2` FOREIGN KEY (`patient_id`) REFERENCES `patient_details` (`id`);

--
-- Constraints for table `payroll`
--
ALTER TABLE `payroll`
  ADD CONSTRAINT `payroll_ibfk_1` FOREIGN KEY (`healthcare_id`) REFERENCES `healthcare_workers` (`id`);

--
-- Constraints for table `payslip`
--
ALTER TABLE `payslip`
  ADD CONSTRAINT `payslip_ibfk_1` FOREIGN KEY (`healthcare_id`) REFERENCES `healthcare_workers` (`id`),
  ADD CONSTRAINT `payslip_ibfk_2` FOREIGN KEY (`payroll_id`) REFERENCES `payroll` (`id`);

--
-- Constraints for table `shift`
--
ALTER TABLE `shift`
  ADD CONSTRAINT `shift_ibfk_1` FOREIGN KEY (`healthcare_id`) REFERENCES `healthcare_workers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
