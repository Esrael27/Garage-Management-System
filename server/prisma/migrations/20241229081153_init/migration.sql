-- CreateTable
CREATE TABLE `Employee` (
    `employee_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_email` VARCHAR(191) NOT NULL,
    `active_employee` ENUM('ACTIVE', 'INACTIVE') NOT NULL DEFAULT 'ACTIVE',
    `employee_role` ENUM('ADMIN', 'MANAGER', 'TECHNICIAN') NOT NULL,
    `added_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Employee_employee_email_key`(`employee_email`),
    PRIMARY KEY (`employee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeeInfo` (
    `employee_info_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `employee_first_name` VARCHAR(191) NOT NULL,
    `employee_last_name` VARCHAR(191) NOT NULL,
    `employee_phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EmployeeInfo_employee_id_key`(`employee_id`),
    PRIMARY KEY (`employee_info_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `EmployeePass` (
    `employee_pass_id` INTEGER NOT NULL AUTO_INCREMENT,
    `employee_id` INTEGER NOT NULL,
    `employee_password_hashed` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `EmployeePass_employee_id_key`(`employee_id`),
    PRIMARY KEY (`employee_pass_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `EmployeeInfo` ADD CONSTRAINT `EmployeeInfo_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee`(`employee_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `EmployeePass` ADD CONSTRAINT `EmployeePass_employee_id_fkey` FOREIGN KEY (`employee_id`) REFERENCES `Employee`(`employee_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
