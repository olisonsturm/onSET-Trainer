import { ExerciseSet, Exercise } from '@/types';

export const sampleSets: ExerciseSet[] = [
    {
        id: 'set-learning',
        title: 'Learning & Education',
        description: 'C-Test exercises about learning, education and knowledge acquisition.',
        tags: ['english', 'education', 'beginner'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
    },
    {
        id: 'set-culture',
        title: 'Culture & History',
        description: 'C-Test exercises about traditions, history and cultural events.',
        tags: ['english', 'culture', 'history', 'intermediate'],
        createdAt: '2024-01-16T10:00:00Z',
        updatedAt: '2024-01-16T10:00:00Z',
    },
    {
        id: 'set-lifestyle',
        title: 'Lifestyle & Activities',
        description: 'C-Test exercises about shopping, markets and daily activities.',
        tags: ['english', 'lifestyle', 'intermediate'],
        createdAt: '2024-01-17T10:00:00Z',
        updatedAt: '2024-01-17T10:00:00Z',
    },
    {
        id: 'set-sports',
        title: 'Sports & Events',
        description: 'C-Test exercises about sports, competitions and major events.',
        tags: ['english', 'sports', 'advanced'],
        createdAt: '2024-01-18T10:00:00Z',
        updatedAt: '2024-01-18T10:00:00Z',
    },
    {
        id: 'set-science',
        title: 'Science & Technology',
        description: 'C-Test exercises about scientific discoveries and modern technology.',
        tags: ['english', 'science', 'technology', 'advanced'],
        createdAt: '2024-01-19T10:00:00Z',
        updatedAt: '2024-01-19T10:00:00Z',
    },
    {
        id: 'set-nature',
        title: 'Nature & Environment',
        description: 'C-Test exercises about wildlife, climate and environmental topics.',
        tags: ['english', 'nature', 'environment', 'intermediate'],
        createdAt: '2024-01-20T10:00:00Z',
        updatedAt: '2024-01-20T10:00:00Z',
    },
    {
        id: 'set-travel',
        title: 'Travel & Geography',
        description: 'C-Test exercises about countries, cities and travel experiences.',
        tags: ['english', 'travel', 'geography', 'beginner'],
        createdAt: '2024-01-21T10:00:00Z',
        updatedAt: '2024-01-21T10:00:00Z',
    },
    {
        id: 'set-health',
        title: 'Health & Wellness',
        description: 'C-Test exercises about health, nutrition and wellbeing.',
        tags: ['english', 'health', 'wellness', 'intermediate'],
        createdAt: '2024-01-22T10:00:00Z',
        updatedAt: '2024-01-22T10:00:00Z',
    },
];

export const sampleExercises: Exercise[] = [
    // ============ SET 1: Learning & Education (8 exercises) ============
    {
        id: 'ex-learn-001',
        setId: 'set-learning',
        rawText: 'Learning comes naturally to babies: they learn about their environment using their senses. Probably t[[he]] experience a[[t]] school ma[[kes]] a l[[ot]] of peo[[ple]] think th[[at]] learning alw[[ays]] means sit[[ting]] at a de[[sk]] listening t[[o]] someone, tak[[ing]] notes a[[nd]] then revi[[sing]] for ex[[ams]]. In fa[[ct]], this i[[s]] only o[[ne]] of ma[[ny]] possible wa[[ys]] in wh[[ich]] learning takes place and it is definitely not suitable for all topics or subjects.',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-002',
        setId: 'set-learning',
        rawText: 'Education is not just about memorizing facts. It inv[[olves]] critical thi[[nking]], problem sol[[ving]] and creat[[ivity]]. Students wh[[o]] learn t[[o]] question a[[nd]] analyze info[[rmation]] become bet[[ter]] prepared f[[or]] the challenges of real life.',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-003',
        setId: 'set-learning',
        rawText: 'Modern technology h[[as]] changed t[[he]] way w[[e]] learn. Online cour[[ses]] and edu[[cational]] apps ma[[ke]] it poss[[ible]] to st[[udy]] anywhere a[[nd]] anytime. How[[ever]], traditional class[[room]] learning st[[ill]] has m[[any]] advantages.',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-004',
        setId: 'set-learning',
        rawText: 'Universities around t[[he]] world att[[ract]] thousands o[[f]] international stud[[ents]] every ye[[ar]]. These stud[[ents]] bring div[[erse]] perspectives a[[nd]] enrich t[[he]] academic environ[[ment]]. Many form lifelong friendships during their studies.',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-005',
        setId: 'set-learning',
        rawText: 'Reading is one of t[[he]] most import[[ant]] skills chi[[ldren]] learn i[[n]] school. It op[[ens]] doors t[[o]] knowledge a[[nd]] imagination. Par[[ents]] who re[[ad]] to th[[eir]] children ev[[ery]] night he[[lp]] them dev[[elop]] a lo[[ve]] for books.',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-006',
        setId: 'set-learning',
        rawText: 'Homework has been a t[[opic]] of deb[[ate]] for ma[[ny]] years. So[[me]] experts bel[[ieve]] it reinf[[orces]] what stud[[ents]] learn i[[n]] class, wh[[ile]] others arg[[ue]] that chi[[ldren]] need mo[[re]] time f[[or]] play a[[nd]] relaxation.',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-007',
        setId: 'set-learning',
        rawText: 'Teachers play a cru[[cial]] role i[[n]] shaping yo[[ung]] minds. A go[[od]] teacher ca[[n]] inspire stud[[ents]] to ach[[ieve]] their fu[[ll]] potential. Ma[[ny]] successful peo[[ple]] credit th[[eir]] teachers f[[or]] their accompl[[ishments]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-008',
        setId: 'set-learning',
        rawText: 'Language learning req[[uires]] patience a[[nd]] practice. Exp[[erts]] recommend imm[[ersing]] yourself i[[n]] the tar[[get]] language b[[y]] watching fil[[ms]], reading bo[[oks]], and hav[[ing]] conversations wi[[th]] native spea[[kers]].',
        difficulty: 'hard',
    },

    // ============ SET 2: Culture & History (8 exercises) ============
    {
        id: 'ex-culture-001',
        setId: 'set-culture',
        rawText: 'Every year on 17 March, Irish people all over the world celebrate St. Patrick\'s Day in memory of the person who introduced Christianity to the country. St. Patrick gr[[ew]] up i[[n]] Wales. A[[t]] the a[[ge]] of 16, h[[e]] was kidn[[apped]] and sp[[ent]] six ye[[ars]] as a sl[[ave]] in Ireland. Th[[en]] he esc[[aped]] and we[[nt]] to France, wh[[ere]] he stu[[died]] in a mona[[stery]]. Later St. Patrick dec[[ided]] to g[[o]] back t[[o]] Ireland. Tod[[ay]], there a[[re]] several legends of Saint Patrick, one being that he banished all snakes from the country.',
        difficulty: 'medium',
    },
    {
        id: 'ex-culture-002',
        setId: 'set-culture',
        rawText: 'Christmas traditions va[[ry]] around t[[he]] world. I[[n]] Germany, fam[[ilies]] often deco[[rate]] their ho[[mes]] with cand[[les]] and ging[[erbread]]. In Ja[[pan]], it h[[as]] become pop[[ular]] to e[[at]] fried chi[[cken]] on Chris[[tmas]] Eve.',
        difficulty: 'medium',
    },
    {
        id: 'ex-culture-003',
        setId: 'set-culture',
        rawText: 'The Great Wall of Chi[[na]] is o[[ne]] of t[[he]] most fam[[ous]] landmarks i[[n]] the wor[[ld]]. It w[[as]] built o[[ver]] many cent[[uries]] to prot[[ect]] China fr[[om]] invaders. Tod[[ay]], millions o[[f]] tourists vi[[sit]] this rem[[arkable]] structure ev[[ery]] year.',
        difficulty: 'medium',
    },
    {
        id: 'ex-culture-004',
        setId: 'set-culture',
        rawText: 'The Renaissance was a per[[iod]] of gre[[at]] cultural cha[[nge]] in Eur[[ope]]. Artists li[[ke]] Leonardo d[[a]] Vinci a[[nd]] Michelangelo crea[[ted]] masterpieces th[[at]] still ins[[pire]] people tod[[ay]]. This e[[ra]] also s[[aw]] advances i[[n]] science a[[nd]] philosophy.',
        difficulty: 'hard',
    },
    {
        id: 'ex-culture-005',
        setId: 'set-culture',
        rawText: 'Ancient Egypt fas[[cinates]] historians a[[nd]] tourists ali[[ke]]. The pyra[[mids]] of Gi[[za]] were bu[[ilt]] over 4,500 ye[[ars]] ago a[[nd]] remain o[[ne]] of t[[he]] Seven Won[[ders]] of t[[he]] Ancient Wor[[ld]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-culture-006',
        setId: 'set-culture',
        rawText: 'Halloween originated fr[[om]] ancient Cel[[tic]] festivals. Peo[[ple]] believed th[[at]] on th[[is]] night, t[[he]] boundary bet[[ween]] the liv[[ing]] and t[[he]] dead bec[[ame]] blurred. Tod[[ay]], children dre[[ss]] up i[[n]] costumes a[[nd]] go trick-or-treating.',
        difficulty: 'easy',
    },
    {
        id: 'ex-culture-007',
        setId: 'set-culture',
        rawText: 'The French Revolution beg[[an]] in 17[[89]] and chan[[ged]] European pol[[itics]] forever. T[[he]] monarchy w[[as]] overthrown, a[[nd]] new ide[[as]] about lib[[erty]] and equal[[ity]] spread acr[[oss]] the conti[[nent]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-culture-008',
        setId: 'set-culture',
        rawText: 'Music festivals ha[[ve]] become a maj[[or]] part o[[f]] modern cult[[ure]]. Events li[[ke]] Glastonbury i[[n]] England att[[ract]] hundreds o[[f]] thousands o[[f]] visitors ea[[ch]] year. Th[[ey]] showcase bo[[th]] established a[[nd]] emerging art[[ists]].',
        difficulty: 'medium',
    },

    // ============ SET 3: Lifestyle & Activities (8 exercises) ============
    {
        id: 'ex-lifestyle-001',
        setId: 'set-lifestyle',
        rawText: 'Flea markets are wonderful places to go if you like to wander around antique stands. You ne[[ver]] know qu[[ite]] what y[[ou]] are go[[ing]] to fi[[nd]]. There a[[re]] very of[[ten]] well ov[[er]] one-hundred var[[ious]] dealers a[[nd]] shops sel[[ling]] all ki[[nds]] of thi[[ngs]]. The atmos[[phere]] is a l[[ot]] different t[[o]] strolling thr[[ough]] a shop[[ping]] centre bec[[ause]] most sm[[all]] traders would never be able to afford to run a shop there. As a result, flea markets have completely unique shops offering very unusual merchandise.',
        difficulty: 'medium',
    },
    {
        id: 'ex-lifestyle-002',
        setId: 'set-lifestyle',
        rawText: 'Cooking at ho[[me]] has bec[[ome]] increasingly pop[[ular]]. Many peo[[ple]] enjoy try[[ing]] new rec[[ipes]] and exper[[imenting]] with diff[[erent]] cuisines. It i[[s]] not on[[ly]] healthier b[[ut]] also mo[[re]] economical th[[an]] eating o[[ut]] regularly.',
        difficulty: 'medium',
    },
    {
        id: 'ex-lifestyle-003',
        setId: 'set-lifestyle',
        rawText: 'Regular exercise i[[s]] essential f[[or]] maintaining go[[od]] health. Whe[[ther]] you pref[[er]] running, swim[[ming]] or go[[ing]] to t[[he]] gym, sta[[ying]] active hel[[ps]] reduce str[[ess]] and impr[[oves]] overall well[[being]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-lifestyle-004',
        setId: 'set-lifestyle',
        rawText: 'Gardening is a relax[[ing]] hobby th[[at]] many peo[[ple]] enjoy. Grow[[ing]] your o[[wn]] vegetables ca[[n]] save mo[[ney]] and prov[[ide]] fresh prod[[uce]]. Even sma[[ll]] balconies ca[[n]] host he[[rbs]] and tom[[atoes]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-lifestyle-005',
        setId: 'set-lifestyle',
        rawText: 'Social media h[[as]] transformed h[[ow]] we commun[[icate]]. Platforms li[[ke]] Instagram a[[nd]] TikTok al[[low]] people t[[o]] share th[[eir]] lives wi[[th]] friends a[[nd]] strangers ali[[ke]]. However, ma[[ny]] worry ab[[out]] its eff[[ects]] on men[[tal]] health.',
        difficulty: 'medium',
    },
    {
        id: 'ex-lifestyle-006',
        setId: 'set-lifestyle',
        rawText: 'Remote work h[[as]] become t[[he]] new nor[[mal]] for ma[[ny]] employees. Wor[[king]] from ho[[me]] offers flex[[ibility]] but al[[so]] presents chall[[enges]]. Maintaining wor[[k]]-life bal[[ance]] requires disc[[ipline]] and go[[od]] time manag[[ement]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-lifestyle-007',
        setId: 'set-lifestyle',
        rawText: 'Coffee culture h[[as]] exploded i[[n]] recent ye[[ars]]. Specialty cof[[fee]] shops ca[[n]] be fo[[und]] on alm[[ost]] every stre[[et]] corner. Peo[[ple]] are will[[ing]] to p[[ay]] premium pri[[ces]] for high-quality bea[[ns]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-lifestyle-008',
        setId: 'set-lifestyle',
        rawText: 'Minimalism is a lifes[[tyle]] trend th[[at]] encourages peo[[ple]] to li[[ve]] with le[[ss]]. Followers bel[[ieve]] that redu[[cing]] possessions lea[[ds]] to grea[[ter]] happiness. Ma[[ny]] find th[[at]] decluttering th[[eir]] homes bri[[ngs]] peace o[[f]] mind.',
        difficulty: 'medium',
    },

    // ============ SET 4: Sports & Events (8 exercises) ============
    {
        id: 'ex-sports-001',
        setId: 'set-sports',
        rawText: 'On 6 April 1896, one of the world\'s most famous sporting events was reborn in Greece: The Olympic Games. This anc[[ient]] Greek trad[[ition]] had n[[ot]] taken pl[[ace]] for aro[[und]] 1500 ye[[ars]]. The earl[[iest]] Games on[[ly]] included run[[ning]] races, b[[ut]] as ti[[me]] went b[[y]] other categ[[ories]] such a[[s]] wrestling, box[[ing]], javelin thro[[wing]] and ho[[rse]] racing we[[re]] introduced. O[[n]] the ret[[urn]] of the Games, 43 different events were involved but the rules were a lot different to those today.',
        difficulty: 'hard',
    },
    {
        id: 'ex-sports-002',
        setId: 'set-sports',
        rawText: 'Football is t[[he]] most pop[[ular]] sport i[[n]] the wor[[ld]]. Millions o[[f]] fans wat[[ch]] matches ev[[ery]] week, eith[[er]] at stad[[iums]] or o[[n]] television. T[[he]] World C[[up]], held ev[[ery]] four ye[[ars]], attracts bil[[lions]] of view[[ers]] globally.',
        difficulty: 'medium',
    },
    {
        id: 'ex-sports-003',
        setId: 'set-sports',
        rawText: 'Tennis has prod[[uced]] many leg[[endary]] players thr[[oughout]] history. Fr[[om]] Rod La[[ver]] to Rog[[er]] Federer, th[[ese]] athletes ha[[ve]] inspired gen[[erations]] of yo[[ung]] players t[[o]] pick u[[p]] a rac[[ket]] and st[[art]] playing.',
        difficulty: 'hard',
    },
    {
        id: 'ex-sports-004',
        setId: 'set-sports',
        rawText: 'Basketball was inven[[ted]] in 18[[91]] by Ja[[mes]] Naismith. Tod[[ay]], the NB[[A]] is wat[[ched]] by mil[[lions]] around t[[he]] globe. Pla[[yers]] like Mich[[ael]] Jordan a[[nd]] LeBron Jam[[es]] have bec[[ome]] global ic[[ons]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-sports-005',
        setId: 'set-sports',
        rawText: 'Swimming is an excell[[ent]] form o[[f]] exercise. Unl[[ike]] running, i[[t]] puts li[[ttle]] stress o[[n]] the joi[[nts]]. Many peo[[ple]] learn t[[o]] swim a[[s]] children a[[nd]] enjoy t[[he]] sport thr[[oughout]] their liv[[es]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-sports-006',
        setId: 'set-sports',
        rawText: 'Marathon running h[[as]] grown i[[n]] popularity. Ma[[jor]] city mara[[thons]] like Ne[[w]] York a[[nd]] London att[[ract]] thousands o[[f]] participants. Run[[ners]] train f[[or]] months t[[o]] complete t[[he]] 26.2-mile cou[[rse]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-sports-007',
        setId: 'set-sports',
        rawText: 'Golf is often cal[[led]] a gent[[leman\'s]] game. It req[[uires]] both phys[[ical]] skill a[[nd]] mental foc[[us]]. Professional golf[[ers]] compete f[[or]] millions i[[n]] prize mo[[ney]] at tourna[[ments]] around t[[he]] world.',
        difficulty: 'hard',
    },
    {
        id: 'ex-sports-008',
        setId: 'set-sports',
        rawText: 'Cycling has bec[[ome]] a pop[[ular]] mode o[[f]] transportation. Ma[[ny]] cities no[[w]] have bi[[ke]] lanes a[[nd]] rental prog[[rams]]. The To[[ur]] de Fran[[ce]] remains t[[he]] most fam[[ous]] cycling ev[[ent]] in t[[he]] world.',
        difficulty: 'medium',
    },

    // ============ SET 5: Science & Technology (8 exercises) ============
    {
        id: 'ex-science-001',
        setId: 'set-science',
        rawText: 'Artificial intelligence i[[s]] transforming ev[[ery]] aspect o[[f]] our liv[[es]]. From sm[[art]] assistants t[[o]] self-driving ca[[rs]], AI syst[[ems]] are beco[[ming]] increasingly soph[[isticated]]. Some exp[[erts]] predict th[[at]] AI wi[[ll]] soon surp[[ass]] human intell[[igence]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-science-002',
        setId: 'set-science',
        rawText: 'Climate change i[[s]] one o[[f]] the big[[gest]] challenges fac[[ing]] humanity. Scien[[tists]] warn th[[at]] rising temper[[atures]] could ha[[ve]] devastating eff[[ects]]. Many coun[[tries]] are no[[w]] investing i[[n]] renewable ene[[rgy]] sources.',
        difficulty: 'medium',
    },
    {
        id: 'ex-science-003',
        setId: 'set-science',
        rawText: 'Space exploration h[[as]] fascinated hum[[ans]] for cent[[uries]]. The fir[[st]] moon lan[[ding]] in 19[[69]] was a hist[[oric]] achievement. Tod[[ay]], companies li[[ke]] SpaceX a[[re]] working t[[o]] make sp[[ace]] travel mo[[re]] accessible.',
        difficulty: 'medium',
    },
    {
        id: 'ex-science-004',
        setId: 'set-science',
        rawText: 'The internet h[[as]] revolutionized commun[[ication]]. In ju[[st]] a f[[ew]] decades, i[[t]] has conn[[ected]] billions o[[f]] people wor[[ldwide]]. Social net[[works]] and ema[[il]] have repl[[aced]] traditional let[[ters]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-science-005',
        setId: 'set-science',
        rawText: 'Quantum computing prom[[ises]] to revolutio[[nize]] technology. Unl[[ike]] traditional comp[[uters]], quantum mach[[ines]] can proc[[ess]] vast amo[[unts]] of da[[ta]] simultaneously. Resear[[chers]] believe th[[ey]] will sol[[ve]] problems curr[[ently]] impossible.',
        difficulty: 'hard',
    },
    {
        id: 'ex-science-006',
        setId: 'set-science',
        rawText: 'Electric vehicles a[[re]] becoming mo[[re]] common o[[n]] our roa[[ds]]. Companies li[[ke]] Tesla ha[[ve]] made elec[[tric]] cars des[[irable]] and prac[[tical]]. Many govern[[ments]] offer incen[[tives]] to encou[[rage]] their adop[[tion]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-science-007',
        setId: 'set-science',
        rawText: 'Genetic engineering al[[lows]] scientists t[[o]] modify liv[[ing]] organisms. Th[[is]] technology h[[as]] applications i[[n]] medicine, agric[[ulture]], and indus[[try]]. However, eth[[ical]] concerns ab[[out]] its u[[se]] remain cont[[roversial]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-science-008',
        setId: 'set-science',
        rawText: '3D printing i[[s]] changing manufactu[[ring]]. This techno[[logy]] can cre[[ate]] complex obj[[ects]] layer b[[y]] layer. Fr[[om]] medical impl[[ants]] to ho[[use]] components, t[[he]] possibilities a[[re]] seemingly endl[[ess]].',
        difficulty: 'medium',
    },

    // ============ SET 6: Nature & Environment (8 exercises) ============
    {
        id: 'ex-nature-001',
        setId: 'set-nature',
        rawText: 'Rainforests are am[[ong]] the mo[[st]] diverse ecosys[[tems]] on Ear[[th]]. They a[[re]] home t[[o]] millions o[[f]] species, ma[[ny]] still undi[[scovered]]. Deforesta[[tion]] threatens th[[ese]] vital habi[[tats]] every d[[ay]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-nature-002',
        setId: 'set-nature',
        rawText: 'Polar bears a[[re]] facing extin[[ction]] due t[[o]] climate cha[[nge]]. Their ic[[y]] habitat i[[s]] melting a[[t]] an alarming ra[[te]]. Conservation eff[[orts]] are esse[[ntial]] to sa[[ve]] these magni[[ficent]] creatures.',
        difficulty: 'medium',
    },
    {
        id: 'ex-nature-003',
        setId: 'set-nature',
        rawText: 'Coral reefs sup[[port]] an incre[[dible]] variety o[[f]] marine li[[fe]]. Sadly, ri[[sing]] ocean temper[[atures]] cause cora[[l]] bleaching. Scien[[tists]] are wor[[king]] to pro[[tect]] and rest[[ore]] these under[[water]] ecosystems.',
        difficulty: 'hard',
    },
    {
        id: 'ex-nature-004',
        setId: 'set-nature',
        rawText: 'Bees play a cru[[cial]] role i[[n]] our foo[[d]] system. Th[[ey]] pollinate ma[[ny]] of t[[he]] fruits a[[nd]] vegetables w[[e]] eat. Declin[[ing]] bee popula[[tions]] have rais[[ed]] concerns ab[[out]] food secu[[rity]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-nature-005',
        setId: 'set-nature',
        rawText: 'Recycling helps red[[uce]] waste a[[nd]] conserve resou[[rces]]. Many count[[ries]] now ha[[ve]] mandatory recy[[cling]] programs. Sep[[arating]] plastic, pa[[per]], and gla[[ss]] has bec[[ome]] part o[[f]] daily li[[fe]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-nature-006',
        setId: 'set-nature',
        rawText: 'Ocean pollution i[[s]] a gro[[wing]] crisis. Pla[[stic]] waste har[[ms]] marine anim[[als]] and ent[[ers]] the foo[[d]] chain. Clea[[n]]-up initiatives a[[re]] essential b[[ut]] not suffi[[cient]] alone.',
        difficulty: 'medium',
    },
    {
        id: 'ex-nature-007',
        setId: 'set-nature',
        rawText: 'Endangered species ne[[ed]] our protec[[tion]]. Organizations wor[[ldwide]] work t[[o]] preserve habi[[tats]] and comb[[at]] poaching. Ever[[y]] species pl[[ays]] a un[[ique]] role i[[n]] its ecosy[[stem]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-nature-008',
        setId: 'set-nature',
        rawText: 'Wind and solar pow[[er]] are grow[[ing]] rapidly. Th[[ese]] renewable sou[[rces]] produce cle[[an]] energy with[[out]] emissions. Ma[[ny]] countries a[[re]] investing hea[[vily]] in gr[[een]] technology.',
        difficulty: 'easy',
    },

    // ============ SET 7: Travel & Geography (8 exercises) ============
    {
        id: 'ex-travel-001',
        setId: 'set-travel',
        rawText: 'Paris is oft[[en]] called t[[he]] City o[[f]] Light. Mill[[ions]] of tour[[ists]] visit t[[he]] Eiffel Tow[[er]] every ye[[ar]]. The ci[[ty]] is al[[so]] famous f[[or]] its muse[[ums]], cafes, a[[nd]] romantic atmos[[phere]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-travel-002',
        setId: 'set-travel',
        rawText: 'Japan offers a un[[ique]] blend o[[f]] tradition a[[nd]] modernity. Anc[[ient]] temples st[[and]] alongside futur[[istic]] skyscrapers. Visi[[tors]] can expe[[rience]] both ser[[ene]] gardens a[[nd]] bustling ci[[ty]] streets.',
        difficulty: 'medium',
    },
    {
        id: 'ex-travel-003',
        setId: 'set-travel',
        rawText: 'Australia is kno[[wn]] for i[[ts]] unique wild[[life]]. Kangaroos a[[nd]] koalas a[[re]] found now[[here]] else i[[n]] the wor[[ld]]. The Gre[[at]] Barrier Re[[ef]] attracts div[[ers]] from ar[[ound]] the glo[[be]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-travel-004',
        setId: 'set-travel',
        rawText: 'Backpacking through Eur[[ope]] is a popu[[lar]] rite o[[f]] passage. Yo[[ung]] travelers vis[[it]] multiple count[[ries]] on a bud[[get]]. Trains a[[nd]] hostels ma[[ke]] it affo[[rdable]] to exp[[lore]] the conti[[nent]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-travel-005',
        setId: 'set-travel',
        rawText: 'New York City nev[[er]] sleeps. Fr[[om]] Times Squ[[are]] to Cent[[ral]] Park, the[[re]] is alw[[ays]] something t[[o]] see a[[nd]] do. I[[t]] remains o[[ne]] of t[[he]] world\'s mo[[st]] visited desti[[nations]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-travel-006',
        setId: 'set-travel',
        rawText: 'Safari trips i[[n]] Africa off[[er]] unforgettable exper[[iences]]. Watching li[[ons]] and eleph[[ants]] in th[[eir]] natural habi[[tat]] is tru[[ly]] magical. Ke[[nya]] and Tanz[[ania]] are pop[[ular]] safari desti[[nations]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-travel-007',
        setId: 'set-travel',
        rawText: 'Cruise ships off[[er]] a lux[[urious]] way t[[o]] travel. Pass[[engers]] can vis[[it]] multiple desti[[nations]] while enjoy[[ing]] onboard enter[[tainment]]. Caribbean crui[[ses]] are especi[[ally]] popular wi[[th]] families.',
        difficulty: 'easy',
    },
    {
        id: 'ex-travel-008',
        setId: 'set-travel',
        rawText: 'Iceland\'s natural bea[[uty]] is breath[[taking]]. Visitors ca[[n]] see glac[[iers]], waterfalls, a[[nd]] the Nort[[hern]] Lights. Geothe[[rmal]] pools prov[[ide]] relaxation af[[ter]] days o[[f]] exploration.',
        difficulty: 'medium',
    },

    // ============ SET 8: Health & Wellness (8 exercises) ============
    {
        id: 'ex-health-001',
        setId: 'set-health',
        rawText: 'A balanced diet i[[s]] essential f[[or]] good hea[[lth]]. Eating ple[[nty]] of fru[[its]] and veget[[ables]] provides essen[[tial]] vitamins a[[nd]] minerals. Proc[[essed]] foods sho[[uld]] be lim[[ited]] whenever poss[[ible]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-health-002',
        setId: 'set-health',
        rawText: 'Sleep is cru[[cial]] for phy[[sical]] and men[[tal]] health. Adu[[lts]] need sev[[en]] to ni[[ne]] hours o[[f]] quality sl[[eep]]. Poor sl[[eep]] can le[[ad]] to var[[ious]] health prob[[lems]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-health-003',
        setId: 'set-health',
        rawText: 'Mental health i[[s]] just a[[s]] important a[[s]] physical hea[[lth]]. Stress a[[nd]] anxiety aff[[ect]] millions o[[f]] people wor[[ldwide]]. Seeking prof[[essional]] help sho[[uld]] never b[[e]] stigmatized.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-004',
        setId: 'set-health',
        rawText: 'Meditation has pro[[ven]] benefits f[[or]] stress redu[[ction]]. Just t[[en]] minutes o[[f]] daily prac[[tice]] can impr[[ove]] focus a[[nd]] wellbeing. Ma[[ny]] apps no[[w]] offer gui[[ded]] meditation sess[[ions]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-005',
        setId: 'set-health',
        rawText: 'Drinking enough wa[[ter]] is ess[[ential]] for hea[[lth]]. The bo[[dy]] needs wa[[ter]] to func[[tion]] properly. Expe[[rts]] recommend ei[[ght]] glasses o[[f]] water ea[[ch]] day.',
        difficulty: 'easy',
    },
    {
        id: 'ex-health-006',
        setId: 'set-health',
        rawText: 'Yoga combines phy[[sical]] exercise wi[[th]] meditation. I[[t]] improves flexi[[bility]], strength, a[[nd]] mental clar[[ity]]. Millions o[[f]] people prac[[tice]] yoga reg[[ularly]] around t[[he]] world.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-007',
        setId: 'set-health',
        rawText: 'Vaccinations have sa[[ved]] millions o[[f]] lives. Th[[ey]] protect aga[[inst]] dangerous dise[[ases]] like meas[[les]] and pol[[io]]. Modern medi[[cine]] continues t[[o]] develop ne[[w]] vaccines.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-008',
        setId: 'set-health',
        rawText: 'Regular health check[[ups]] can det[[ect]] problems ear[[ly]]. Doctors recom[[mend]] annual exam[[inations]] for adu[[lts]]. Prevention i[[s]] always bet[[ter]] than tre[[atment]] when i[[t]] comes t[[o]] health.',
        difficulty: 'easy',
    },
];
