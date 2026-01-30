import { ExerciseSet, Exercise } from '@/types';

export const sampleSets: ExerciseSet[] = [
    {
        id: 'set-learning',
        title: 'Learning & Education',
        description: 'Academic texts about education, memory, and cognitive development. 160 points.',
        tags: ['english', 'education', 'B2', 'C1'],
        createdAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
    },
    {
        id: 'set-technology',
        title: 'Technology & Society',
        description: 'C1-level texts about digital transformation and its societal impact. 160 points.',
        tags: ['english', 'technology', 'C1'],
        createdAt: '2024-01-16T10:00:00Z',
        updatedAt: '2024-01-16T10:00:00Z',
    },
    {
        id: 'set-research',
        title: 'Research & Science',
        description: 'Academic texts featuring research methodology and scientific discourse. 160 points.',
        tags: ['english', 'research', 'science', 'C1'],
        createdAt: '2024-01-17T10:00:00Z',
        updatedAt: '2024-01-17T10:00:00Z',
    },
    {
        id: 'set-environment',
        title: 'Environment & Climate',
        description: 'Texts about environmental challenges and sustainable development. 160 points.',
        tags: ['english', 'environment', 'C1'],
        createdAt: '2024-01-18T10:00:00Z',
        updatedAt: '2024-01-18T10:00:00Z',
    },
    {
        id: 'set-health',
        title: 'Health & Medicine',
        description: 'Medical and health-related academic texts. 160 points.',
        tags: ['english', 'health', 'medicine', 'C1'],
        createdAt: '2024-01-19T10:00:00Z',
        updatedAt: '2024-01-19T10:00:00Z',
    },
    {
        id: 'set-society',
        title: 'Society & Culture',
        description: 'Texts about social phenomena, cultural developments and globalisation. 160 points.',
        tags: ['english', 'society', 'culture', 'B2', 'C1'],
        createdAt: '2024-01-20T10:00:00Z',
        updatedAt: '2024-01-20T10:00:00Z',
    },
    {
        id: 'set-economy',
        title: 'Economy & Business',
        description: 'Business and economic concepts in academic English. 160 points.',
        tags: ['english', 'economy', 'business', 'C1'],
        createdAt: '2024-01-21T10:00:00Z',
        updatedAt: '2024-01-21T10:00:00Z',
    },
    {
        id: 'set-psychology',
        title: 'Psychology & Behaviour',
        description: 'Psychological concepts and human behaviour in academic style. 160 points.',
        tags: ['english', 'psychology', 'C1'],
        createdAt: '2024-01-22T10:00:00Z',
        updatedAt: '2024-01-22T10:00:00Z',
    },
];

// 8 sets × 8 exercises × 20 gaps = 1280 total gaps (160 per set)
// C-Test format: word beginning shown, learner fills in ending
export const sampleExercises: Exercise[] = [
    // ============ SET 1: Learning & Education (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-learn-001',
        setId: 'set-learning',
        rawText: 'Learning comes naturally to babies: they learn about their environment using their senses. Prob[[ably]] the experi[[ence]] at school ma[[kes]] a lot of peo[[ple]] think th[[at]] learning alw[[ays]] means sit[[ting]] at a de[[sk]] listening to som[[eone]], taking no[[tes]] and then revi[[sing]] for exams. In fa[[ct]], this is on[[ly]] one of ma[[ny]] possible ways in wh[[ich]] learning takes pl[[ace]] and it is defini[[tely]] not suitable for a[[ll]] topics or subj[[ects]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-learn-002',
        setId: 'set-learning',
        rawText: 'Many people assu[[me]] that learning on[[ly]] takes place in a class[[room]], but this is far fr[[om]] the truth. In rea[[lity]], learning occ[[urs]] whenever we intera[[ct]] with our surround[[ing]] environment. Fr[[om]] an early age, hum[[ans]] begin to fo[[rm]] patterns, recognise conn[[ections]] and adapt th[[eir]] behaviour accord[[ing]] to personal exper[[iences]]. Recent stud[[ies]] suggest that emot[[ional]] involvement plays a cru[[cial]] role in mem[[ory]] retention.',
        difficulty: 'medium',
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
        rawText: 'Neuroscientists have discov[[ered]] that the br[[ain]] remains plastic throu[[ghout]] life, meaning that adu[[lts]] can form new neu[[ral]] connections just as chil[[dren]] do. However, the proc[[ess]] may require more delib[[erate]] practice and repet[[ition]] to achieve sim[[ilar]] results. This find[[ing]] has profound implic[[ations]] for education, sugge[[sting]] that it is ne[[ver]] too late to le[[arn]] new skills or acq[[uire]] new knowledge.',
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
        rawText: 'Sleep plays a cru[[cial]] role in consoli[[dating]] memories and proce[[ssing]] information lear[[ned]] during the wa[[king]] hours. During de[[ep]] sleep, the br[[ain]] organises and str[[engthens]] neural pathways essen[[tial]] for learning. Stud[[ents]] who sacrifice sl[[eep]] for last-minute stud[[ying]] often perform wo[[rse]] than those who r[[est]] adequately bef[[ore]] examinations. This rese[[arch]] highlights the impor[[tance]] of balanced stu[[dy]] habits.',
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
        rawText: 'Educational technology has trans[[formed]] how students access infor[[mation]] and interact wi[[th]] course material. Onl[[ine]] platforms enable lear[[ning]] anytime and anyw[[here]], removing tradit[[ional]] barriers to educ[[ation]]. However, cri[[tics]] argue that dig[[ital]] tools cannot rep[[lace]] the value of face-to-f[[ace]] interaction wi[[th]] teachers and pe[[ers]]. The ideal appr[[oach]] likely combines bo[[th]] methods to maxi[[mise]] learning outcomes.',
        difficulty: 'medium',
    },

    // ============ SET 2: Technology & Society (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-tech-001',
        setId: 'set-technology',
        rawText: 'Over the pa[[st]] few decades, digital techno[[logy]] has fundamentally transf[[ormed]] the way people commu[[nicate]] and work. Dev[[ices]] that were once consi[[dered]] luxuries are now rega[[rded]] as absolute necess[[ities]]. As a res[[ult]], individuals are expe[[cted]] to remain conn[[ected]] at all ti[[mes]]. This constant availab[[ility]], however, has rai[[sed]] serious conc[[erns]] about mental he[[alth]] and work-life bala[[nce]] in modern soc[[iety]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-tech-002',
        setId: 'set-technology',
        rawText: 'Many experts wa[[rn]] that excessive scr[[een]] use may negat[[ively]] affect attention sp[[an]] and reduce the abil[[ity]] to engage in de[[ep]], meaningful inter[[action]]. Social media platf[[orms]] have revolutio[[nised]] how people share infor[[mation]], but misinfor[[mation]] spreads faster than ever bef[[ore]]. Users must dev[[elop]] critical thinking ski[[lls]] to navigate th[[is]] complex digital lands[[cape]] safely and effect[[ively]] in their daily li[[ves]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-tech-003',
        setId: 'set-technology',
        rawText: 'Artificial intelli[[gence]] is reshaping industries ac[[ross]] the globe at an unprece[[dented]] pace. From healthc[[are]] to finance, AI sys[[tems]] are performing tasks th[[at]] once required human exper[[tise]] and judgement. This sh[[ift]] raises important quest[[ions]] about the fut[[ure]] of employment. Wh[[ile]] some jobs will disap[[pear]], new roles are emer[[ging]] that require differ[[ent]] skills and adapt[[ability]].',
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
        rawText: 'Cybersecurity threa[[ts]] have become increas[[ingly]] sophisticated in rec[[ent]] years. Hackers tar[[get]] both individuals and organ[[isations]], stealing sens[[itive]] data for finan[[cial]] gain or polit[[ical]] purposes. Prote[[cting]] digital assets req[[uires]] constant vigilance and upda[[ted]] defences. Compan[[ies]] now invest heav[[ily]] in security infrastru[[cture]] and employee trai[[ning]] to prevent cost[[ly]] data breaches.',
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
        rawText: 'Electric vehicles repr[[esent]] a significant sh[[ift]] in personal transpor[[tation]]. Automakers are inves[[ting]] billions in bat[[tery]] technology to exte[[nd]] driving range and red[[uce]] charging times. Govern[[ments]] worldwide offer incen[[tives]] to accelerate adopt[[ion]] and reduce car[[bon]] emissions from tra[[nsport]]. The transition to elec[[tric]] mobility will also req[[uire]] substantial invest[[ment]] in charging infrastr[[ucture]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-tech-008',
        setId: 'set-technology',
        rawText: 'Privacy concerns surro[[und]] digital communication in the mod[[ern]] age. Companies coll[[ect]] vast amounts of pers[[onal]] data from users, of[[ten]] without clear con[[sent]] or transparency. Regul[[ations]] like the Gene[[ral]] Data Protection Regul[[ation]] aim to protect citi[[zen]] rights in Euro[[pe]]. Similar laws are be[[ing]] introduced worldw[[ide]] as governments recog[[nise]] the need to bal[[ance]] innovation with indivi[[dual]] privacy rights.',
        difficulty: 'hard',
    },

    // ============ SET 3: Research & Science (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-research-001',
        setId: 'set-research',
        rawText: 'Scientific research has undergone signifi[[cant]] changes in recent dec[[ades]], with collaboration bet[[ween]] institutions becoming increas[[ingly]] common. Resear[[chers]] now share data a[[nd]] findings more ope[[nly]] than ever bef[[ore]]. This transparency has accele[[rated]] the pace of disco[[very]] in many fie[[lds]]. However, compet[[ition]] for funding rem[[ains]] intense, and scie[[ntists]] must constantly demon[[strate]] the value of th[[eir]] work to sec[[ure]] continued support.',
        difficulty: 'hard',
    },
    {
        id: 'ex-research-002',
        setId: 'set-research',
        rawText: 'The peer review proc[[ess]] is considered fundame[[ntal]] to the quality of acade[[mic]] publishing. Exp[[erts]] evaluate the method[[ology]] and conclusions of submi[[tted]] papers to ens[[ure]] rigour and accur[[acy]]. However, the sys[[tem]] has been criti[[cised]] for potential bi[[as]] and slow turnar[[ound]] times. A num[[ber]] of alternative appro[[aches]] to quality assur[[ance]] are currently be[[ing]] explored by publi[[shers]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-research-003',
        setId: 'set-research',
        rawText: 'Research ethics have gai[[ned]] increasing attention si[[nce]] the establishment of for[[mal]] review procedures. The prote[[ction]] of human subj[[ects]] is now consi[[dered]] a prerequisite for condu[[cting]] studies. Infor[[med]] consent must be obta[[ined]] from all partici[[pants]] prior to data colle[[ction]]. The fail[[ure]] to adhere to eth[[ical]] guidelines can res[[ult]] in serious conseq[[uences]] for researchers.',
        difficulty: 'medium',
    },
    {
        id: 'ex-research-004',
        setId: 'set-research',
        rawText: 'Quantitative methods dif[[fer]] significantly from quali[[tative]] approaches in te[[rms]] of data collec[[tion]] and analysis. The cho[[ice]] of methodology dep[[ends]] on the research ques[[tion]] and the nat[[ure]] of the phenom[[enon]] under investigation. Mi[[xed]] methods research has emer[[ged]] as a popu[[lar]] alternative that comb[[ines]] the strengths of bo[[th]] paradigms effect[[ively]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-research-005',
        setId: 'set-research',
        rawText: 'The reproducibility cri[[sis]] has raised ser[[ious]] questions about the relia[[bility]] of published rese[[arch]]. A significant propo[[rtion]] of studies can[[not]] be replicated by indepe[[ndent]] researchers. The cau[[ses]] of this prob[[lem]] include inadequate sam[[ple]] sizes and sele[[ctive]] reporting of res[[ults]]. Therefore, jour[[nals]] have begun to req[[uire]] pre-registration of stud[[ies]] to address these conc[[erns]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-research-006',
        setId: 'set-research',
        rawText: 'Funding for scien[[tific]] research is essen[[tial]] for the advanc[[ement]] of knowledge in all discip[[lines]]. The compet[[ition]] for grants has intens[[ified]] as the num[[ber]] of researchers has gro[[wn]]. A considerable amo[[unt]] of time is now devo[[ted]] to writing prop[[osals]] rather than condu[[cting]] experiments. The imp[[act]] of this trend on scient[[ific]] productivity is a mat[[ter]] of ongoing deb[[ate]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-research-007',
        setId: 'set-research',
        rawText: 'Scientific collaboration bet[[ween]] institutions has incre[[ased]] substantially in rec[[ent]] decades. The devel[[opment]] of digital commun[[ication]] tools has facili[[tated]] international partne[[rships]]. Research condu[[cted]] by diverse te[[ams]] is often rega[[rded]] as more innov[[ative]] and robust. How[[ever]], the coordin[[ation]] of large proj[[ects]] across different ti[[me]] zones presents a logis[[tical]] challenge for partic[[ipants]].',
        difficulty: 'easy',
    },
    {
        id: 'ex-research-008',
        setId: 'set-research',
        rawText: 'The communication of rese[[arch]] findings to the gen[[eral]] public is increas[[ingly]] recognised as a respon[[sibility]] of scientists. The trans[[lation]] of complex conc[[epts]] into accessible lang[[uage]] requires considerable sk[[ill]]. Misinterpretation by me[[dia]] outlets can le[[ad]] to public misunder[[standing]] of scientific evid[[ence]]. Therefore, trai[[ning]] in science communi[[cation]] is now off[[ered]] at many univer[[sities]].',
        difficulty: 'medium',
    },

    // ============ SET 4: Environment & Climate (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-env-001',
        setId: 'set-environment',
        rawText: 'Climate change poses one of the most signifi[[cant]] challenges facing huma[[nity]] today. Its eff[[ects]] are not lim[[ited]] to rising temper[[atures]] but also incl[[ude]] shifts in wea[[ther]] patterns, loss of biodi[[versity]] and increasing pres[[sure]] on food produ[[ction]] systems. Although scien[[tific]] evidence is overwhe[[lming]], political action of[[ten]] remains slow due to econo[[mic]] considerations and compet[[ing]] national interests.',
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
        rawText: 'Renewable energy sour[[ces]] are becoming increas[[ingly]] competitive with fos[[sil]] fuels in many mar[[kets]]. Solar and wi[[nd]] power capacity has gro[[wn]] exponentially in rec[[ent]] years. This trans[[ition]] offers hope for redu[[cing]] carbon emissions signif[[icantly]]. However, chall[[enges]] remain around energy stor[[age]] and grid integr[[ation]] that must be sol[[ved]] to enable comp[[lete]] decarbonisation effect[[ively]].',
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
        rawText: 'Ocean acidification repre[[sents]] a less visible but equ[[ally]] serious threat to mar[[ine]] ecosystems worldwide. Ris[[ing]] carbon levels cha[[nge]] seawater chemistry, affe[[cting]] marine life at eve[[ry]] level. Coral re[[efs]] are particularly vulne[[rable]] to these chan[[ges]], with mass blea[[ching]] events becoming more freq[[uent]]. Scientists warn th[[at]] protecting ocean hea[[lth]] requires urgent red[[uction]] in global emissions.',
        difficulty: 'hard',
    },
    {
        id: 'ex-env-006',
        setId: 'set-environment',
        rawText: 'Sustainable agriculture prac[[tices]] can help red[[uce]] environmental impact wh[[ile]] maintaining food produ[[ction]]. Organic farming avo[[ids]] synthetic pesti[[cides]] and fertilisers th[[at]] can harm soil hea[[lth]]. Crop rotation and div[[erse]] planting improve so[[il]] quality naturally over ti[[me]]. These methods also supp[[ort]] biodiversity by crea[[ting]] habitats for benef[[icial]] insects and wildlife.',
        difficulty: 'easy',
    },
    {
        id: 'ex-env-007',
        setId: 'set-environment',
        rawText: 'Plastic pollution has rea[[ched]] every corner of the pla[[net]], from mountaintops to the deep[[est]] ocean trenches. Micropla[[stics]] have been fo[[und]] in drinking water, so[[il]] and even human blo[[od]]. Reducing single-use plas[[tics]] has become a glo[[bal]] priority for environ[[mental]] organisations. However, plas[[tic]] production continues to incr[[ease]] as demand for che[[ap]] packaging grows.',
        difficulty: 'medium',
    },
    {
        id: 'ex-env-008',
        setId: 'set-environment',
        rawText: 'Urban green spaces prov[[ide]] essential ecosystem serv[[ices]] to city residents. Pa[[rks]] and gardens help co[[ol]] cities during he[[at]] waves through natural sha[[ding]] and evaporation. They al[[so]] support biodiversity and impr[[ove]] residents\' mental hea[[lth]]. City planners are increa[[singly]] incorporating green infra[[structure]] into urban desi[[gns]] to address these impo[[rtant]] environmental concerns.',
        difficulty: 'easy',
    },

    // ============ SET 5: Health & Medicine (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-health-001',
        setId: 'set-health',
        rawText: 'Mental health has gai[[ned]] increasing recognition as a cru[[cial]] component of ove[[rall]] wellbeing in rec[[ent]] years. The sti[[gma]] associated with psychol[[ogical]] conditions has dimin[[ished]] to some ext[[ent]] in many socie[[ties]]. Research indicates th[[at]] early intervention can ha[[ve]] a significant posi[[tive]] impact on treat[[ment]] outcomes. However, acc[[ess]] to mental heal[[th]] services remains lim[[ited]] in many communities.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-002',
        setId: 'set-health',
        rawText: 'Preventive medicine foc[[uses]] on the identif[[ication]] of risk fac[[tors]] before the on[[set]] of disease. Reg[[ular]] screening programmes ha[[ve]] been shown to red[[uce]] mortality rates for cer[[tain]] conditions significantly. The devel[[opment]] of personalised prev[[ention]] strategies is rega[[rded]] as a prom[[ising]] approach by resea[[rchers]]. Nevertheless, implem[[entation]] of such meas[[ures]] depends on adeq[[uate]] healthcare infrastructure.',
        difficulty: 'hard',
    },
    {
        id: 'ex-health-003',
        setId: 'set-health',
        rawText: 'The impact of lifes[[tyle]] choices on hea[[lth]] outcomes is now w[[ell]] established in med[[ical]] literature. Di[[et]] and physical acti[[vity]] play a cen[[tral]] role in the prev[[ention]] of chronic disea[[ses]]. Research findings sugg[[est]] that even mode[[rate]] changes in behav[[iour]] can lead to signif[[icant]] improvements. Conseque[[ntly]], health education camp[[aigns]] have become a prio[[rity]] for public authorities.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-004',
        setId: 'set-health',
        rawText: 'Antibiotic resistance is rega[[rded]] as one of the mo[[st]] serious threats to glo[[bal]] health today. The over[[use]] of these medic[[ations]] has contributed to the devel[[opment]] of resistant bact[[eria]]. A considerable amo[[unt]] of research is devo[[ted]] to finding altern[[ative]] treatments. How[[ever]], the pace of n[[ew]] drug development has n[[ot]] kept up with emer[[ging]] resistance patterns.',
        difficulty: 'hard',
    },
    {
        id: 'ex-health-005',
        setId: 'set-health',
        rawText: 'Vaccination programmes ha[[ve]] had a profound imp[[act]] on the prevention of infe[[ctious]] diseases worldwide. The devel[[opment]] of new vacc[[ines]] is a comp[[lex]] process that req[[uires]] extensive testing. Rec[[ent]] advances in techn[[ology]] have accelerated the pa[[ce]] of vaccine resea[[rch]]. Nevertheless, vaccine hesi[[tancy]] remains a chall[[enge]] for public hea[[lth]] officials in ma[[ny]] countries.',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-006',
        setId: 'set-health',
        rawText: 'Telemedicine has emer[[ged]] as a valuable to[[ol]] for improving acc[[ess]] to healthcare serv[[ices]]. The use of dig[[ital]] platforms allows pati[[ents]] to consult with doc[[tors]] remotely from th[[eir]] homes. Research sugg[[ests]] that virtual consul[[tations]] can be equ[[ally]] effective for cer[[tain]] conditions. How[[ever]], the lack of phys[[ical]] examination presents limi[[tations]] in some diagn[[ostic]] scenarios.',
        difficulty: 'easy',
    },
    {
        id: 'ex-health-007',
        setId: 'set-health',
        rawText: 'The relationship bet[[ween]] sleep and hea[[lth]] is now recogn[[ised]] as fundamental by med[[ical]] professionals world[[wide]]. Chronic sleep depri[[vation]] has been lin[[ked]] to a ra[[nge]] of physical and men[[tal]] health problems. Stud[[ies]] have demonstrated th[[at]] adequate rest is essen[[tial]] for immune func[[tion]] and cognitive perfor[[mance]]. Therefore, sle[[ep]] hygiene education is incre[[asingly]] incorporated into progr[[ammes]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-health-008',
        setId: 'set-health',
        rawText: 'Healthcare systems around the wor[[ld]] face significant challen[[ges]] in meeting the ne[[eds]] of ageing popula[[tions]]. The increase in chro[[nic]] conditions requires a sh[[ift]] from acute ca[[re]] to long-term manage[[ment]]. Investment in geria[[tric]] services is consi[[dered]] essential for addre[[ssing]] these demographic chan[[ges]]. However, fund[[ing]] constraints limit the abil[[ity]] of many count[[ries]] to respond adequ[[ately]].',
        difficulty: 'hard',
    },

    // ============ SET 6: Society & Culture (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-society-001',
        setId: 'set-society',
        rawText: 'Globalisation has had a signifi[[cant]] impact on cult[[ural]] identity and tradit[[ional]] practices worldwide. The exch[[ange]] of ideas and prod[[ucts]] across borders is of[[ten]] regarded as benefi[[cial]] for economic devel[[opment]]. However, conc[[erns]] have been rai[[sed]] about the homogen[[isation]] of cultures and the lo[[ss]] of local tradit[[ions]]. The extent to wh[[ich]] communities can pres[[erve]] their heritage rema[[ins]] uncertain in this cont[[ext]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-society-002',
        setId: 'set-society',
        rawText: 'Social inequality rem[[ains]] a persistent prob[[lem]] in both devel[[oped]] and developing count[[ries]]. The gap bet[[ween]] wealthy and disadvan[[taged]] groups has wid[[ened]] in many socie[[ties]]. Research indicates th[[at]] unequal access to educ[[ation]] and healthcare is respon[[sible]] for perpetuating pov[[erty]]. Therefore, pol[[icy]] interventions aimed at redistri[[bution]] are considered nece[[ssary]] by many econo[[mists]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-society-003',
        setId: 'set-society',
        rawText: 'The role of me[[dia]] in shaping pub[[lic]] opinion is wid[[ely]] acknowledged by resear[[chers]]. The spread of misinfor[[mation]] on social platf[[orms]] has become a ca[[use]] for concern in rec[[ent]] years. Studies ha[[ve]] shown that fa[[lse]] information can ha[[ve]] a significant influ[[ence]] on political attit[[udes]]. Consequently, the devel[[opment]] of media liter[[acy]] programmes is priorit[[ised]] in educational curricula.',
        difficulty: 'medium',
    },
    {
        id: 'ex-society-004',
        setId: 'set-society',
        rawText: 'Migration patterns ha[[ve]] changed considerably in resp[[onse]] to economic and polit[[ical]] factors worldwide. The move[[ment]] of people across bord[[ers]] is often rega[[rded]] as both a chall[[enge]] and an opport[[unity]] for receiving count[[ries]]. Integration of newcom[[ers]] into the lab[[our]] market is essen[[tial]] for their contri[[bution]] to society. How[[ever]], the process req[[uires]] investment in lang[[uage]] training programmes.',
        difficulty: 'hard',
    },
    {
        id: 'ex-society-005',
        setId: 'set-society',
        rawText: 'Gender equality has ma[[de]] significant progress in ma[[ny]] societies over the pa[[st]] century. The partic[[ipation]] of women in the work[[force]] and politics has incre[[ased]] substantially since th[[en]]. Nevertheless, dispar[[ities]] in pay and represen[[tation]] at senior lev[[els]] persist in mo[[st]] countries globally. Rese[[arch]] suggests that cult[[ural]] attitudes play a k[[ey]] role in maintai[[ning]] these inequalities.',
        difficulty: 'medium',
    },
    {
        id: 'ex-society-006',
        setId: 'set-society',
        rawText: 'The ageing of socie[[ties]] in developed count[[ries]] presents a ra[[nge]] of challenges for soc[[ial]] systems. The ra[[tio]] of working-age indivi[[duals]] to retirees is decli[[ning]] in many nat[[ions]]. A significant incr[[ease]] in healthcare and pens[[ion]] costs is expe[[cted]] as a res[[ult]]. Policy respo[[nses]] to this demogr[[aphic]] shift vary consi[[derably]] between different count[[ries]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-society-007',
        setId: 'set-society',
        rawText: 'Urbanisation continues to trans[[form]] the way peo[[ple]] live and wo[[rk]] around the wor[[ld]]. The concentration of popula[[tions]] in cities has crea[[ted]] both opportunities and challen[[ges]]. Access to serv[[ices]] and employment is of[[ten]] better in urb[[an]] areas. How[[ever]], the quality of li[[fe]] can be affe[[cted]] by pollution, conge[[stion]] and housing shortages.',
        difficulty: 'easy',
    },
    {
        id: 'ex-society-008',
        setId: 'set-society',
        rawText: 'The decline of tradit[[ional]] community structures has be[[en]] observed in ma[[ny]] modern societies. The influ[[ence]] of family and relig[[ious]] institutions on indivi[[dual]] behaviour has dimin[[ished]] significantly. Research indi[[cates]] that this sh[[ift]] is associated wi[[th]] increased personal free[[dom]] but also gre[[ater]] isolation. The devel[[opment]] of new fo[[rms]] of social conne[[ction]] is therefore consi[[dered]] important for wellbeing.',
        difficulty: 'medium',
    },

    // ============ SET 7: Economy & Business (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-economy-001',
        setId: 'set-economy',
        rawText: 'Global supply cha[[ins]] have become increas[[ingly]] complex and intercon[[nected]] in recent deca[[des]]. The dependence on intern[[ational]] trade is now rega[[rded]] as both a stre[[ngth]] and a vulner[[ability]] for economies. Disrup[[tions]] to production in o[[ne]] region can ha[[ve]] a significant imp[[act]] on businesses world[[wide]]. Consequently, the diversi[[fication]] of suppliers is consi[[dered]] a priority by comp[[anies]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-economy-002',
        setId: 'set-economy',
        rawText: 'The relationship bet[[ween]] inflation and emplo[[yment]] is a cen[[tral]] concern for policy[[makers]]. Central ba[[nks]] are responsible for maint[[aining]] price stability thr[[ough]] the adjustment of inte[[rest]] rates. Research sugg[[ests]] that the effective[[ness]] of monetary pol[[icy]] depends on var[[ious]] economic conditions. How[[ever]], the extent to wh[[ich]] these interventions can cont[[rol]] inflation remains deba[[ted]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-economy-003',
        setId: 'set-economy',
        rawText: 'Small and medium-sized enter[[prises]] play a cru[[cial]] role in the eco[[nomy]] of most count[[ries]]. The contribution of su[[ch]] businesses to job crea[[tion]] is widely acknow[[ledged]] by economists. Acc[[ess]] to financing rem[[ains]] a significant chall[[enge]] for many entrepre[[neurs]]. Therefore, govern[[ment]] support programmes ha[[ve]] been established to facil[[itate]] growth in th[[is]] sector effectively.',
        difficulty: 'medium',
    },
    {
        id: 'ex-economy-004',
        setId: 'set-economy',
        rawText: 'Corporate social respon[[sibility]] has gained increa[[sing]] attention in the busi[[ness]] world. Consumers are n[[ow]] more aware of the eth[[ical]] practices of comp[[anies]] from which th[[ey]] purchase products. Rese[[arch]] indicates that a commi[[tment]] to sustainability can ha[[ve]] a positive imp[[act]] on brand reput[[ation]]. However, implemen[[tation]] of genuine CSR initi[[atives]] requires significant inves[[tment]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-economy-005',
        setId: 'set-economy',
        rawText: 'The gig economy has trans[[formed]] the nature of wo[[rk]] for millions of peo[[ple]] worldwide. Flex[[ible]] employment is of[[ten]] regarded as advanta[[geous]] by workers see[[king]] autonomy. Neverthe[[less]], concerns about jo[[b]] security and bene[[fits]] have been rai[[sed]] by labour advoc[[ates]]. The regulation of platf[[orm]]-based work rem[[ains]] a challenge for govern[[ments]] in many jurisdi[[ctions]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-economy-006',
        setId: 'set-economy',
        rawText: 'Digital currencies ha[[ve]] emerged as a poten[[tial]] disruption to tradit[[ional]] financial systems. The appli[[cation]] of blockchain techn[[ology]] is regarded as innov[[ative]] by many in the indu[[stry]]. However, the volat[[ility]] of cryptocurrency val[[ues]] has raised conc[[erns]] about their relia[[bility]] as a sto[[re]] of value. Regul[[atory]] frameworks for dig[[ital]] assets are st[[ill]] being developed world[[wide]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-economy-007',
        setId: 'set-economy',
        rawText: 'International trade agree[[ments]] play a signifi[[cant]] role in sha[[ping]] economic relations bet[[ween]] countries. The redu[[ction]] of tariffs and barr[[iers]] is intended to prom[[ote]] the exchange of go[[ods]] and services. How[[ever]], the impact of su[[ch]] agreements on dome[[stic]] industries is of[[ten]] debated publi[[cly]]. Critics argue th[[at]] the benefits are n[[ot]] distributed equally ac[[ross]] all sectors.',
        difficulty: 'medium',
    },
    {
        id: 'ex-economy-008',
        setId: 'set-economy',
        rawText: 'Sustainable investing has gro[[wn]] substantially as inves[[tors]] consider environmental and soc[[ial]] factors carefully. The integr[[ation]] of ESG crit[[eria]] into investment deci[[sions]] is now rega[[rded]] as mainstream prac[[tice]]. Research suggests th[[at]] companies with str[[ong]] sustainability records m[[ay]] outperform their pe[[ers]]. The demand for transp[[arent]] reporting on th[[ese]] matters continues to incr[[ease]].',
        difficulty: 'easy',
    },

    // ============ SET 8: Psychology & Behaviour (8 exercises × 20 gaps = 160 pts) ============
    {
        id: 'ex-psych-001',
        setId: 'set-psychology',
        rawText: 'Cognitive biases ha[[ve]] a significant influ[[ence]] on the w[[ay]] individuals process infor[[mation]] and make deci[[sions]]. The tendency to fav[[our]] evidence that conf[[irms]] existing beliefs is kno[[wn]] as confirmation bi[[as]]. Research indicates th[[at]] awareness of th[[ese]] mental shortcuts can impr[[ove]] the quality of judge[[ment]]. However, overco[[ming]] ingrained patterns of thin[[king]] requires considerable eff[[ort]].',
        difficulty: 'hard',
    },
    {
        id: 'ex-psych-002',
        setId: 'set-psychology',
        rawText: 'The relationship bet[[ween]] stress and hea[[lth]] is now w[[ell]] established in psychol[[ogical]] research worldwide. Chro[[nic]] exposure to stres[[sors]] can have a nega[[tive]] impact on bo[[th]] physical and men[[tal]] wellbeing. Stud[[ies]] have demonstrated th[[at]] coping strategies pl[[ay]] a key ro[[le]] in moderating th[[ese]] effects on indivi[[duals]]. Therefore, the devel[[opment]] of resilience is impo[[rtant]].',
        difficulty: 'medium',
    },
    {
        id: 'ex-psych-003',
        setId: 'set-psychology',
        rawText: 'Social conformity is a phenom[[enon]] that has be[[en]] extensively stud[[ied]] by psychologists. The influ[[ence]] of group pres[[sure]] on individual behav[[iour]] is often underes[[timated]] by people. Rese[[arch]] findings suggest th[[at]] even intelligent indivi[[duals]] are susceptible to confor[[mity]] in certain situa[[tions]]. The desire to bel[[ong]] to a gro[[up]] can override indepe[[ndent]] judgement effectively.',
        difficulty: 'medium',
    },
    {
        id: 'ex-psych-004',
        setId: 'set-psychology',
        rawText: 'The development of personal[[ity]] is influenced by bo[[th]] genetic and environ[[mental]] factors signific[[antly]]. The interaction bet[[ween]] nature and nurt[[ure]] is a cen[[tral]] topic in psychol[[ogical]] research today. Stud[[ies]] of twins ha[[ve]] provided valuable insi[[ghts]] into the rela[[tive]] contribution of ea[[ch]] factor. Neverthe[[less]], the complexity of hum[[an]] development makes defini[[tive]] conclusions difficult.',
        difficulty: 'hard',
    },
    {
        id: 'ex-psych-005',
        setId: 'set-psychology',
        rawText: 'Motivation is a k[[ey]] factor in the achie[[vement]] of goals and the mainte[[nance]] of behaviour. Intri[[nsic]] motivation, which ari[[ses]] from internal inter[[est]], is regarded as mo[[re]] sustainable than exte[[rnal]] rewards alone. Rese[[arch]] indicates that auton[[omy]] and purpose pl[[ay]] a crucial ro[[le]] in fostering engag[[ement]]. The application of th[[ese]] findings has influe[[nced]] management practices.',
        difficulty: 'medium',
    },
    {
        id: 'ex-psych-006',
        setId: 'set-psychology',
        rawText: 'The study of emot[[ional]] intelligence has gai[[ned]] considerable attention in rec[[ent]] years worldwide. The abil[[ity]] to recognise and man[[age]] emotions is assoc[[iated]] with success in interpe[[rsonal]] relationships. Rese[[arch]] suggests that emot[[ional]] skills can be devel[[oped]] through training and prac[[tice]]. However, the measure[[ment]] of such abil[[ities]] remains a chall[[enge]] for psychologists.',
        difficulty: 'easy',
    },
    {
        id: 'ex-psych-007',
        setId: 'set-psychology',
        rawText: 'Memory is a comp[[lex]] cognitive process th[[at]] is susceptible to var[[ious]] forms of distor[[tion]]. The reliability of eye[[witness]] testimony has be[[en]] questioned by resear[[chers]] for decades. Stud[[ies]] have demonstrated th[[at]] memories can be influ[[enced]] by suggestion and subse[[quent]] information signific[[antly]]. The implications of th[[ese]] findings for the just[[ice]] system are profound.',
        difficulty: 'hard',
    },
    {
        id: 'ex-psych-008',
        setId: 'set-psychology',
        rawText: 'The impact of soc[[ial]] media on men[[tal]] health is a top[[ic]] of growing conc[[ern]]. Research indicates th[[at]] excessive use is assoc[[iated]] with increased anxi[[ety]] and depression in so[[me]] individuals partic[[ularly]]. The comparison wi[[th]] idealised images of oth[[ers]] can have a nega[[tive]] effect on self-est[[eem]]. Therefore, aware[[ness]] of these ri[[sks]] is considered impo[[rtant]] for users.',
        difficulty: 'medium',
    },
];
