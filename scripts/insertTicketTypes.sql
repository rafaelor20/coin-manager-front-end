--Create Ticket Types

INSERT INTO public."TicketType"(
	name, price, "isRemote", "includesHotel", "updatedAt")
	VALUES ('Online', 100, True, False, Now());

INSERT INTO public."TicketType"(
	name, price, "isRemote", "includesHotel", "updatedAt")
	VALUES ('Presencial + Sem Hotel', 250, False, False, Now());
	
INSERT INTO public."TicketType"(
	name, price, "isRemote", "includesHotel", "updatedAt")
	VALUES ('Presencial + Com Hotel', 600, False, True, Now());
	