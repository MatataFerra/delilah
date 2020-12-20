INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Hamburguesas', 'Con queso de italia', '150', 'Mc', 'Av. Carro 15', 'latota.com');

INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Papas Fritas', 'Mojadas en cúrcuca', '170', 'Kansas', 'Av. Libertador 80', 'kansas.com');

INSERT INTO `delilah`.`products` (`productname`, `description`, `price`, `companyname`, `companyadress`, `img`) 
VALUES ('Pizza', 'Jamón y morrones', '350', 'Kentucky', 'Av. Triunvirato', 'Kentu.com');

INSERT INTO `delilah`.`orders` (`total`, `state`, `payment`) 
VALUES ('800', 'new', 'cash');
INSERT INTO `delilah`.`orders` (`total`, `state`, `payment`) 
VALUES ('950', 'new', 'debit');
INSERT INTO `delilah`.`orders` (`total`, `state`, `payment`) 
VALUES ('580', 'new', 'credit');


INSERT INTO `delilah`.`productinorder` (`OrderId`, `ProductId`) VALUES ('1', '1');
INSERT INTO `delilah`.`productinorder` (`OrderId`, `ProductId`) VALUES ('2', '3');
INSERT INTO `delilah`.`productinorder` (`OrderId`, `ProductId`) VALUES ('3', '1');
INSERT INTO `delilah`.`productinorder` (`OrderId`, `ProductId`) VALUES ('3', '2');
INSERT INTO `delilah`.`productinorder` (`OrderId`, `ProductId`) VALUES ('1', '2');

