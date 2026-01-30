import { ExerciseSet, Exercise } from '@/types';

export const sampleSets: ExerciseSet[] = [
    {
        id: 'set-learning',
        title: 'Learning & the Brain',
        description: 'B2/C1 texts about education, memory, and cognitive science. 160 points total.',
        tags: ['english', 'education', 'B2', 'C1'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
    },
    {
        id: 'set-technology',
        title: 'Technology & Society',
        description: 'C1 texts about digital transformation and its impact. 160 points total.',
        tags: ['english', 'technology', 'C1'],
        createdAt: '2024-01-16T10:00:00Z',
        updatedAt: '2024-01-16T10:00:00Z',
    },
    {
        id: 'set-history',
        title: 'History & Culture',
        description: 'C1 texts about historical events and cultural developments. 160 points total.',
        tags: ['english', 'history', 'culture', 'C1'],
        createdAt: '2024-01-17T10:00:00Z',
        updatedAt: '2024-01-17T10:00:00Z',
    },
    {
        id: 'set-environment',
        title: 'Environment & Climate',
        description: 'C1 texts about climate change and environmental challenges. 160 points total.',
        tags: ['english', 'environment', 'C1'],
        createdAt: '2024-01-18T10:00:00Z',
        updatedAt: '2024-01-18T10:00:00Z',
    },
    {
        id: 'set-traditions',
        title: 'Traditions & Festivals',
        description: 'B2 texts about cultural celebrations and customs. 160 points total.',
        tags: ['english', 'culture', 'B2'],
        createdAt: '2024-01-19T10:00:00Z',
        updatedAt: '2024-01-19T10:00:00Z',
    },
    {
        id: 'set-lifestyle',
        title: 'Lifestyle & Leisure',
        description: 'B2/C1 texts about markets, hobbies, and daily activities. 160 points total.',
        tags: ['english', 'lifestyle', 'B2'],
        createdAt: '2024-01-20T10:00:00Z',
        updatedAt: '2024-01-20T10:00:00Z',
    },
    {
        id: 'set-sports',
        title: 'Sports & Competition',
        description: 'B2/C1 texts about athletics, competitions, and sporting history. 160 points total.',
        tags: ['english', 'sports', 'C1'],
        createdAt: '2024-01-21T10:00:00Z',
        updatedAt: '2024-01-21T10:00:00Z',
    },
    {
        id: 'set-science',
        title: 'Science & Innovation',
        description: 'C1 texts about scientific discoveries and technological breakthroughs. 160 points total.',
        tags: ['english', 'science', 'C1'],
        createdAt: '2024-01-22T10:00:00Z',
        updatedAt: '2024-01-22T10:00:00Z',
    },
];

// 8 sets × 8 exercises × 20 gaps = 1280 total gaps (160 per set)
export const sampleExercises: Exercise[] = [
    // ============ SET 1: Learning & the Brain (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-learn-001',
        setId: 'set-learning',
        rawText: 'Many people assu[[me]] that learning only takes pl[[ace]] in a classroom, but this is far fr[[om]] the truth. In rea[[lity]], learning occ[[urs]] whenever we intera[[ct]] with our surrounding environment. Fr[[om]] an early age, hum[[ans]] begin to fo[[rm]] patterns, recognise conn[[ections]] and adapt th[[eir]] behaviour accord[[ing]] to personal exper[[ience]]. Recent stud[[ies]] suggest that emot[[ional]] involvement plays a k[[ey]] role in mem[[ory]] retention and long-t[[erm]] recall abilities.',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-002',
        setId: 'set-learning',
        rawText: 'Learning comes naturally to babies: they learn about their environment using their senses. Prob[[ably]] the experi[[ence]] at school ma[[kes]] a lot of peo[[ple]] think that lear[[ning]] always me[[ans]] sitting at a de[[sk]] listening to som[[eone]], taking no[[tes]] and then revi[[sing]] for exams. In fa[[ct]], this is on[[ly]] one of ma[[ny]] possible ways in wh[[ich]] learning takes pl[[ace]] and it is defini[[tely]] not suitable for a[[ll]] topics or subj[[ects]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-003',
        setId: 'set-learning',
        rawText: 'The concept of lifelong lear[[ning]] has gained signifi[[cant]] attention in rec[[ent]] years as the wor[[ld]] becomes increasingly comp[[lex]]. Professionals are now exp[[ected]] to continuously upd[[ate]] their skills to rem[[ain]] competitive in the job mar[[ket]]. Many employ[[ers]] offer training progr[[ammes]] to support this devel[[opment]], recognising that inve[[sting]] in education benef[[its]] both the indivi[[dual]] and the organis[[ation]]. This shift repres[[ents]] a fundamental ch[[ange]] in workplace cult[[ure]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-learn-004',
        setId: 'set-learning',
        rawText: 'Neuroscientists have discov[[ered]] that the br[[ain]] remains plastic throu[[ghout]] life, meaning that adu[[lts]] can form new neu[[ral]] connections just as chil[[dren]] do. However, the proc[[ess]] may require more delib[[erate]] practice and repet[[ition]] to achieve sim[[ilar]] results. This find[[ing]] has profound implic[[ations]] for education, sugge[[sting]] that it is ne[[ver]] too late to le[[arn]] new skills or acq[[uire]] new knowledge thro[[ugh]] dedicated effort.',
        difficulty: 'hard',
    },
    {
        id: 'ex-learn-005',
        setId: 'set-learning',
        rawText: 'The traditional lec[[ture]] format is be[[ing]] increasingly quest[[ioned]] by modern educ[[ators]] around the wor[[ld]]. Research sugg[[ests]] that active partic[[ipation]] leads to bet[[ter]] outcomes than pass[[ive]] listening alone. Stud[[ents]] who engage wi[[th]] material through discus[[sion]], problem-solving and prac[[tical]] exercises tend to ret[[ain]] more inform[[ation]]. This underst[[anding]] has prompted ma[[ny]] institutions to rede[[sign]] their teaching meth[[ods]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-006',
        setId: 'set-learning',
        rawText: 'Sleep plays a cru[[cial]] role in consoli[[dating]] memories and proce[[ssing]] information lear[[ned]] during the wa[[king]] hours. During de[[ep]] sleep, the br[[ain]] organises and str[[engthens]] neural pathways. Stud[[ents]] who sacrifice sl[[eep]] for last-minute stud[[ying]] often perform wo[[rse]] than those who r[[est]] adequately bef[[ore]] examinations. This rese[[arch]] highlights the impor[[tance]] of balanced stu[[dy]] habits and proper sl[[eep]] hygiene.',
        difficulty: 'medium',
    },
    {
        id: 'ex-learn-007',
        setId: 'set-learning',
        rawText: 'Multilingual indivi[[duals]] often demonstrate enha[[nced]] cognitive flexib[[ility]] compared to monol[[ingual]] speakers. Rese[[arch]] indicates that spea[[king]] multiple lang[[uages]] can delay the on[[set]] of cognitive dec[[line]] in older adu[[lts]]. This finding has encou[[raged]] early language educ[[ation]] programmes in ma[[ny]] countries. Pare[[nts]] are increasingly enro[[lling]] children in bili[[ngual]] schools to prov[[ide]] these cognitive advan[[tages]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-learn-008',
        setId: 'set-learning',
        rawText: 'Educational technology has trans[[formed]] how students access infor[[mation]] and interact wi[[th]] course material. Onl[[ine]] platforms enable lear[[ning]] anytime and anyw[[here]], removing tradit[[ional]] barriers to educ[[ation]]. However, cri[[tics]] argue that dig[[ital]] tools cannot rep[[lace]] the value of face-to-f[[ace]] interaction wi[[th]] teachers and pe[[ers]]. The ideal appr[[oach]] likely combines bo[[th]] methods to maxi[[mise]] learning outcomes effect[[ively]].',
        difficulty: 'medium',
    },

    // ============ SET 2: Technology & Society (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-tech-001',
        setId: 'set-technology',
        rawText: 'Over the pa[[st]] few decades, digital techno[[logy]] has fundamentally transf[[ormed]] the way people commu[[nicate]] and work. Dev[[ices]] that were once consi[[dered]] luxuries are now rega[[rded]] as absolute necess[[ities]]. As a res[[ult]], individuals are expe[[cted]] to remain conn[[ected]] at all ti[[mes]]. This constant availab[[ility]], however, has rai[[sed]] serious conc[[erns]] about mental he[[alth]] and work-life bala[[nce]] in modern soc[[iety]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-tech-002',
        setId: 'set-technology',
        rawText: 'Many experts wa[[rn]] that excessive scr[[een]] use may negat[[ively]] affect attention sp[[an]] and reduce the abil[[ity]] to engage in de[[ep]], meaningful inter[[action]]. Social media platf[[orms]] have revolutio[[nised]] how people share infor[[mation]], but news spr[[eads]] faster than ever bef[[ore]] along with misinfor[[mation]]. Users must dev[[elop]] critical thinking ski[[lls]] to navigate th[[is]] complex digital lands[[cape]] safely and effect[[ively]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-tech-003',
        setId: 'set-technology',
        rawText: 'Artificial intelli[[gence]] is reshaping industries ac[[ross]] the globe at an unprece[[dented]] pace. From healthc[[are]] to finance, AI sys[[tems]] are performing tasks th[[at]] once required human exper[[tise]] and judgement. This sh[[ift]] raises important quest[[ions]] about the fut[[ure]] of employment. Wh[[ile]] some jobs will disap[[pear]], new roles are emer[[ging]] that require differ[[ent]] skills and adapt[[ability]] from the work[[force]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-tech-004',
        setId: 'set-technology',
        rawText: 'The rise of rem[[ote]] work has challen[[ged]] traditional off[[ice]] culture in fundame[[ntal]] ways. Emplo[[yees]] now enjoy gre[[ater]] flexibility but al[[so]] face new obsta[[cles]] in maintaining produc[[tivity]]. Maintaining work-l[[ife]] boundaries requires cons[[cious]] effort when home a[[nd]] office spaces mer[[ge]]. Many organisations are develo[[ping]] hybrid models th[[at]] combine the bene[[fits]] of both appro[[aches]] to satisfy dive[[rse]] employee needs.',
        difficulty: 'medium',
    },
    {
        id: 'ex-tech-005',
        setId: 'set-technology',
        rawText: 'Cybersecurity threa[[ts]] have become increas[[ingly]] sophisticated in rec[[ent]] years. Hackers tar[[get]] both individuals and organ[[isations]], stealing sens[[itive]] data for finan[[cial]] gain or polit[[ical]] purposes. Prote[[cting]] digital assets req[[uires]] constant vigilance and upda[[ted]] defences. Compan[[ies]] now invest heav[[ily]] in security infrastru[[cture]] and employee trai[[ning]] to prevent cost[[ly]] data breaches and mainta[[in]] customer trust.',
        difficulty: 'hard',
    },
    {
        id: 'ex-tech-006',
        setId: 'set-technology',
        rawText: 'Streaming services ha[[ve]] transformed the entertainment indu[[stry]] beyond recognition. Tradit[[ional]] television networks are los[[ing]] viewers to platf[[orms]] like Netflix and Spo[[tify]] at an alarm[[ing]] rate. Consumers now exp[[ect]] on-demand access to con[[tent]] anywhere and any[[time]]. This shift has for[[ced]] media companies to recons[[ider]] their business mod[[els]] and invest in orig[[inal]] content to remain compet[[itive]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-tech-007',
        setId: 'set-technology',
        rawText: 'Electric vehicles repr[[esent]] a significant sh[[ift]] in personal transpor[[tation]]. Automakers are inves[[ting]] billions in bat[[tery]] technology to exte[[nd]] driving range and red[[uce]] charging times. Govern[[ments]] worldwide offer incen[[tives]] to accelerate adopt[[ion]] and reduce car[[bon]] emissions from tra[[nsport]]. The transition to elec[[tric]] mobility will also req[[uire]] substantial invest[[ment]] in charging infrastr[[ucture]] across urban and ru[[ral]] areas alike.',
        difficulty: 'medium',
    },
    {
        id: 'ex-tech-008',
        setId: 'set-technology',
        rawText: 'Privacy concerns surro[[und]] digital communication in the mod[[ern]] age. Companies coll[[ect]] vast amounts of pers[[onal]] data from users, of[[ten]] without clear con[[sent]] or transparency. Regul[[ations]] like the Gene[[ral]] Data Protection Regul[[ation]] aim to protect ci[[tizen]] rights in Euro[[pe]]. Similar laws are be[[ing]] introduced worldw[[ide]] as governments recog[[nise]] the need to bal[[ance]] innovation with indivi[[dual]] privacy rights effect[[ively]].',
        difficulty: 'hard',
    },

    // ============ SET 3: History & Culture (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-history-001',
        setId: 'set-history',
        rawText: 'Throughout hist[[ory]], cities have often devel[[oped]] in response to econo[[mic]] opportunities rather than care[[ful]] planning. As tr[[ade]] expanded, settlements gr[[ew]] rapidly, frequently with[[out]] adequate infrastru[[cture]]. This led to overcro[[wded]] housing, unsani[[tary]] conditions and recur[[ring]] public health cri[[ses]]. It was not un[[til]] the late nineteenth cent[[ury]] that urban plan[[ning]] became a discipl[[ine]] in its own ri[[ght]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-history-002',
        setId: 'set-history',
        rawText: 'The Industrial Revol[[ution]] fundamentally alt[[ered]] European society begi[[nning]] in the eighteenth cent[[ury]]. Millions of wor[[kers]] migrated from ru[[ral]] areas to ur[[ban]] centres seeking emplo[[yment]]. Factory work repla[[ced]] agricultural labour, crea[[ting]] new social cla[[sses]] and political tens[[ions]]. Working conditions we[[re]] often dangerous and expl[[oitative]] until reform move[[ments]] demanded change and prote[[ction]] for vulnerable work[[ers]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-history-003',
        setId: 'set-history',
        rawText: 'The Renaissance mar[[ked]] a period of unprece[[dented]] cultural achievement in Eur[[ope]]. Artists like Leon[[ardo]] da Vinci and Michel[[angelo]] created masterpie[[ces]] that continue to ins[[pire]] people today. Scien[[tific]] inquiry also flour[[ished]] during this e[[ra]], challenging tradition[[al]] beliefs and lay[[ing]] groundwork for mod[[ern]] science. This intellec[[tual]] awakening spread from It[[aly]] throughout the conti[[nent]] over several centu[[ries]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-history-004',
        setId: 'set-history',
        rawText: 'Colonial expansion had prof[[ound]] and lasting eff[[ects]] on societies world[[wide]]. Indigenous popula[[tions]] suffered displac[[ement]] and exploitation at the ha[[nds]] of European pow[[ers]]. The legacies of th[[is]] period continue to sha[[pe]] international relations tod[[ay]]. Many former colo[[nies]] still grapple with econo[[mic]] inequalities and inst[[utional]] challenges rooted in th[[eir]] colonial past and exp[[erience]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-history-005',
        setId: 'set-history',
        rawText: 'Ancient civilisations devel[[oped]] sophisticated systems of govern[[ance]] that influence mod[[ern]] political structures. The Rom[[ans]] created legal frame[[works]] that form the ba[[sis]] of many contem[[porary]] legal systems. Gr[[eek]] democracy establ[[ished]] principles still val[[ued]] in modern socie[[ties]]. Studying these anc[[ient]] societies helps us under[[stand]] how political instit[[utions]] evolve over ti[[me]] and across cult[[ures]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-history-006',
        setId: 'set-history',
        rawText: 'The two World Wa[[rs]] of the twentieth cent[[ury]] reshaped the glo[[bal]] order in profo[[und]] ways. Millions lo[[st]] their lives in th[[ese]] devastating confl[[icts]]. The aftermath led to n[[ew]] international instit[[utions]] designed to prev[[ent]] future wars and prom[[ote]] cooperation. Organisa[[tions]] like the Uni[[ted]] Nations emerged fr[[om]] this desire for pe[[ace]] and global stabi[[lity]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-history-007',
        setId: 'set-history',
        rawText: 'The civil rights move[[ment]] challenged systemic discrim[[ination]] in many coun[[tries]] during the twent[[ieth]] century. Activ[[ists]] campaigned for eq[[ual]] treatment regardless of ra[[ce]] or gender with remark[[able]] courage. Their eff[[orts]] resulted in land[[mark]] legislation and soc[[ial]] change. However, the str[[uggle]] for true equal[[ity]] continues in many soci[[eties]] where discrimination pers[[ists]] in various fo[[rms]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-history-008',
        setId: 'set-history',
        rawText: 'Archaeological discov[[eries]] continue to resh[[ape]] our understanding of anc[[ient]] cultures and civilis[[ations]]. New technologies all[[ow]] researchers to unco[[ver]] artefacts without distu[[rbing]] sensitive sites. These fin[[dings]] often challenge previ[[ous]] assumptions about hist[[orical]] events and soci[[eties]]. The field has bec[[ome]] increasingly interdisc[[iplinary]], combining meth[[ods]] from science and human[[ities]] to build more compl[[ete]] pictures of the p[[ast]].',
        difficulty: 'hard',
    },

    // ============ SET 4: Environment & Climate (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-env-001',
        setId: 'set-environment',
        rawText: 'Climate change poses one of the most signi[[ficant]] challenges facing huma[[nity]] today. Its eff[[ects]] are not lim[[ited]] to rising temper[[atures]] but also incl[[ude]] shifts in wea[[ther]] patterns, loss of biodi[[versity]] and increasing pres[[sure]] on food produ[[ction]] systems. Although scien[[tific]] evidence is overwhe[[lming]], political action of[[ten]] remains slow due to econo[[mic]] considerations and compet[[ing]] interests.',
        difficulty: 'hard',
    },
    {
        id: 'ex-env-002',
        setId: 'set-environment',
        rawText: 'Short-term economic consider[[ations]] continue to outw[[eigh]] long-term environmental respon[[sibility]] in many pol[[icy]] decisions. Despite the poten[[tial]] consequences for fut[[ure]] generations, govern[[ments]] often prioritise immed[[iate]] economic growth. This del[[ay]] proves costly as clim[[ate]] impacts intensify. Interna[[tional]] agreements like the Par[[is]] Accord attempt to un[[ite]] nations around sha[[red]] targets, though impleme[[ntation]] varies signif[[icantly]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-env-003',
        setId: 'set-environment',
        rawText: 'Renewable energy sour[[ces]] are becoming increas[[ingly]] competitive with fos[[sil]] fuels in many mar[[kets]]. Solar and wi[[nd]] power capacity has gro[[wn]] exponentially in rec[[ent]] years. This trans[[ition]] offers hope for redu[[cing]] carbon emissions signif[[icantly]]. However, chall[[enges]] remain around energy stor[[age]] and grid integr[[ation]] that must be sol[[ved]] to enable comp[[lete]] decarbonisation of the ele[[ctricity]] sector globally.',
        difficulty: 'medium',
    },
    {
        id: 'ex-env-004',
        setId: 'set-environment',
        rawText: 'Deforestation conti[[nues]] to threaten crit[[ical]] ecosystems around the wor[[ld]]. Tropical rainfo[[rests]] absorb vast amou[[nts]] of carbon diox[[ide]] from the atmos[[phere]]. Their destruc[[tion]] accelerates climate cha[[nge]] while driving spec[[ies]] towards extinct[[ion]]. Conserva[[tion]] efforts face oppos[[ition]] from agricultural and log[[ging]] interests that profit fr[[om]] clearing forest la[[nd]] for commercial purp[[oses]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-env-005',
        setId: 'set-environment',
        rawText: 'Ocean acidification repre[[sents]] a less visible but equ[[ally]] serious threat to mar[[ine]] ecosystems. Rising car[[bon]] levels change seaw[[ater]] chemistry, affecting mar[[ine]] life at every le[[vel]]. Coral reefs are parti[[cularly]] vulnerable to th[[ese]] changes, with mass blea[[ching]] events becoming more freq[[uent]]. Scientists warn th[[at]] protecting ocean he[[alth]] requires urgent red[[uction]] in global car[[bon]] emissions worldwide.',
        difficulty: 'hard',
    },
    {
        id: 'ex-env-006',
        setId: 'set-environment',
        rawText: 'Sustainable agriculture prac[[tices]] can help red[[uce]] environmental impact wh[[ile]] maintaining food produ[[ction]]. Organic farming avo[[ids]] synthetic pesti[[cides]] and fertilisers th[[at]] can harm soil he[[alth]]. Crop rotation and div[[erse]] planting improve so[[il]] quality naturally over ti[[me]]. These methods also supp[[ort]] biodiversity by crea[[ting]] habitats for benef[[icial]] insects and wildlife spec[[ies]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-env-007',
        setId: 'set-environment',
        rawText: 'Plastic pollution has rea[[ched]] every corner of the pla[[net]], from mountaintops to the deep[[est]] ocean trenches. Micropla[[stics]] have been fo[[und]] in drinking water, so[[il]] and even human blo[[od]]. Reducing single-use plas[[tics]] has become a glo[[bal]] priority for environ[[mental]] organisations. However, plas[[tic]] production continues to incr[[ease]] as demand for che[[ap]] packaging and produ[[cts]] grows in develo[[ping]] economies worldwide.',
        difficulty: 'medium',
    },
    {
        id: 'ex-env-008',
        setId: 'set-environment',
        rawText: 'Urban green spaces prov[[ide]] essential ecosystem serv[[ices]] to city residents. Pa[[rks]] and gardens help co[[ol]] cities during he[[at]] waves through natural shad[[ing]]. They also support biodi[[versity]] and improve resid[[ents]] mental and physical he[[alth]]. City planners are increas[[ingly]] incorporating green infra[[structure]] into urban desi[[gns]]. These investments pay divid[[ends]] in improved quality of li[[fe]] and reduced healthcare co[[sts]].',
        difficulty: 'easy',
    },

    // ============ SET 5: Traditions & Festivals (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-trad-001',
        setId: 'set-traditions',
        rawText: 'Every year on 17 March, Irish people all over the world celebrate St. Patrick\'s Day in memory of the person who introduced Christianity to the country. St. Patrick gr[[ew]] up i[[n]] Wales. A[[t]] the a[[ge]] of 16, h[[e]] was kidn[[apped]] and sp[[ent]] six ye[[ars]] as a sl[[ave]] in Ireland. Th[[en]] he esc[[aped]] and we[[nt]] to France, wh[[ere]] he stu[[died]] in a mona[[stery]]. Later St. Patrick dec[[ided]] to g[[o]] back t[[o]] Ireland. Tod[[ay]], there a[[re]] several legends of Saint Patrick.',
        difficulty: 'easy',
    },
    {
        id: 'ex-trad-002',
        setId: 'set-traditions',
        rawText: 'Carnival celebrations t[[ake]] place in ma[[ny]] countries around the wo[[rld]] before Lent beg[[ins]]. In Bra[[zil]], elaborate para[[des]] feature colourful cost[[umes]] and energetic sam[[ba]] dancing through the str[[eets]]. Venice is fam[[ous]] for its eleg[[ant]] masked balls and myste[[rious]] atmosphere during this per[[iod]]. These celebra[[tions]] have deep histor[[ical]] roots but cont[[inue]] to evolve wi[[th]] contemporary influe[[nces]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-trad-003',
        setId: 'set-traditions',
        rawText: 'The Chinese New Ye[[ar]] is the mo[[st]] important festival in Chin[[ese]] culture, marking the begi[[nning]] of the lunar calen[[dar]]. Families gat[[her]] for special meals a[[nd]] exchange red envel[[opes]] containing money as gi[[fts]]. Fireworks and dra[[gon]] dances celebrate the occa[[sion]] with great enthus[[iasm]]. The festivities typi[[cally]] last for fift[[een]] days, culminating in the Lan[[tern]] Festival celebrations.',
        difficulty: 'easy',
    },
    {
        id: 'ex-trad-004',
        setId: 'set-traditions',
        rawText: 'Thanksgiving is a tradit[[ional]] American holiday celeb[[rated]] on the fourth Thurs[[day]] in November each ye[[ar]]. Families gather to sha[[re]] a feast typically feat[[uring]] turkey, stuffing and pump[[kin]] pie as tradit[[ional]] dishes. The holi[[day]] commemorates early sett[[lers]] harvest celebra[[tions]] with Native Amer[[icans]]. While some view it as a ti[[me]] for gratitude, others quest[[ion]] the historical narra[[tive]] surrounding its origins.',
        difficulty: 'medium',
    },
    {
        id: 'ex-trad-005',
        setId: 'set-traditions',
        rawText: 'Diwali, the fest[[ival]] of lights, is celeb[[rated]] by millions of Hin[[dus]], Sikhs and Ja[[ins]] worldwide each aut[[umn]]. Homes are decor[[ated]] with oil la[[mps]] and colourful can[[dles]] to welcome prospe[[rity]]. The festival symbo[[lises]] the victory of li[[ght]] over darkness and go[[od]] over evil. Fami[[lies]] exchange gifts, share swe[[ets]] and gather for spec[[ial]] prayers and festive me[[als]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-trad-006',
        setId: 'set-traditions',
        rawText: 'Oktoberfest in Mun[[ich]] attracts millions of visi[[tors]] annually from around the wor[[ld]]. This traditional Bava[[rian]] festival features be[[er]], traditional food and fo[[lk]] music in large te[[nts]]. Guests often we[[ar]] traditional Lederhosen and Dir[[ndl]] costumes to cele[[brate]] in authentic sty[[le]]. The event genera[[tes]] significant revenue for loc[[al]] businesses and has insp[[ired]] similar festivals in cit[[ies]] worldwide.',
        difficulty: 'medium',
    },
    {
        id: 'ex-trad-007',
        setId: 'set-traditions',
        rawText: 'Japanese tea ceremo[[nies]] reflect deep cult[[ural]] values of harmony, resp[[ect]] and tranquillity. Ev[[ery]] movement is care[[fully]] choreographed and filled wi[[th]] meaning for partic[[ipants]]. Participants prac[[tise]] mindfulness and apprec[[iate]] the beauty of sim[[ple]] moments during the rit[[ual]]. Mastering the art req[[uires]] years of ded[[icated]] study and pract[[ice]] under experienced tea mast[[ers]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-trad-008',
        setId: 'set-traditions',
        rawText: 'Wedding traditions va[[ry]] significantly across cult[[ures]] and religions world[[wide]]. In some count[[ries]], ceremonies last sev[[eral]] days with elab[[orate]] rituals and celebra[[tions]]. Others emphasise simpli[[city]] and intimate gather[[ings]] with close fam[[ily]]. These customs ref[[lect]] societal values and beli[[efs]] about marriage. Modern cou[[ples]] often blend tradit[[ional]] elements with contem[[porary]] preferences to cre[[ate]] personalised ceremonies.',
        difficulty: 'easy',
    },

    // ============ SET 6: Lifestyle & Leisure (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-life-001',
        setId: 'set-lifestyle',
        rawText: 'Flea markets are wonderful places to go if you like to wander around antique stands. You ne[[ver]] know qu[[ite]] what y[[ou]] are go[[ing]] to fi[[nd]]. There a[[re]] very of[[ten]] well ov[[er]] one-hundred var[[ious]] dealers a[[nd]] shops sel[[ling]] all ki[[nds]] of thi[[ngs]]. The atmos[[phere]] is a l[[ot]] different t[[o]] strolling thr[[ough]] a shop[[ping]] centre bec[[ause]] most sm[[all]] traders would never be able to afford premises there.',
        difficulty: 'easy',
    },
    {
        id: 'ex-life-002',
        setId: 'set-lifestyle',
        rawText: 'Urban gardening has bec[[ome]] increasingly popular in ma[[jor]] cities around the wor[[ld]]. Residents transform roof[[tops]] and balconies in[[to]] productive gardens for fre[[sh]] produce. Growing one\'s own vege[[tables]] provides both fre[[sh]] food and personal satisfa[[ction]]. Community gardens also cre[[ate]] opportunities for neighb[[ours]] to connect and sha[[re]] knowledge about sustain[[able]] growing practices in ur[[ban]] environments.',
        difficulty: 'medium',
    },
    {
        id: 'ex-life-003',
        setId: 'set-lifestyle',
        rawText: 'The slow food move[[ment]] encourages people to redis[[cover]] traditional cooking meth[[ods]] and local ingred[[ients]]. Supporters believe that fa[[st]] food culture threa[[tens]] culinary heritage and nutri[[tional]] health. Taking ti[[me]] to prepare meals streng[[thens]] family bonds and conn[[ects]] people to their cul[[tural]] roots. This philos[[ophy]] extends beyond food to embr[[ace]] a slower approach to li[[fe]] generally.',
        difficulty: 'medium',
    },
    {
        id: 'ex-life-004',
        setId: 'set-lifestyle',
        rawText: 'Minimalism has gai[[ned]] many followers in rec[[ent]] years as people seek sim[[pler]] lives. Advocates arg[[ue]] that owning fe[[wer]] possessions leads to gre[[ater]] happiness and reduce[[d]] stress levels. Declut[[tering]] one\'s home can red[[uce]] anxiety signif[[icantly]] for many indivi[[duals]]. The movement also aligns wi[[th]] environmental concerns ab[[out]] overconsumption and wa[[ste]] in modern soci[[eties]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-life-005',
        setId: 'set-lifestyle',
        rawText: 'Book clubs provide oppor[[tunities]] for social inter[[action]] around shared liter[[ary]] interests. Mem[[bers]] meet regularly to disc[[uss]] literature and share pers[[pectives]] on various the[[mes]]. These gatherings of[[ten]] lead to lasting friend[[ships]] and intellectual gro[[wth]] among participants. The form[[at]] has adapted to mod[[ern]] life with vir[[tual]] meetings becoming increas[[ingly]] common since the pand[[emic]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-life-006',
        setId: 'set-lifestyle',
        rawText: 'Podcasts have revolut[[ionised]] how people con[[sume]] content during comm[[utes]] and daily activ[[ities]]. Listeners can expl[[ore]] topics ranging fr[[om]] true crime to hist[[ory]] to self-improvement thr[[ough]] audio. The form[[at]] allows audiences to le[[arn]] while commuting or exerc[[ising]] at the gym. Any[[one]] with basic equip[[ment]] can start their own podc[[ast]], democratising media produ[[ction]] significantly.',
        difficulty: 'medium',
    },
    {
        id: 'ex-life-007',
        setId: 'set-lifestyle',
        rawText: 'Volunteer tourism comb[[ines]] travel with meaning[[ful]] work in commu[[nities]] abroad. Participants he[[lp]] with projects wh[[ile]] experiencing new cult[[ures]] firsthand. Critics arg[[ue]] that some progr[[ammes]] do more harm th[[an]] good when poorly organ[[ised]]. Effective volunt[[ourism]] requires careful plann[[ing]] and genuine partner[[ships]] with local organis[[ations]]. Short-term visits can some[[times]] disrupt rather than supp[[ort]] community development effo[[rts]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-life-008',
        setId: 'set-lifestyle',
        rawText: 'Digital detox retrea[[ts]] offer escape from techno[[logy]] in peaceful natural sett[[ings]]. Participants surr[[ender]] their devices and reco[[nnect]] with nature and medit[[ation]] practices. Many rep[[ort]] improved sleep and redu[[ced]] anxiety levels af[[ter]] attending such progr[[ammes]]. The growing popula[[rity]] of these retreats refl[[ects]] widespread concern ab[[out]] technology addiction and its imp[[act]] on mental wellb[[eing]].',
        difficulty: 'medium',
    },

    // ============ SET 7: Sports & Competition (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-sport-001',
        setId: 'set-sports',
        rawText: 'On 6 April 1896, one of the world\'s most famous sporting events was reborn in Greece: The Olympic Games. This anc[[ient]] Greek trad[[ition]] had n[[ot]] taken pl[[ace]] for aro[[und]] 1500 ye[[ars]]. The earl[[iest]] Games on[[ly]] included run[[ning]] races, b[[ut]] as ti[[me]] went b[[y]] other categ[[ories]] such a[[s]] wrestling, box[[ing]], javelin thro[[wing]] and ho[[rse]] racing we[[re]] introduced. O[[n]] the ret[[urn]] of the Games, 43 different events were included.',
        difficulty: 'medium',
    },
    {
        id: 'ex-sport-002',
        setId: 'set-sports',
        rawText: 'Professional athletes fa[[ce]] enormous pressure to perf[[orm]] at the highest lev[[el]] consistently. The dema[[nds]] of competition can aff[[ect]] mental health in ser[[ious]] ways. Many spo[[rts]] organisations now prov[[ide]] psychological support for th[[eir]] players and athl[[etes]]. Recognition of men[[tal]] health challenges has gro[[wn]] following high-profile athl[[etes]] speaking openly ab[[out]] their experiences and strug[[gles]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-sport-003',
        setId: 'set-sports',
        rawText: 'E-sports have emer[[ged]] as a major glo[[bal]] industry worth bill[[ions]] of dollars annu[[ally]]. Professional gam[[ers]] compete for mill[[ions]] in prize money at inter[[national]] tournaments. These eve[[nts]] attract audiences compa[[rable]] to traditional sporting eve[[nts]] both online and in-per[[son]]. The industry cont[[inues]] to grow as ga[[ming]] gains mainstream accept[[ance]] and credibility world[[wide]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-sport-004',
        setId: 'set-sports',
        rawText: 'Doping scandals ha[[ve]] tarnished many spo[[rting]] achievements throughout hist[[ory]]. Athletes sometimes ri[[sk]] their health for compe[[titive]] advantage in major compe[[titions]]. Anti-doping agen[[cies]] work to maintain fa[[ir]] competition through rig[[orous]] testing protocols. How[[ever]], detection meth[[ods]] struggle to keep pa[[ce]] with new performan[[ce]]-enhancing substances and techni[[ques]] that athletes may empl[[oy]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sport-005',
        setId: 'set-sports',
        rawText: 'Women\'s sports have gai[[ned]] significant visibility in rec[[ent]] years after deca[[des]] of underrepresentation. Broad[[casting]] deals and sponsor[[ships]] have increased substan[[tially]] for female athle[[tes]]. However, pay dispar[[ities]] between male and fem[[ale]] athletes persist in mo[[st]] sports globally. Activ[[ists]] continue to advo[[cate]] for equal treatm[[ent]] and investment in women\'s compet[[itions]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sport-006',
        setId: 'set-sports',
        rawText: 'Marathon running req[[uires]] months of dedi[[cated]] training and careful prepa[[ration]]. Participants mu[[st]] build endurance gradu[[ally]] to avoid inju[[ry]] and exhaustion. Cross[[ing]] the finish line bri[[ngs]] immense personal satisfa[[ction]] to runners of all abil[[ities]]. Major city mara[[thons]] like London and New Yo[[rk]] attract thousands of parti[[cipants]] and spectators annu[[ally]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-sport-007',
        setId: 'set-sports',
        rawText: 'Extreme sports attr[[act]] thrill-seekers world[[wide]] who crave adrena[[line]] and adventure. Activ[[ities]] like skydiving and ro[[ck]] climbing offer int[[ense]] experiences unlike tradit[[ional]] sports. Participants acc[[ept]] significant risks f[[or]] these thrilling exper[[iences]]. Safety equipment and trai[[ning]] have improved consid[[erably]], but dangerous accid[[ents]] still occur when proper precau[[tions]] are not follo[[wed]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-sport-008',
        setId: 'set-sports',
        rawText: 'Youth sports progra[[mmes]] teach valuable li[[fe]] skills beyond athle[[tic]] abilities. Children lea[[rn]] teamwork, discipline and resil[[ience]] through organised spo[[rts]] activities. However, exce[[ssive]] pressure from par[[ents]] and coaches can dimi[[nish]] enjoyment and cause burn[[out]]. Finding the ri[[ght]] balance between compet[[ition]] and fun rem[[ains]] a challenge for yo[[uth]] sports administrators.',
        difficulty: 'medium',
    },

    // ============ SET 8: Science & Innovation (8 exercises, 20 gaps each = 160 pts) ============
    {
        id: 'ex-sci-001',
        setId: 'set-science',
        rawText: 'Artificial intellig[[ence]] is transforming ev[[ery]] aspect of mod[[ern]] life at an unprece[[dented]] pace. From sm[[art]] assistants to self-dri[[ving]] cars, AI syst[[ems]] are becoming increas[[ingly]] sophisticated each ye[[ar]]. Some experts pred[[ict]] that AI will so[[on]] surpass human intellig[[ence]] in many doma[[ins]]. This prospect rai[[ses]] profound ethical quest[[ions]] about the fut[[ure]] of work and soci[[ety]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sci-002',
        setId: 'set-science',
        rawText: 'Gene editing techno[[logy]] offers unprecedented possib[[ilities]] for treating gene[[tic]] diseases. Scient[[ists]] can now mod[[ify]] DNA with remarkab[[le]] precision using to[[ols]] like CRISPR. Eth[[ical]] debates surround its appli[[cation]] to human emb[[ryos]] and enhancement. Regula[[tors]] struggle to keep pa[[ce]] with rapidly advan[[cing]] capabilities in th[[is]] field. The potential bene[[fits]] must be balanced aga[[inst]] serious safety conc[[erns]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sci-003',
        setId: 'set-science',
        rawText: 'Space exploration ent[[ers]] a new era wi[[th]] private companies joi[[ning]] national space agen[[cies]]. Firms like Spa[[ceX]] aim to colon[[ise]] Mars within dec[[ades]], a goal once confi[[ned]] to science fict[[ion]]. Such ambitions requ[[ire]] enormous invest[[ment]] and technological innov[[ation]]. The commercialis[[ation]] of space prom[[ises]] both opportunities and new chall[[enges]] for international govern[[ance]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-sci-004',
        setId: 'set-science',
        rawText: 'Quantum computing prom[[ises]] revolutionary advances in compu[[tational]] power. These mach[[ines]] can solve prob[[lems]] impossible for class[[ical]] computers to addre[[ss]]. Applications ra[[nge]] from drug disco[[very]] to cryptography and clim[[ate]] modelling. Major techno[[logy]] companies are inve[[sting]] heavily in quant[[um]] research. However, pract[[ical]] quantum computers rema[[in]] years away from wides[[pread]] commercial availab[[ility]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sci-005',
        setId: 'set-science',
        rawText: 'Vaccine development has accele[[rated]] dramatically in rec[[ent]] years. New technol[[ogies]] enable rapid respo[[nses]] to emerging disea[[ses]] that threaten glo[[bal]] health. This capab[[ility]] proved crucial dur[[ing]] recent global he[[alth]] crises affecting mill[[ions]]. However, vaccine hesit[[ancy]] remains a challe[[nge]] in many commu[[nities]] where misinformation spr[[eads]]. Public health camp[[aigns]] must address these conc[[erns]] effectively.',
        difficulty: 'medium',
    },
    {
        id: 'ex-sci-006',
        setId: 'set-science',
        rawText: 'Renewable energy technol[[ogies]] continue to impr[[ove]] in efficiency and affor[[dability]]. Solar panel effic[[iency]] has increased signif[[icantly]] over the past dec[[ade]]. Battery storage solut[[ions]] address intermit[[tency]] challenges posed by so[[lar]] and wind power. These adva[[nces]] make clean energy increas[[ingly]] competitive with fos[[sil]] fuel alternatives. Grid modern[[isation]] remains essential for full decar[[bonisation]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-sci-007',
        setId: 'set-science',
        rawText: 'Neuroscience reveals h[[ow]] the brain proc[[esses]] emotions and makes deci[[sions]]. Advanced imag[[ing]] techniques allow scient[[ists]] to observe neural activ[[ity]] in real time dur[[ing]] various tasks. These insi[[ghts]] inform mental he[[alth]] treatments and therap[[ies]]. Understanding brain funct[[ion]] could lead to break[[throughs]] in treating cond[[itions]] like depression and anxi[[ety]] that affect milli[[ons]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-sci-008',
        setId: 'set-science',
        rawText: '3D printing revolut[[ionises]] manufacturing proce[[sses]] across multiple indust[[ries]]. Complex objects can be crea[[ted]] layer by layer wi[[th]] remarkable preci[[sion]] and customisation. Med[[ical]] applications include cus[[tom]] prosthetics and or[[gan]] scaffolds for transplant[[ation]]. The technology cont[[inues]] to advance rapi[[dly]] as materials and meth[[ods]] improve. Future applic[[ations]] may transform construct[[ion]] and aerospace industri[[es]].',
        difficulty: 'medium',
    },
];
