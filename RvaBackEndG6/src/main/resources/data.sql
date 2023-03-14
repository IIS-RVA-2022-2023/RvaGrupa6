insert into artikl(id,naziv,proizvodjac)
values( nextval('ARTIKL_SEQ'), 'abc', 'jajaj');

insert into abc(id,datum)
values(nextval('abc_seq'), to_date('14.03.2023.' , 'dd.mm.yyyy.'));

select * from artikl;