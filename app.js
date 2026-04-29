'use strict';

let exercises = [
  // DISANJE
  { category: 'disanje', prompt: 'Dijafragmalno disanje', detail: 'Položi ruku na trbuh. Udahni 4 sekunde, zadrži 4, izdahni 4. Ponovi 10 puta.' },
  { category: 'disanje', prompt: 'Rebrano disanje', detail: 'Stavi ruke na rebra. Diši tako da osjećaš kako se rebra šire u stranu. 5 minuta.' },
  { category: 'disanje', prompt: 'Apnea disanje', detail: 'Udahni duboko, zadrži zrak i izgovori što dulje monolog. Ponovi 5 puta.' },
  { category: 'disanje', prompt: 'Disanje kroz nos', detail: 'Zatvori usta i diši isključivo kroz nos 10 minuta.' },
  { category: 'disanje', prompt: 'Pulsno disanje', detail: 'Kratki brzi udasi i izdasi kao pas. Izmjenjuj s normalnim 5 puta.' },
  { category: 'disanje', prompt: 'Disanje s pokretom', detail: 'Udah — podigni ruke, izdah — spusti. Poveži dah s pokretom tijela.' },
  { category: 'disanje', prompt: 'Kontrolirani izdah', detail: 'Udahni i izgovori što dulje jednu samoglasničku boju (Aaaaaa). Mjeri trajanje.' },
  { category: 'disanje', prompt: 'Disanje i emocija', detail: 'Promijeni obrazac disanja i osjeti kako se emocija mijenja. Brzo disanje = strah.' },
  { category: 'disanje', prompt: 'Trbušno disanje u pokretu', detail: 'Hodi brzo i diši dijafragmalno. Poveži kretanje s dubokim disanjem.' },
  { category: 'disanje', prompt: 'Stresno disanje', detail: 'Simuliraj stres (brzo disanje) pa se svjesno smiri dijafragmalnim disanjem.' },
  { category: 'disanje', prompt: 'Disanje kroz stihove', detail: 'Udahni na kraju svakog stiha, ne usred. Dah prati strukturu teksta.' },
  { category: 'disanje', prompt: 'Disanje u tišini', detail: 'Sjedi u tišini 10 minuta i samo prati dah. Meditacija za glumca.' },
  { category: 'disanje', prompt: 'Dah i tekst', detail: 'Svaku rečenicu izgovori u jednom dahu. Planiranje daha u tekstu.' },
  { category: 'disanje', prompt: 'Disanje s vizualizacijom', detail: 'Udahni i zamisli da udišeš zlatnu svjetlost. Izdahni sve napetosti.' },
  { category: 'disanje', prompt: 'Disanje i glas', detail: 'Svjesno poveži duboki udah s otvaranjem glasa. Dah nosi glas.' },
  { category: 'disanje', prompt: 'Disanje pred nastup', detail: 'Tehnika: 4 udaha, 4 zadržavanja, 8 izdaha. Smiruje živčani sustav.' },
  { category: 'disanje', prompt: 'Cirkularno disanje', detail: 'Vježbaj ne prekidati zvuk disanjem. Tehnika glazbenika primijenjena na govor.' },
  { category: 'disanje', prompt: 'Disanje u paru', detail: 'S partnerom sinkronizirajte disanje 5 minuta. Vježba prisutnosti i veze.' },
  { category: 'disanje', prompt: 'Disanje u stresnoj situaciji', detail: 'Zamisli prijemni ispit. Diši svjesno i smiri se.' },
  { category: 'disanje', prompt: 'Svjesno disanje', detail: 'Provjeri sve tehnike disanja koje si naučio/la. Integriraj ih.' },

  // DIKCIJA
  { category: 'dikcija', prompt: 'Brzalice Š', detail: "Izgovori: 'Šiša šeprka šišak' 5 puta polako, zatim 5 puta brzo." },
  { category: 'dikcija', prompt: 'Brzalice R i L', detail: "Izgovori: 'Riba ribi grize rep' 5 puta polako, zatim brzo." },
  { category: 'dikcija', prompt: 'Brzalice P i B', detail: "Izgovori: 'Petar Petrić peče pogaču' 5 puta. Pazi na eksplozivnost." },
  { category: 'dikcija', prompt: 'Brzalice T i D', detail: "Izgovori: 'Tata tete titi toto tutu' brzo i jasno 10 puta." },
  { category: 'dikcija', prompt: 'Brzalice K i G', detail: "Izgovori: 'Koka kljuca kukac' 10 puta. Pazi na stražnji dio usne šupljine." },
  { category: 'dikcija', prompt: 'Tekst u ustima', detail: 'Stavi olovku između zuba i čitaj tekst naglas. Vježba artikulacije.' },
  { category: 'dikcija', prompt: 'Brzalice S i Z', detail: "Izgovori: 'Suza Zanze zasuza' 10 puta. Pazi na sibilante." },
  { category: 'dikcija', prompt: 'Prekrivanje samoglasnika', detail: "Mijenjaj samoglasnike u riječima: 'mama' → 'meme' → 'mimi'." },
  { category: 'dikcija', prompt: 'Naglasci', detail: 'Izgovori istu rečenicu naglašavajući svaki put drugu riječ. Promatra promjenu značenja.' },
  { category: 'dikcija', prompt: 'Čitanje na glas', detail: 'Čitaj bilo koji tekst naglas 10 minuta. Fokus na jasnoću svake riječi.' },
  { category: 'dikcija', prompt: 'Spajanje suglasnika', detail: 'Vježbaj spajanje teških suglasničkih skupina: str, skr, zdr, zvj.' },
  { category: 'dikcija', prompt: 'Monolog u ustima', detail: 'Izgovori monolog s penzijem u ustima. Zatim bez — razlika je ogromna.' },
  { category: 'dikcija', prompt: 'Naglasci regija', detail: 'Pokušaj naglasak kajkavskog, čakavskog i štokavskog dijalekta.' },
  { category: 'dikcija', prompt: 'Brzalice Lj i Nj', detail: "Izgovori: 'Ljubav ljubi ljubičicu' 10 puta. Pazi na meke suglasnike." },
  { category: 'dikcija', prompt: 'Tekst napamet', detail: 'Nauči napamet 5 rečenica i izgovori ih s različitim emocijama.' },
  { category: 'dikcija', prompt: 'Tekst u šaptu', detail: 'Izgovori cijeli monolog šapatom s punom emocionalnom angažiranošću.' },
  { category: 'dikcija', prompt: 'Tekst kao glazba', detail: 'Izgovori monolog kao da je glazbena kompozicija. Forte, piano, ritardando.' },
  { category: 'dikcija', prompt: 'Tekst bez samoglasnika', detail: 'Izgovori tekst samo suglasnicima. Ekstremna vježba artikulacije.' },
  { category: 'dikcija', prompt: 'Finalna dikcija', detail: 'Izgovori sve najteže brzalice koje si vježbao/la. Provjeri napredak.' },
  { category: 'dikcija', prompt: 'Savršena artikulacija', detail: 'Izgovori najteži tekst koji imaš s maksimalnom preciznošću.' },

  // MIMIKA
  { category: 'mimika', prompt: 'Pet emocija', detail: 'Pred ogledalom prikaži: radost, tugu, strah, ljutnju, iznenađenje. Svaka po 10 sekundi.' },
  { category: 'mimika', prompt: 'Prijelazi', detail: 'Prijeđi s jedne emocije na drugu u 3 sekunde. Radost→tuga, ljutnja→strah.' },
  { category: 'mimika', prompt: 'Neutralno lice', detail: 'Drži neutralan izraz 2 minute. Zatim naglo pokaži emociju. Vježba kontrole.' },
  { category: 'mimika', prompt: 'Oči govore', detail: 'Bez ijedne mimike lica, samo očima prikaži: ljubav, mržnju, strah, čuđenje.' },
  { category: 'mimika', prompt: 'Mimika u ogledalu', detail: 'Glumi razgovor bez zvuka pred ogledalom.' },
  { category: 'mimika', prompt: 'Supstitucija', detail: 'Zamijeni jednu emociju drugom usred scene. Tuga→iznenađenje→ljutnja.' },
  { category: 'mimika', prompt: 'Mikroizrazi', detail: 'Pokaži emociju samo u jednom dijelu lica — samo usta, samo oči, samo obrve.' },
  { category: 'mimika', prompt: 'Lice kao maska', detail: 'Zamisli da ti je lice maska lika kojeg glumiš. Oblikuj je polako.' },
  { category: 'mimika', prompt: 'Unutarnje stanje', detail: 'Zatvori oči i zamisli emociju 2 minute. Zatim je pokaži bez pripreme.' },
  { category: 'mimika', prompt: 'Foto scena', detail: 'Pogledaj fotografiju i odmah pokaži emociju osobe na njoj vlastitim licem.' },
  { category: 'mimika', prompt: 'Emocija bez razloga', detail: 'Osjeti emociju bez ikakvog konteksta — čista fizička prisutnost osjećaja.' },
  { category: 'mimika', prompt: 'Lice suprotno od teksta', detail: 'Govori nešto tužno s osmijehom. Kontrast između lica i teksta.' },
  { category: 'mimika', prompt: 'Emocija kroz detalj', detail: 'Pokaži emociju samo kroz jedan mali detalj — trzaj prsta, treptaj.' },
  { category: 'mimika', prompt: 'Maska emocija', detail: 'Pokaži jednu emociju izvana, a iznutra osjeti drugu. Glumačka dvostrukost.' },
  { category: 'mimika', prompt: 'Lice u mraku', detail: 'Zatvori oči i pokaži emociju. Ne možeš se vidjeti — slobodnija si.' },
  { category: 'mimika', prompt: 'Emocija iz tijela', detail: 'Počni s tjelesnom pozom tuge i dopusti da emocija dođe sama.' },
  { category: 'mimika', prompt: 'Neutralnost kao vještina', detail: 'Drži neutralan izraz lica 5 minuta svjesno. Potpuna kontrola.' },
  { category: 'mimika', prompt: 'Emocija bez kretnje', detail: 'Stoji mirno i pokaži emociju samo licem i glasom. Bez ijednog pokreta tijela.' },
  { category: 'mimika', prompt: 'Kompletna mimika', detail: 'Izgovori monolog s punom facial expression. Svaka misao vidljiva na licu.' },
  { category: 'mimika', prompt: 'Emocija po izboru', detail: 'Odaberi emociju koja ti je najteža i posveti joj 10 minuta rada.' },

  // GLAS
  { category: 'glas', prompt: 'Zagrijavanje glasa', detail: 'Izgovori samoglasnike A-E-I-O-U na različitim visinama. Ponovi 3 puta.' },
  { category: 'glas', prompt: 'Rezonanca', detail: 'Izgovori M-N-NG s vibriranjem u prsima, zatim u glavi. Osjeti razliku.' },
  { category: 'glas', prompt: 'Projekcija glasa', detail: 'Izgovori istu rečenicu šapatom, normalnim glasom i kao da govoriš pred 100 ljudi.' },
  { category: 'glas', prompt: 'Dinamika glasa', detail: 'Pročitaj isti odlomak tiho, glasno, brzo, sporo. Osjeti kako se značenje mijenja.' },
  { category: 'glas', prompt: 'Legato govor', detail: 'Poveži sve riječi u rečenici bez pauze između njih. Glatki, tečni govor.' },
  { category: 'glas', prompt: 'Subtonovi', detail: 'Govori rečenicu s različitim namjerama: zamoliti, narediti, zavesti, upozoriti.' },
  { category: 'glas', prompt: 'Govorni ritam', detail: 'Izgovori monolog tapkajući ritam rukom. Pronađi prirodni ritam teksta.' },
  { category: 'glas', prompt: 'Pauza kao alat', detail: 'Čitaj tekst i svjesno ubaci pauze na neočekivana mjesta. Istraži efekt.' },
  { category: 'glas', prompt: 'Vokalna boja', detail: 'Izgovori isti tekst hladnim, toplim, metalnim i mekanim glasom.' },
  { category: 'glas', prompt: 'Tihi intenzitet', detail: 'Izgovori najtišim mogućim glasom s maksimalnom emocionalnom intenzivnošću.' },
  { category: 'glas', prompt: 'Govor prema gore', detail: 'Izgovori monolog gledajući prema stropu. Vježba otvaranja grla.' },
  { category: 'glas', prompt: 'Glas u prostoru', detail: 'Baci glas na različite zidove prostorije. Osjeti kako prostor mijenja glas.' },
  { category: 'glas', prompt: 'Rezonantni glasovi', detail: 'Pjevušći na M, N, NG zvuku. Osjeti vibracije u različitim dijelovima glave.' },
  { category: 'glas', prompt: 'Govor u pokretu', detail: 'Izgovori monolog hodajući, trčeći, skačući. Glas se mijenja s pokretom.' },
  { category: 'glas', prompt: 'Govor prema dolje', detail: 'Izgovori monolog gledajući u pod. Vježba kontrole glasa.' },
  { category: 'glas', prompt: 'Govorna maska', detail: 'Govori kao da si 80 godina stariji/a. Što se mijenja u glasu?' },
  { category: 'glas', prompt: 'Glas i prostor', detail: 'Izgovori isti tekst u malom prostoru i velikom. Prilagodi glas prostoru.' },
  { category: 'glas', prompt: 'Impresija glasa', detail: 'Pokušaj oponašati glas poznate osobe ili lika iz filma.' },
  { category: 'glas', prompt: 'Glas na prijemnom', detail: 'Projiciraj glas kao da govoriš pred komisijom. Jasno, sigurno, prisutno.' },
  { category: 'glas', prompt: 'Glas koji pamte', detail: 'Pronađi svoju najautentičniju glasovnu boju. To je tvoj glas.' },

  // TIJELO
  { category: 'tijelo', prompt: 'Opuštanje tijela', detail: 'Legni na pod. Zategni i opusti svaki dio tijela od stopala do glave. 15 minuta.' },
  { category: 'tijelo', prompt: 'Pokret u prostoru', detail: 'Hodi po prostoriji mijenjajući tempo, smjer i način hodanja svake 30 sekundi.' },
  { category: 'tijelo', prompt: 'Centar tijela', detail: 'Stoji na jednoj nozi 30 sekundi. Zatim s zatvorenim očima.' },
  { category: 'tijelo', prompt: 'Alexander tehnika', detail: 'Sjedi na rubu stolice, kralježnica ravna, glava gore. Drži 10 minuta svjesno.' },
  { category: 'tijelo', prompt: 'Tenzija i relaksacija', detail: 'Zategnite sve mišice tijela 10 sekundi, pa naglo opustite. Ponovi 5 puta.' },
  { category: 'tijelo', prompt: 'Zvučno tijelo', detail: 'Hodi po prostoru i svakim korakom ispusti zvuk. Poveži pokret i glas.' },
  { category: 'tijelo', prompt: 'Prostorna svjesnost', detail: 'Hodi po prostoru i budi svjestan svakog centimetra koji zauzimaš.' },
  { category: 'tijelo', prompt: 'Animalni pokret', detail: 'Kretaj se kao životinja po svom odabiru 5 minuta. Istraži tjelesnost lika.' },
  { category: 'tijelo', prompt: 'Kontakt s partnerom', detail: 'Stoji nasuprot partnera i promatrajte se 2 minute bez govora.' },
  { category: 'tijelo', prompt: 'Imaginarna scena', detail: 'Hodi kroz imaginaran prostor — šumu, grad, more. Tijelo reagira na okolinu.' },
  { category: 'tijelo', prompt: 'Fizička memorija', detail: 'Hodi 5 minuta kao lik kojeg igraš. Neka tijelo zapamti lik.' },
  { category: 'tijelo', prompt: 'Spori pokret', detail: 'Svaki pokret uspori 10 puta. Osjeti svaki mišić koji se kreće.' },
  { category: 'tijelo', prompt: 'Tjelesni centar lika', detail: 'Gdje je centar tjelesne težine tvog lika? Vodi se iz trbuha, prsiju, glave...' },
  { category: 'tijelo', prompt: 'Disfunkcija', detail: 'Hodi s namjernom tjelesnom malom greškom — šepanje, iskrivljeno rame.' },
  { category: 'tijelo', prompt: 'Tijelo kao instrument', detail: 'Svjesno koristi svaki dio tijela u izražavanju — ne samo lice i ruke.' },
  { category: 'tijelo', prompt: 'Suprotni pokreti', detail: 'Govori nešto nježno s agresivnim pokretima. Istraži kontrast.' },
  { category: 'tijelo', prompt: 'Nošenje težine', detail: 'Nosi imaginaran teret i kretaj se. Kako težina mijenja tvoje tijelo?' },
  { category: 'tijelo', prompt: 'Statična scena', detail: 'Zauzmi položaj lika i drži ga mirno 5 minuta. Osjeti lik kroz tijelo.' },
  { category: 'tijelo', prompt: 'Tijelo na sceni', detail: 'Hodi na imaginiranu scenu. Zauzmi je. Ona je tvoja.' },
  { category: 'tijelo', prompt: 'Spreman/a sam', detail: 'Stoji na imaginarnoj sceni i reci sebi: Spreman/a sam. Osjeti to.' },

  // ZAGRIJAVANJE
  { category: 'zagrijavanje', prompt: 'Upoznavanje bez smijeha', detail: 'Krug. Svako se predstavlja kao najodvratnija hrana. Format: "Bok svima, ja sam [pizza od inćuna sa senfom], drago mi je što smo se upoznali." Cilj: zadržati ozbiljno lice.' },
  { category: 'zagrijavanje', prompt: 'Bippity Bippity Bop', detail: 'Voditelj u sredini kruga. Pokazuje na igrača i govori "bippity bippity bop" — igrač mora reći "bop" prije kraja fraze. Dodaju se razine: ukleta kuća, Havaji, Godzilla.' },
  { category: 'zagrijavanje', prompt: 'Zip Zap Zop', detail: 'Krug. Igrači plješću i pokazuju jedni na druge izgovarajući zip→zap→zop. Napreduje do kontakta samo očima.' },
  { category: 'zagrijavanje', prompt: 'Whoosh', detail: 'Krug. Whoosh se prenosi gestikulacijom. Posebni pokreti: Opa (mijenja smjer), Zap (preskače), Groooove (svi zajedno), Freakout (svi u sredinu).' },
  { category: 'zagrijavanje', prompt: 'Pozdravi', detail: 'Hodanje po prostoru s različitim vrstama pozdrava: nepovjerenje, izgubljeni prijatelj, loš zadah, zaljubljenost, izmišljeni jezik, kauboj, vojnik, poslovni čovjek koji kasni.' },
  { category: 'zagrijavanje', prompt: 'Pljesak, pucketanje, stupanje', detail: 'Krug. Brojanje 1-2-3 zamijenjeno pucketanjem, pljeskom i udarcem. Eliminacijski mod.' },
  { category: 'zagrijavanje', prompt: 'Riječ priča', detail: 'Krug. Svaka osoba dodaje jednu riječ priči. Cilj: koherentna priča.' },
  { category: 'zagrijavanje', prompt: 'Grupno brojenje', detail: 'Krug, gledaju u pod. Cilj: prebrojati do 10 bez da dvije osobe govore istovremeno.' },
  { category: 'zagrijavanje', prompt: 'Grupni objekt', detail: 'Cijeli razred stvara oblik predmeta tijelima za 10 sekundi. Varijacije: pokretni objekti, natjecanje grupa.' },
  { category: 'zagrijavanje', prompt: 'Špijun, simpatija, apatija', detail: 'Svako tajno odabire osobu 1 (špijun) i osobu 2 (simpatija). Zatim se treba što više približiti simpatiji i udaljiti od neprijatelja.' },
  { category: 'zagrijavanje', prompt: 'Ljudi, sklonište, oluja', detail: 'Grupe od 3. Dva grade sklonište, jedan je unutra. Na poziv: Ljudi bježe, Sklonište se mijenja, Oluja — kaos i nove grupe.' },
  { category: 'zagrijavanje', prompt: 'Zvuk i pokret', detail: 'Krug. Zvuk i pokret se prenose, svaki put malo pojačavaju. Na kraju slobodna promjena i nadmetanje.' },
  { category: 'zagrijavanje', prompt: 'Neprijatelj i zaštitnik', detail: 'Svako mentalno bira neprijatelja i zaštitnika. Na znak: drži zaštitnika između sebe i neprijatelja.' },
  { category: 'zagrijavanje', prompt: 'Impuls', detail: 'Krug, drže se za ruke, zatvorene oči. Stisak ruke se prenosi u tišini. Napreduje do dva impulsa istovremeno.' },

  // POVJERENJE
  { category: 'povjerenje', prompt: 'Slijepo hodanje', detail: 'Parovi. Partner 1 zatvori oči, partner 2 ga vodi po prostoru 2 minute. Cilj: maksimalna sigurnost.' },
  { category: 'povjerenje', prompt: 'Padanje unatrag', detail: 'Parovi. Partner 1 pada unatrag u ruke partnera 2. Napreduje do trojki i transfera po krugu.' },
  { category: 'povjerenje', prompt: 'Transfer po krugu', detail: 'Krug od 6-8. Dobrovoljac u sredini, ruke prekrižene, pada i kruži oko kruga.' },
  { category: 'povjerenje', prompt: 'Ogledalo', detail: 'Parovi A i B. B prati sve pokrete A kao ogledalo, bez vođe i sljedbenika.' },
  { category: 'povjerenje', prompt: 'Ogledalo 4 osobe', detail: 'Četvorke. Vođa se mijenja na poziv, ostali prate. Natjecanje: pogodi tko je vođa.' },

  // IMPRO
  { category: 'impro', prompt: '3 minute — 2 minute — 1 minuta', detail: 'Ista scena u 3, pa 2, pa 1 minutu. Sažimanje radnje.' },
  { category: 'impro', prompt: 'Flashback / Flashforward', detail: 'Scena se prekida: Flashback (prošlost) ili Flashforward (budućnost).' },
  { category: 'impro', prompt: 'Story Story Die', detail: 'Linija, pričaju priču, voditelj pokazuje na sljedećeg. Ako zapne — dramatično "umire".' },
  { category: 'impro', prompt: 'Zabranjena riječ', detail: 'Scena se vrti oko teme, ali se ta tema ne smije izgovoriti.' },
  { category: 'impro', prompt: 'Lanac priča s preokretom', detail: 'Zajednička priča, voditelj viče Promjena — radnja ide u suprotnom smjeru.' },
  { category: 'impro', prompt: 'Zamrznuta scena (Freeze tag)', detail: 'Dvoje improviziraju, netko vikne Stani i zamijeni igrača novom scenom iz iste poze.' },
  { category: 'impro', prompt: 'Party emocija', detail: 'Zabava. Svaki gost dolazi s emocijom, domaćin preuzima emociju novog gosta. Na kraju se vraćaju emocije obrnutim redoslijedom.' },
  { category: 'impro', prompt: 'Autostop', detail: '4 stolca = auto. Autostoper ima snažnu karakteristiku koju svi preuzimaju čim uđe.' },
  { category: 'impro', prompt: 'Ekspert', detail: 'Učenik je stručnjak za nasumičnu temu, govori o njoj minutu bez prestanka.' },
  { category: 'impro', prompt: 'Talkshow ekspert', detail: 'Voditelj i stručnjak. Stručnjak zna sve, ma koliko apsurdno.' },
  { category: 'impro', prompt: 'Televizor', detail: '3 glumca, 3 TV kanala, daljinski upravljač iz publike. Vraćanje na kanal = isti trenutak.' },
  { category: 'impro', prompt: 'Papirić', detail: 'Impro scena. Na poziv glumac zgrabi papirić s nasumičnom rečenicom i uklopi je.' },
  { category: 'impro', prompt: 'Abeceda razgovor', detail: 'Dijalog gdje svaka sljedeća replika počinje sljedećim slovom abecede.' },
  { category: 'impro', prompt: 'Stoj, sjedi, sagni se', detail: 'Trojka: uvijek jedan stoji, jedan sjedi, jedan se saginje. Mijenjaju se u sceni.' },
  { category: 'impro', prompt: 'Večer Oscara', detail: 'Grupe od 2 dobivaju izmišljeni naslov filma i igraju nagrađenu scenu.' },
  { category: 'impro', prompt: 'Superheroj', detail: 'Izmišljeni superheroj rješava krizu. Novi heroji dolaze jedan po jedan.' },
  { category: 'impro', prompt: 'Redatelj', detail: 'Jedan priča priču iz života, ostali je igraju. Redatelj daje upute.' },
  { category: 'impro', prompt: 'Večer poezije', detail: 'Strani pjesnik, glazbenik, plesač, prevoditelj. Improvizirana pjesma iz naslova.' },
  { category: 'impro', prompt: 'Fast Forward / Rewind', detail: 'Scena s daljinskim: pauza, premotaj, ubrzaj, usporena snimka.' },
  { category: 'impro', prompt: 'Split screen', detail: 'Dvije scene paralelno. Cilj: na kraju se scene spoje.' },
  { category: 'impro', prompt: 'Nažalost / Na sreću', detail: 'Priča u krug: naizmjenično "Nažalost..." i "Srećom...".' },
  { category: 'impro', prompt: 'Fotoalbum', detail: 'Par prikazuje slike s odmora, trojka tijelima stvara poze, šesti klikće.' },
  { category: 'impro', prompt: 'Laži me', detail: 'Dvojac smišlja zajedničku laž kao odgovor na pitanje o nestašluku.' },
  { category: 'impro', prompt: 'Pitanja', detail: 'Dijalog samo u pitanjima. Tko izgovori izjavu — van.' },
  { category: 'impro', prompt: '3 riječi', detail: 'Parovi. Ispričaj priču koja uključuje 3 zadane nepovezane riječi u jednoj minuti.' },
  { category: 'impro', prompt: 'Prijenos emocija', detail: 'Dvojac počinje s različitim emocijama, postupno ih zamjenjuju.' },
  { category: 'impro', prompt: 'Los', detail: 'Krug. Igrač B improvizira opravdanje za svoju radnju. Grupa glasuje "Los" ako nije dobro.' },
  { category: 'impro', prompt: 'Osjećaji', detail: 'Parovi. Bez dodira i prepoznatljivih riječi, izvuci zadani osjećaj od partnera.' },
  { category: 'impro', prompt: 'Da, ne, molim, banana', detail: 'Parovi. Scena od 30 sekundi samo s te 4 riječi.' },
  { category: 'impro', prompt: 'Srna!', detail: 'Vođa poziva životinju, trojka mora zauzeti pozu. Posebna zamka: "Srna!" — ukočiti se.' },
  { category: 'impro', prompt: 'Tih i ozbiljan', detail: 'Parovi leđa uz leđa, okrenu se i drže ozbiljno lice. Tko se nasmije — van.' },
  { category: 'impro', prompt: 'Kobasica', detail: 'Na svako pitanje odgovor je "kobasica" — s ravnim licem.' },
  { category: 'impro', prompt: 'Intervju blizanci', detail: 'Dvojac odgovara na pitanja istovremeno, istim riječima.' },
  { category: 'impro', prompt: 'Večer poezije (jezik)', detail: 'Strani pjesnik improvizira na besmislenom jeziku, ostali interpretiraju.' },

  // POKRET
  { category: 'pokret', prompt: 'Usporeni korak', detail: 'Utrka do cilja — pobjeđuje onaj koji stigne ZADNJI. Stroga pravila koraka.' },
  { category: 'pokret', prompt: 'Pod pravim kutom', detail: 'Hodanje na stražnjici, ruke i noge pružene, leđa ravna.' },
  { category: 'pokret', prompt: 'Rak', detail: 'Na sve četiri, hodanje postrance kao rakovi.' },
  { category: 'pokret', prompt: 'Utrka na tri noge', detail: 'Parovi, isprepletenih nogu s unutrašnje strane, hodaju zajedno.' },
  { category: 'pokret', prompt: 'Majmun', detail: 'Ruke uvijek dotiču pod, glava prati horizontalnu liniju.' },
  { category: 'pokret', prompt: 'Na sve četiri', detail: 'Hod naprijed i natrag.' },
  { category: 'pokret', prompt: 'Devin hod', detail: 'Na sve četiri, desna ruka s desnom nogom, lijeva s lijevom.' },
  { category: 'pokret', prompt: 'Slonovski hod', detail: 'Na sve četiri, desna noga s lijevom rukom i obratno.' },
  { category: 'pokret', prompt: 'Klokanski hod', detail: 'Pogrbe se, prime za članke, napreduju u skokovima.' },
  { category: 'pokret', prompt: 'Oslanjanje jedni na druge', detail: 'Dvojac rame uz rame, hodaju oslanjajući se, noge što dalje.' },
  { category: 'pokret', prompt: 'Zavezanih nogu', detail: 'Noge zavezane, skokovi naprijed, natrag, u stranu.' },
  { category: 'pokret', prompt: 'Tačke', detail: 'Jedan hoda na rukama dok ga drugi drži za noge i gura.' },
  { category: 'pokret', prompt: 'Otpleši svoje ime', detail: 'Krug. Svako piše ime slovo po slovo tijelom: glava, ruka, kuk, koljeno, stopalo.' },
  { category: 'pokret', prompt: 'Pokretna traka', detail: 'Dva reda jedan nasuprot drugome. A zauzme pozu, B je zrcali. Na "pomak" redovi se miču.' },

  // SITUACIJE
  { category: 'situacije', prompt: 'Pregovaranje o cijeni stana', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Čekanje kod zubara', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Dvoje turista izgubljenih u nepoznatom gradu', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Prodavač i kupac rijetkog predmeta', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Putnici u avionu tijekom turbulencije', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Obitelj na večeri gdje svatko skriva tajnu', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Putnici u vlaku koji kasni satima', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Posada svemirskog broda koji gubi kisik', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Sastanak školskog odbora — tema: apsurdna odluka', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Grupa prijatelja na kampiranju kad nestane struje', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Banka koju pljačkaju amateri', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Audicija za ulogu u sapunici', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Putovanje kroz vrijeme koje ide po zlu', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Natjecanje u kuhanju gdje nitko ne zna kuhati', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Dva lika se zaljubljuju, ali jedan je robot', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Sastanak udruge vampira, ali jedan član je vegan', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Igra skrivača u svemirskoj stanici', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Kafić gdje su svi gosti likovi iz bajki', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Izbor za miss svijeta — natjecatelji su životinje', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Otvaranje vremenskog portala usred supermarketa', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Dva doktora raspravljaju, a pacijent sve čuje jer je budan', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Instruktor vožnje i učenik koji već 30 godina polaže', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Kuhar u restoranu Michelin zvjezdice, ali gosti žele ćevape', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Učitelj joge koji ne zna nijednu pozu', detail: 'Improvizirana scena za dva ili više glumaca.' },
  { category: 'situacije', prompt: 'Bračni par na odmoru — svaki misli da su u drugoj državi', detail: 'Improvizirana scena za dva ili više glumaca.' },
];

// ── State ──
let activeCategory = 'sve';
let filteredExercises = [...exercises];
let spotlightIndex = 0;

// Timer state
let timerSeconds = 300;
let timerInterval = null;
let timerRunning = false;

// ── DOM refs ──
const grid = document.getElementById('exerciseGrid');
const spotlight = document.getElementById('spotlight');
const spotlightCategory = document.getElementById('spotlightCategory');
const spotlightPrompt = document.getElementById('spotlightPrompt');
const spotlightDetail = document.getElementById('spotlightDetail');
const timerDisplay = document.getElementById('timerDisplay');
const btnRandom = document.getElementById('btnRandom');
const btnNext = document.getElementById('btnNext');
const spotlightClose = document.getElementById('spotlightClose');
const timerStart = document.getElementById('timerStart');
const timerReset = document.getElementById('timerReset');
const editList   = document.getElementById('editList');

// ── Helpers ──
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function applyFilter() {
  filteredExercises = activeCategory === 'sve'
    ? [...exercises]
    : exercises.filter(e => e.category === activeCategory);
  renderGrid();
}

// ── Render ──
function renderGrid() {
  document.getElementById('exerciseCount').textContent = exercises.length;
  grid.innerHTML = '';

  if (filteredExercises.length === 0) {
    grid.innerHTML = '<p class="empty">Nema vježbi za odabranu kategoriju.</p>';
    return;
  }

  filteredExercises.forEach((ex, i) => {
    const color = CATEGORY_COLORS[ex.category] || '#888888';
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.category = ex.category;
    card.style.animationDelay = `${Math.min(i * 0.03, 0.6)}s`;
    card.innerHTML = `
      <div class="card-meta">
        <span class="cat-dot" style="background:${color}"></span>
        <span class="card-category" style="color:${color}">${esc(ex.category)}</span>
      </div>
      <p class="card-prompt">${esc(ex.prompt)}</p>
      <p class="card-hint">${esc(ex.detail)}</p>
    `;
    card.addEventListener('click', () => openSpotlight(i));
    grid.appendChild(card);
  });
}

// ── Filter ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.category;
    btnRandom.classList.toggle('visible', activeCategory !== 'sve');
    applyFilter();
  });
});

// ── Random ──
btnRandom.addEventListener('click', () => {
  if (filteredExercises.length === 0) return;
  const i = Math.floor(Math.random() * filteredExercises.length);
  spotlightIndex = i;
  showSpotlight(filteredExercises[i]);
});

// ── Spotlight ──
function openSpotlight(index) {
  spotlightIndex = index;
  showSpotlight(filteredExercises[index]);
}

function showSpotlight(ex) {
  const color = CATEGORY_COLORS[ex.category] || '#888888';
  spotlightCategory.style.color = color;
  spotlightCategory.style.borderColor = color + '55';
  spotlightCategory.innerHTML = `<span class="cat-dot" style="background:${color}"></span>${esc(ex.category.toUpperCase())}`;
  spotlightPrompt.textContent = ex.prompt;
  spotlightDetail.textContent = ex.detail;
  resetTimer();
  spotlight.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeSpotlight() {
  spotlight.classList.add('hidden');
  document.body.style.overflow = '';
  pauseTimer();
}

spotlightClose.addEventListener('click', closeSpotlight);
spotlight.addEventListener('click', e => { if (e.target === spotlight) closeSpotlight(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSpotlight();
  if (e.key === 'ArrowRight' && !spotlight.classList.contains('hidden')) nextExercise();
});

btnNext.addEventListener('click', nextExercise);

function nextExercise() {
  spotlightIndex = (spotlightIndex + 1) % filteredExercises.length;
  showSpotlight(filteredExercises[spotlightIndex]);
}

// ── Timer ──
function formatTime(s) {
  const m = Math.floor(s / 60).toString().padStart(2, '0');
  const sec = (s % 60).toString().padStart(2, '0');
  return `${m}:${sec}`;
}

function resetTimer() {
  pauseTimer();
  timerSeconds = 300;
  timerDisplay.textContent = formatTime(timerSeconds);
  timerDisplay.className = '';
  timerStart.textContent = '▶ Start';
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerStart.textContent = '▶ Start';
}

timerStart.addEventListener('click', () => {
  if (timerRunning) {
    pauseTimer();
    return;
  }
  if (timerSeconds <= 0) resetTimer();
  timerRunning = true;
  timerDisplay.classList.add('running');
  timerDisplay.classList.remove('expired');
  timerStart.textContent = '⏸ Pauza';

  timerInterval = setInterval(() => {
    timerSeconds--;
    timerDisplay.textContent = formatTime(timerSeconds);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      timerDisplay.classList.remove('running');
      timerDisplay.classList.add('expired');
      timerStart.textContent = '▶ Start';
    }
  }, 1000);
});

timerReset.addEventListener('click', resetTimer);

// ── Tab switching ──
const CATEGORY_COLORS = {
  disanje:      '#4fc3f7',
  dikcija:      '#ffb74d',
  mimika:       '#ce93d8',
  glas:         '#4db6ac',
  tijelo:       '#81c784',
  zagrijavanje: '#ff8a65',
  povjerenje:   '#f48fb1',
  impro:        '#7986cb',
  pokret:       '#aed581',
  situacije:    '#4dd0e1',
};

const CATEGORIES = [
  { value: 'disanje',      label: 'Disanje' },
  { value: 'dikcija',      label: 'Dikcija' },
  { value: 'mimika',       label: 'Mimika' },
  { value: 'glas',         label: 'Glas' },
  { value: 'tijelo',       label: 'Tijelo' },
  { value: 'zagrijavanje', label: 'Zagrijavanje' },
  { value: 'povjerenje',   label: 'Povjerenje' },
  { value: 'impro',        label: 'Impro' },
  { value: 'pokret',       label: 'Pokret' },
  { value: 'situacije',    label: 'Situacije' },
];

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.dataset.tab;
    document.getElementById('tab-vjezbe').style.display = tab === 'vjezbe' ? '' : 'none';
    document.getElementById('tab-uredi').style.display  = tab === 'uredi'  ? '' : 'none';
    if (tab === 'uredi') renderEditList();
  });
});

// ── Edit tab ──
function renderEditList() {
  editList.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const catItems = exercises
      .map((ex, i) => ({ ex, i }))
      .filter(({ ex }) => ex.category === cat.value);
    if (catItems.length === 0) return;

    const group = document.createElement('div');
    group.className = 'edit-group';
    const color = CATEGORY_COLORS[cat.value] || '#888888';
    group.innerHTML = `<h3 class="edit-group-title"><span class="cat-dot" style="background:${color}"></span><span style="color:${color}">${esc(cat.label)}</span><span class="edit-group-count">${catItems.length}</span></h3>`;

    const items = document.createElement('div');
    items.className = 'edit-items';

    catItems.forEach(({ ex, i }) => {
      const row = document.createElement('div');
      row.className = 'edit-item';
      row.innerHTML = `
        <div class="edit-item-info">
          <span class="edit-item-name">${esc(ex.prompt)}</span>
          <span class="edit-item-detail">${esc(ex.detail)}</span>
        </div>
        <div class="edit-item-actions">
          <button class="btn-edit-item" data-idx="${i}">Uredi</button>
          <button class="btn-delete-item" data-idx="${i}">Izbriši</button>
        </div>`;

      const form = document.createElement('div');
      form.className = 'edit-inline-form';
      form.dataset.idx = i;
      form.innerHTML = `
        <input class="inline-prompt" type="text" value="${esc(ex.prompt)}" placeholder="Naziv vježbe" />
        <textarea class="inline-detail" placeholder="Opis vježbe">${esc(ex.detail)}</textarea>
        <div class="inline-actions">
          <button class="btn-save-inline" data-idx="${i}">Spremi</button>
          <button class="btn-cancel-inline">Odustani</button>
        </div>`;

      items.appendChild(row);
      items.appendChild(form);
    });

    group.appendChild(items);
    editList.appendChild(group);
  });
}

editList.addEventListener('click', e => {
  const editBtn   = e.target.closest('.btn-edit-item');
  const deleteBtn = e.target.closest('.btn-delete-item');
  const saveBtn   = e.target.closest('.btn-save-inline');
  const cancelBtn = e.target.closest('.btn-cancel-inline');

  if (editBtn) {
    editList.querySelectorAll('.edit-inline-form').forEach(f => { f.style.display = 'none'; });
    editList.querySelectorAll('.edit-item').forEach(it => { it.style.display = ''; });
    const row  = editBtn.closest('.edit-item');
    const form = row.nextElementSibling;
    row.style.display  = 'none';
    form.style.display = 'flex';
    form.querySelector('.inline-prompt').focus();
  }

  if (cancelBtn) {
    const form = cancelBtn.closest('.edit-inline-form');
    form.style.display = 'none';
    form.previousElementSibling.style.display = '';
  }

  if (saveBtn) {
    const form      = saveBtn.closest('.edit-inline-form');
    const idx       = parseInt(form.dataset.idx);
    const newPrompt = form.querySelector('.inline-prompt').value.trim();
    const newDetail = form.querySelector('.inline-detail').value.trim();
    if (!newPrompt) {
      form.querySelector('.inline-prompt').classList.add('input-error');
      return;
    }
    exercises[idx].prompt = newPrompt;
    exercises[idx].detail = newDetail;
    applyFilter();
    renderEditList();
  }

  if (deleteBtn) {
    const idx = parseInt(deleteBtn.dataset.idx);
    if (!confirm(`Obriši vježbu "${exercises[idx].prompt}"?`)) return;
    exercises.splice(idx, 1);
    applyFilter();
    renderEditList();
  }
});

document.getElementById('btnAdd').addEventListener('click', () => {
  const promptEl   = document.getElementById('newPrompt');
  const detailEl   = document.getElementById('newDetail');
  const categoryEl = document.getElementById('newCategory');
  const prompt     = promptEl.value.trim();
  const detail     = detailEl.value.trim();
  const category   = categoryEl.value;

  promptEl.classList.remove('input-error');
  categoryEl.classList.remove('input-error');

  let valid = true;
  if (!prompt)   { promptEl.classList.add('input-error');   valid = false; }
  if (!category) { categoryEl.classList.add('input-error'); valid = false; }
  if (!valid) return;

  exercises.push({ category, prompt, detail });
  applyFilter();
  renderEditList();

  promptEl.value   = '';
  detailEl.value   = '';
  categoryEl.value = '';
});

// ── Init ──
renderGrid();

// ── Service Worker ──
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js');
  });
}
