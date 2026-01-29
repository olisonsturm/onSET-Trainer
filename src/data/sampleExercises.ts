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
];

export const sampleExercises: Exercise[] = [
    // Set 1: Learning & Education
    {
        id: 'ex-001',
        setId: 'set-learning',
        rawText: 'Learning comes naturally to babies: they learn about their environment using their senses. Probably t[[he]] experience a[[t]] school ma[[kes]] a l[[ot]] of peo[[ple]] think th[[at]] learning alw[[ays]] means sit[[ting]] at a de[[sk]] listening t[[o]] someone, tak[[ing]] notes a[[nd]] then revi[[sing]] for ex[[ams]]. In fa[[ct]], this i[[s]] only o[[ne]] of ma[[ny]] possible wa[[ys]] in wh[[ich]] learning takes place and it is definitely not suitable for all topics or subjects.',
        difficulty: 'easy',
    },
    {
        id: 'ex-002',
        setId: 'set-learning',
        rawText: 'Education is not just about memorizing facts. It inv[[olves]] critical thi[[nking]], problem sol[[ving]] and creat[[ivity]]. Students wh[[o]] learn t[[o]] question a[[nd]] analyze info[[rmation]] become bet[[ter]] prepared f[[or]] the challenges of real life.',
        difficulty: 'easy',
    },
    {
        id: 'ex-003',
        setId: 'set-learning',
        rawText: 'Modern technology h[[as]] changed t[[he]] way w[[e]] learn. Online cour[[ses]] and edu[[cational]] apps ma[[ke]] it poss[[ible]] to st[[udy]] anywhere a[[nd]] anytime. How[[ever]], traditional class[[room]] learning st[[ill]] has m[[any]] advantages.',
        difficulty: 'easy',
    },

    // Set 2: Culture & History
    {
        id: 'ex-004',
        setId: 'set-culture',
        rawText: 'Every year on 17 March, Irish people all over the world celebrate St. Patrick\'s Day in memory of the person who introduced Christianity to the country. St. Patrick gr[[ew]] up i[[n]] Wales. A[[t]] the a[[ge]] of 16, h[[e]] was kidn[[apped]] and sp[[ent]] six ye[[ars]] as a sl[[ave]] in Ireland. Th[[en]] he esc[[aped]] and we[[nt]] to France, wh[[ere]] he stu[[died]] in a mona[[stery]]. Later St. Patrick dec[[ided]] to g[[o]] back t[[o]] Ireland. Tod[[ay]], there a[[re]] several legends of Saint Patrick, one being that he banished all snakes from the country.',
        difficulty: 'medium',
    },
    {
        id: 'ex-005',
        setId: 'set-culture',
        rawText: 'Christmas traditions va[[ry]] around t[[he]] world. I[[n]] Germany, fam[[ilies]] often deco[[rate]] their ho[[mes]] with cand[[les]] and gi[[ngerbread]]. In Ja[[pan]], it h[[as]] become pop[[ular]] to e[[at]] fried chi[[cken]] on Chris[[tmas]] Eve.',
        difficulty: 'medium',
    },
    {
        id: 'ex-006',
        setId: 'set-culture',
        rawText: 'The Great Wall of Chi[[na]] is o[[ne]] of t[[he]] most fam[[ous]] landmarks i[[n]] the wor[[ld]]. It w[[as]] built o[[ver]] many cent[[uries]] to prot[[ect]] China fr[[om]] invaders. Tod[[ay]], millions o[[f]] tourists vi[[sit]] this rem[[arkable]] structure ev[[ery]] year.',
        difficulty: 'medium',
    },

    // Set 3: Lifestyle & Activities
    {
        id: 'ex-007',
        setId: 'set-lifestyle',
        rawText: 'Flea markets are wonderful places to go if you like to wander around antique stands. You ne[[ver]] know qu[[ite]] what y[[ou]] are go[[ing]] to fi[[nd]]. There a[[re]] very of[[ten]] well ov[[er]] one-hundred var[[ious]] dealers a[[nd]] shops sel[[ling]] all ki[[nds]] of thi[[ngs]]. The atmos[[phere]] is a l[[ot]] different t[[o]] strolling thr[[ough]] a shop[[ping]] centre bec[[ause]] most sm[[all]] traders would never be able to afford to run a shop there. As a result, flea markets have completely unique shops offering very unusual merchandise.',
        difficulty: 'medium',
    },
    {
        id: 'ex-008',
        setId: 'set-lifestyle',
        rawText: 'Cooking at ho[[me]] has bec[[ome]] increasingly pop[[ular]]. Many peo[[ple]] enjoy try[[ing]] new rec[[ipes]] and exper[[imenting]] with diff[[erent]] cuisines. It i[[s]] not on[[ly]] healthier b[[ut]] also mo[[re]] economical th[[an]] eating o[[ut]] regularly.',
        difficulty: 'medium',
    },
    {
        id: 'ex-009',
        setId: 'set-lifestyle',
        rawText: 'Regular exercise i[[s]] essential f[[or]] maintaining go[[od]] health. Whe[[ther]] you pref[[er]] running, swim[[ming]] or go[[ing]] to t[[he]] gym, sta[[ying]] active hel[[ps]] reduce str[[ess]] and impr[[oves]] overall well[[being]].',
        difficulty: 'easy',
    },

    // Set 4: Sports & Events
    {
        id: 'ex-010',
        setId: 'set-sports',
        rawText: 'On 6 April 1896, one of the world\'s most famous sporting events was reborn in Greece: The Olympic Games. This anc[[ient]] Greek trad[[ition]] had n[[ot]] taken pl[[ace]] for aro[[und]] 1500 ye[[ars]]. The earl[[iest]] Games on[[ly]] included run[[ning]] races, b[[ut]] as ti[[me]] went b[[y]] other categ[[ories]] such a[[s]] wrestling, box[[ing]], javelin thro[[wing]] and ho[[rse]] racing we[[re]] introduced. O[[n]] the ret[[urn]] of the Games, 43 different events were involved but the rules were a lot different to those today.',
        difficulty: 'hard',
    },
    {
        id: 'ex-011',
        setId: 'set-sports',
        rawText: 'Football is t[[he]] most pop[[ular]] sport i[[n]] the wor[[ld]]. Millions o[[f]] fans wat[[ch]] matches ev[[ery]] week, eith[[er]] at stad[[iums]] or o[[n]] television. T[[he]] World C[[up]], held ev[[ery]] four ye[[ars]], attracts bil[[lions]] of view[[ers]] globally.',
        difficulty: 'medium',
    },
    {
        id: 'ex-012',
        setId: 'set-sports',
        rawText: 'Tennis has prod[[uced]] many leg[[endary]] players thr[[oughout]] history. Fr[[om]] Rod La[[ver]] to Rog[[er]] Federer, th[[ese]] athletes ha[[ve]] inspired gen[[erations]] of yo[[ung]] players t[[o]] pick u[[p]] a rac[[ket]] and st[[art]] playing.',
        difficulty: 'hard',
    },
];
