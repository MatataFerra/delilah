
--Create tables a relations
CREATE TABLE IF NOT EXISTS `users` 
(`_id` INTEGER auto_increment , 
`username` VARCHAR(50) NOT NULL UNIQUE, 
`name` VARCHAR(255) DEFAULT 'Estimadx', 
`lastname` VARCHAR(255), 
`password` VARCHAR(255) NOT NULL, 
`email` VARCHAR(255) UNIQUE, 
`phone` VARCHAR(50), 
`adress` VARCHAR(255) NOT NULL, 
`role` VARCHAR(255) DEFAULT 'regular', 
PRIMARY KEY (`_id`)) ENGINE=InnoDB;

SHOW INDEX FROM `users`

CREATE TABLE IF NOT EXISTS `orders` 
(`_id` INTEGER auto_increment , 
`total` INTEGER, `state` VARCHAR(255) DEFAULT 'new', 
`payment` VARCHAR(255) DEFAULT 'cash', 
`time` TIME DEFAULT '23:36:40', 
`orderByUserId` INTEGER, PRIMARY KEY (`_id`), 
FOREIGN KEY (`orderByUserId`) REFERENCES `users` (`_id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;

SHOW INDEX FROM `orders`

CREATE TABLE IF NOT EXISTS `products` 
(`_id` INTEGER auto_increment , 
`productname` VARCHAR(50) NOT NULL, 
`description` VARCHAR(200) DEFAULT 'Disfrutá de tu comida preferida :)', 
`price` FLOAT NOT NULL, 
`instock` TINYINT(1) DEFAULT true, 
`companyname` VARCHAR(255), 
`companyadress` VARCHAR(255), 
`img` VARCHAR(255), 
PRIMARY KEY (`_id`)) ENGINE=InnoDB;

SHOW INDEX FROM `products`


CREATE TABLE IF NOT EXISTS `productInOrder` 
(`quantity` INTEGER DEFAULT 0, 
`subTotal` FLOAT, 
`OrderId` INTEGER , 
`ProductId` INTEGER , 
PRIMARY KEY (`OrderId`, `ProductId`), 
FOREIGN KEY (`OrderId`) REFERENCES `orders` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE, 
FOREIGN KEY (`ProductId`) REFERENCES `products` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

SHOW INDEX FROM `productInOrder`

CREATE TABLE IF NOT EXISTS `favProduct` 
(`UserId` INTEGER , 
`ProductId` INTEGER , 
PRIMARY KEY (`UserId`, `ProductId`), 
FOREIGN KEY (`UserId`) REFERENCES `users` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE, 
FOREIGN KEY (`ProductId`) REFERENCES `products` (`_id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;

SHOW INDEX FROM `favProduct`

--Create default users
INSERT INTO `users` 
(`_id`,`username`,`name`,`lastname`,`password`,`email`,`phone`,`adress`,`role`) 
VALUES ('CarlosKill', 'carlos', 'Rivero', '$2y$10$OI8udmHuXIKFktyvnpwk9Ooa1M.kn6oluy94D1.rwBECQ9YdL0hve', 'carlosK@gmail.com', '1178654982', 'Av. Corrientes 3112', 'regular');

INSERT INTO `delilah`.`users` (`username`, `name`, `lastname`, `password`, `email`, `phone`, `adress`, `role`) 
VALUES ('ValleLuminoso', 'Laura', 'Zabala', '$2y$10$n4FvKb/dlQGRmtj.vexZ5eoB/cS2I9HmKaaX3Wvde3ggpAfui2yKS', 'LauraZ@gmail.com', '1158731278', 'ceretti 1512', 'regular');


--Create default products
INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Hamburguesas', 'Con queso de italia', '150', 'Mc', 'Av. Carro 15', 'latota.com');

INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Papas Fritas', 'Mojadas en cúrcuca', '170', 'Kansas', 'Av. Libertador 80', 'kansas.com');

INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Pizza', 'Jamón y morrones', '350', 'Kentucky', 'Av. Triunvirato', 'Kentu.com');



