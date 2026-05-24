export interface GlossaryEntry {
	term: string;
	definition: string;
	acronym?: string;
	category?: string;
}

export const GLOSSARY: GlossaryEntry[] = [
	{
		term: "Abolishing operation",
		definition:
			"An event that temporarily decreases the reinforcing or punishing function of other events (value-altering) and changes the frequency of relevant behavior (behavior-altering).",
		category: "Motivation & Choice",
	},
	{
		term: "Adventitious reinforcement",
		definition:
			"The modification or maintenance of behavior by accidental relations between responses and reinforcers.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Alternating treatment design",
		definition:
			"Also known as a multielement design, this within-subject research design is characterized by rapid alternation between two or more variants of the independent variable.",
		category: "Research Design",
	},
	{
		term: "Antecedent",
		definition:
			"An environmental condition or stimulus change existing prior to a behavior of interest.",
		category: "Operant Behavior",
	},
	{
		term: "Applied behavior analysis",
		definition:
			"The scientific method, technology, and professional approach to changing behavior that is based on the principles identified by the experimental analysis of behavior and is philosophically grounded in radical behaviorism.",
		category: "Operant Behavior",
	},
	{
		term: "Arbitrary matching",
		definition:
			"A conditional discrimination procedure in which the choice of a stimulus from a set of comparison stimuli depends on a sample stimulus that has no physical correspondence.",
		category: "Stimulus Control",
	},
	{
		term: "Automatic reinforcement",
		definition:
			"Reinforcement of behavior because of the consequences produced by the behavior itself.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Autoshaping",
		definition:
			"A respondent conditioning procedure that generates skeletal responses.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Aversive control",
		definition:
			"Control of behavior through punishment or negative reinforcement.",
		category: "Aversive Control",
	},
	{
		term: "Aversive stimulus",
		definition:
			"A stimulus whose presentation serves as a positive punisher or whose removal serves as a negative reinforcer.",
		category: "Stimulus Control",
	},
	{
		term: "Avoidance",
		definition:
			"Prevention (i.e., postponement or cancellation) of a stimulus by a response.",
		category: "Aversive Control",
	},
	{
		term: "Backward chaining",
		definition:
			"Teaching a behavioral chain by starting with the last response or link then the last two, etc., and progressing until the entire chain occurs as a single complex behavior.",
		category: "Operant Behavior",
	},
	{
		term: "Backward conditioning",
		definition:
			"Respondent conditioning in which the CS follows, rather than precedes, the US.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Baseline",
		definition:
			"Measurement of behavior that serves as a point of comparison for behavior after application of the independent variable.",
		category: "Measurement",
	},
	{
		term: "Behavior",
		definition: "Anything an organism does.",
		category: "Operant Behavior",
	},
	{
		term: "Behavior analysis",
		definition: "Breaking complex behavior into its functional parts.",
		category: "Operant Behavior",
	},
	{
		term: "Behavior chain",
		definition:
			"A series of two or more responses that occur in a set sequence, and for which each response in the chain serves as the reinforcer for the previous response and the discriminative stimulus for the following response.",
		category: "Operant Behavior",
	},
	{
		term: "Behavior contract",
		definition:
			"A mutually agreed upon document between parties that specifies a relation between certain behavior(s) and consequences.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Behavioral contrast",
		definition:
			"A change in the rate of one response that occurs when either the rate of a second response or the reinforcement rate of the second response changes in the opposite direction.",
		category: "Operant Behavior",
	},
	{
		term: "Behavioral momentum",
		definition:
			"Persistence of behavior usually measured by resistance to a change in environmental conditions.",
		category: "Operant Behavior",
	},
	{
		term: "Behavioral skills training",
		definition:
			"A procedure consisting of instructions, modeling, rehearsal, and feedback that is used to teach new behavior.",
		category: "Operant Behavior",
	},
	{
		term: "Bias (in the context of matching)",
		definition:
			"Choice of one response over another that cannot be explained by the known rate, amount, or immediacy of reinforcement for the responses.",
		category: "Stimulus Control",
	},
	{
		term: "Breakpoint",
		definition:
			"The highest ratio completed on a progressive-ratio (PR) schedule.",
		acronym: "PR",
	},
	{
		term: "Case study",
		definition:
			"A nonempirical evaluation of a single participant that typically includes a detailed description of the participant and qualitative data in narrative form.",
		category: "Research Design",
	},
	{
		term: "Chained (chain) schedule",
		definition:
			"A compound schedule in which a reinforcer is produced by successive completion of two or more component schedules, each operating during a different stimulus.",
		category: "Schedules",
	},
	{
		term: "Changing criterion design",
		definition:
			"An experimental design in which the level of a behavior is changed systematically across successive changes in the criterion for a consequence.",
		category: "Research Design",
	},
	{
		term: "Choice",
		definition: "Emission of one of two or more alternative responses.",
		category: "Motivation & Choice",
	},
	{
		term: "Component analysis",
		definition:
			"Analysis of a multicomponent procedure to identify which aspects of the procedure are responsible for behavior change.",
		category: "Theory & Philosophy",
	},
	{
		term: "Compound schedule",
		definition: "A schedule that combines two of more component schedules.",
		category: "Schedules",
	},
	{
		term: "Compound stimuli",
		definition:
			"A complex stimulus that consists of simultaneous presentation of two or more stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Concept",
		definition:
			"Generalization within a class of stimuli and discrimination between classes of stimuli.",
	},
	{
		term: "Concurrent (conc) schedules",
		definition:
			"Two of more schedules operating simultaneously, each for a different response.",
		category: "Schedules",
	},
	{
		term: "Concurrent-chain schedules",
		definition:
			"A procedure in which initial-link schedules provide the subject with a choice of signaled terminal-link schedules.",
		category: "Schedules",
	},
	{
		term: "Conditional discrimination",
		definition:
			"A discrimination in which reinforcement of responding during a stimulus depends on (is conditional on) other stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Conditional probability",
		definition: "The probability of one event given another event.",
		category: "Stimulus Control",
	},
	{
		term: "Conditioned (secondary) reinforcer",
		definition:
			"A stimulus whose reinforcing function derives from some relation with an established reinforcer.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned aversive stimulus",
		definition:
			"A stimulus whose aversive function derives from some relation with an established aversive stimulus.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned emotional response",
		definition:
			"Suppression of operant behavior by the presentation of a stimulus that has been paired with an aversive stimulus.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned punisher",
		definition:
			"A stimulus whose punishing function derives from some relation with an established punisher.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned reinforcement",
		definition:
			"Process in which behavior is strengthened by a consequence whose reinforcing function derives from some relation with an established reinforcer.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned response (CR)",
		definition:
			"A response elicited by a stimulus whose eliciting functions result from prior conditioning.",
		acronym: "CR",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioned stimulus (CS)",
		definition:
			"A stimulus that elicits a response as a result of prior conditioning.",
		acronym: "CS",
		category: "Respondent & Conditioning",
	},
	{
		term: "Conditioning",
		definition:
			"Modification of behavior by stimulus-stimulus contingencies (respondent conditioning) or response-stimulus contingencies (operant conditioning).",
		category: "Respondent & Conditioning",
	},
	{
		term: "Consequence",
		definition: "A stimulus change that follows a behavior of interest.",
		category: "Operant Behavior",
	},
	{
		term: "Consummatory response",
		definition: "The behavior occasioned by a reinforcer.",
		category: "Operant Behavior",
	},
	{
		term: "Contiguity",
		definition:
			"The juxtaposition of two or more events when they occur simultaneously or very close together in time.",
		category: "Operant Behavior",
	},
	{
		term: "Contingency",
		definition:
			"In the operant case, the conditions under which a response produces a consequence.",
		category: "Operant Behavior",
	},
	{
		term: "Contingency-governed behavior",
		definition: "Behavior under the control of a three-term contingency.",
		category: "Operant Behavior",
	},
	{
		term: "Continuous measurement",
		definition:
			"Measurement system that captures each instance of the target behavior during a session.",
		category: "Measurement",
	},
	{
		term: "Continuous reinforcement schedule (CRF)",
		definition:
			"Reinforcement of every response qualifying as a member of a descriptive operant class.",
		acronym: "CRF",
		category: "Schedules",
	},
	{
		term: "Counterbalancing",
		definition:
			"In research in which a subject is exposed to two or more conditions, the practice of arranging the conditions in different orders for different subjects.",
		category: "Research Design",
	},
	{
		term: "Counterconditioning",
		definition:
			"Respondent contingencies involving a new US are arranged so as to produce new CRs incompatible with those of the original conditioning.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Covert behavior",
		definition: "Behavior that is not observable to others.",
		category: "Operant Behavior",
	},
	{
		term: "Cumulative record",
		definition:
			"A graph that shows total responses plotted as a function of time.",
		category: "Measurement",
	},
	{
		term: "Delay conditioning",
		definition:
			"Respondent conditioning in which the CS is presented for some fixed extended time before the US.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Delay discounting",
		definition:
			"Decline in the present value of a stimulus with delay to its receipt.",
		category: "Motivation & Choice",
	},
	{
		term: "Delay of reinforcement",
		definition: "The time from a response to a reinforcer.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Delayed matching-to-sample (DMTS)",
		definition:
			"A conditional discrimination procedure in which the choice of a stimulus from a set of comparison stimuli depends on a sample stimulus that has been presented and removed.",
		acronym: "DMTS",
		category: "Stimulus Control",
	},
	{
		term: "Dependent variable",
		definition:
			"What is measured by the investigator to see if changes depend on manipulations of the independent variable.",
		category: "Research Design",
	},
	{
		term: "Descriptive assessment",
		definition:
			"A form of behavioral assessment in which a client is observed in the typical environment without interference or manipulation from the behavior analyst.",
		category: "Procedures & Methods",
	},
	{
		term: "Determinism",
		definition:
			"The assumption that there is order in the universe, and that this order can be discovered.",
		category: "Research Design",
	},
	{
		term: "Differential reinforcement",
		definition:
			"Providing consequences for some classes or forms of behavior that differ from the consequences provided for other classes or forms.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Direct measurement",
		definition:
			"Measurement practices in which the events measured are the same as those about which conclusions will be drawn.",
		category: "Measurement",
	},
	{
		term: "Direct replication",
		definition:
			"Repetition of an experimental method exactly as it was originally designed and executed.",
		category: "Research Design",
	},
	{
		term: "Discontinuous measurement",
		definition:
			"Measurement that occurs only at designated times or that captures binary data on the presence or absence of behavior across time.",
		category: "Measurement",
	},
	{
		term: "Discrete-trial procedure",
		definition:
			"A procedure in which the opportunity to respond is restricted to isolated segments (trials) of the session.",
		category: "Procedures & Methods",
	},
	{
		term: "Discriminated avoidance",
		definition:
			"Prevention (i.e., postponement or cancellation) of an aversive stimulus by a response in the presence of a discriminative stimulus that precedes the aversive stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Discrimination",
		definition:
			"Difference in responding in the presence of different stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Discriminative stimulus",
		definition:
			"Any stimulus with a discriminative function; according to an older usage, a stimulus correlated with reinforcement when another is correlated with extinction.",
		category: "Stimulus Control",
	},
	{
		term: "DRA",
		definition:
			"Differential reinforcement of alternative behavior. A procedure to reduce a target behavior by arranging more favorable reinforcement contingencies for a specific alternative response.",
		acronym: "DRA",
		category: "Reinforcement & Punishment",
	},
	{
		term: "DRH",
		definition: "Differential reinforcement of high-rate responding.",
		acronym: "DRH",
		category: "Reinforcement & Punishment",
	},
	{
		term: "DRL",
		definition: "Differential reinforcement of low-rate responding.",
		acronym: "DRL",
		category: "Reinforcement & Punishment",
	},
	{
		term: "DRO",
		definition:
			"Differential reinforcement of other behavior. A procedure to reduce a target behavior by delivering reinforcers following a period of time in the absence of the target response.",
		acronym: "DRO",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Duration recording",
		definition:
			"A method of continuous data collection in which the amount of time a behavior occurs is measured over an observational period.",
		category: "Measurement",
	},
	{
		term: "Echoic",
		definition:
			"An elementary verbal operant evoked by a vocal discriminative stimulus that has point-to-point correspondence and formal similarity with the stimulus.",
		category: "Verbal Behavior",
	},
	{
		term: "Elicitation",
		definition:
			"Reliable production of a response by a stimulus in unconditioned or conditioned reflexes.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Empiricism",
		definition:
			"The objective observation of the phenomena of interest, free from individual judgement, opinions, and taste.",
		category: "Research Design",
	},
	{
		term: "Equivalence class",
		definition:
			"A stimulus class that includes the emergent relations of reflexivity, symmetry, and transitivity among its members.",
		category: "Stimulus Control",
	},
	{
		term: "Errorless discrimination",
		definition:
			"A discrimination between a positive and a negative discriminative stimulus that was established with few responses in the presence of the negative discriminative stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Escape",
		definition: "Termination of a stimulus by a response.",
		category: "Aversive Control",
	},
	{
		term: "Establishing operation",
		definition:
			"An event that temporarily increases the reinforcing or punishing function of other events (value-altering) and changes the frequency of relevant behavior (behavior-altering).",
		category: "Motivation & Choice",
	},
	{
		term: "Event recording",
		definition:
			"A method of continuous data collection in which the number of instances of a response are counted over an observational period.",
		category: "Measurement",
	},
	{
		term: "Experimental analysis of behavior",
		definition:
			"Scientific discipline that focuses on the study of behavior in its own right, seeks the causes of behavior in the environment, and relies on experimental methods.",
		category: "Operant Behavior",
	},
	{
		term: "External validity",
		definition:
			"Generality of experimental outcomes across populations, settings, times, or variables.",
		category: "Research Design",
	},
	{
		term: "Exteroceptive stimulus",
		definition: "A stimulus occurring outside of the organism's skin.",
		category: "Stimulus Control",
	},
	{
		term: "Extinction (EXT) in operant conditioning",
		definition:
			"Procedure in which a response-reinforcer relation is discontinued; process in which behavior is weakened by discontinuing a response-reinforcer relation.",
		acronym: "EXT",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Extinction (EXT) in respondent conditioning",
		definition:
			"Procedure in which a CS-US contingency is discontinued; process in which behavior is changed by the discontinuation of a CS-US contingency.",
		acronym: "EXT",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Extinction burst",
		definition:
			"A temporary increase in the rate, duration, or intensity of a response following the discontinuation of a response-reinforcer relation (extinction).",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Fading",
		definition:
			"Transferring stimulus control from one stimulus to another by gradually removing one and introducing the other one.",
		category: "Stimulus Control",
	},
	{
		term: "First-order conditioning",
		definition:
			"Respondent conditioning procedures in which a neutral stimulus is related to a US.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Fixed-interval (FI) schedule",
		definition:
			"A schedule in which some minimum time must elapse before a response is reinforced, and the time requirement is the same across intervals.",
		acronym: "FI",
		category: "Schedules",
	},
	{
		term: "Fixed-ratio (FR) schedule",
		definition:
			"A schedule in which the last of a specified number of responses is reinforced, and the number is constant across reinforcers.",
		acronym: "FR",
		category: "Schedules",
	},
	{
		term: "Fluency",
		definition:
			"Characteristic of responding that occurs rapidly and with little effort.",
		category: "Procedures & Methods",
	},
	{
		term: "Forced choice",
		definition:
			"A trial in which only one alternative is available, imbedded in a procedure involving choices between two or more alternatives.",
		category: "Motivation & Choice",
	},
	{
		term: "Forward chaining",
		definition:
			"Teaching a behavioral chain by starting with the first response or link then the first two, etc., and progressing until the entire chain occurs as a single complex behavior.",
		category: "Operant Behavior",
	},
	{
		term: "Free-operant procedure",
		definition:
			"A procedure in which behavior can be emitted throughout a session, unconstrained by dividing the session into discrete trials.",
		category: "Operant Behavior",
	},
	{
		term: "Function-based intervention",
		definition:
			"In applied behavior analysis, an intervention procedure that is based on the function of the problem behavior.",
		category: "Theory & Philosophy",
	},
	{
		term: "Functional analysis",
		definition:
			"An analysis in terms of behavioral functions (effects of responses); alternatively, an analysis in terms of functional relations.",
		category: "Theory & Philosophy",
	},
	{
		term: "Functional approach",
		definition:
			"Analysis of behavior based on the aspects of the environment that evoke or maintain the behavior.",
		category: "Theory & Philosophy",
	},
	{
		term: "Functional class",
		definition:
			"A class in which members have common behavioral functions, either produced by similar histories or acquired through emergent relations.",
		category: "Theory & Philosophy",
	},
	{
		term: "Functional communication training (FCT)",
		definition:
			"A variant on differential reinforcement of alternative behavior designed as an intervention for challenging behavior.",
		acronym: "FCT",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Functional relation",
		definition: "A lawful relation between variables.",
		category: "Theory & Philosophy",
	},
	{
		term: "Generalization",
		definition: "Similar responding in the presence of different stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Generalization gradient",
		definition:
			"A graph relating behavior to variations in a stimulus dimension.",
		category: "Stimulus Control",
	},
	{
		term: "Generalized reinforcer",
		definition:
			"A conditioned reinforcer based on several established reinforcers.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Habituation",
		definition:
			"Learning process in which the strength of the response elicited by a stimulus decreases as a function of repeated presentations of, or continuous exposure to, the stimulus.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Higher-order conditioning",
		definition:
			"Respondent conditioning procedures in which a neutral stimulus is related to a previously established CS.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Higher-order schedule",
		definition:
			"A schedule that reinforces a complex operant consisting of completion of a schedule requirement.",
		category: "Schedules",
	},
	{
		term: "Hypothetical construct",
		definition:
			"A conjectured entity, process, or event that is not observed directly but is assumed to explain an observable phenomenon.",
		category: "Research Design",
	},
	{
		term: "Identity matching",
		definition:
			"A conditional discrimination procedure in which the choice of a stimulus from a set of comparison stimuli depends on a sample stimulus that is physically the same as the comparison stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Imitation",
		definition:
			"Behavior that duplicates some properties of the behavior of a model.",
		category: "Operant Behavior",
	},
	{
		term: "Impulsive choice (in the context of reinforcement)",
		definition:
			"Choosing a smaller, sooner outcome over a larger, later outcome.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Independent variable",
		definition:
			"Variable manipulated by the investigator to determine effects on the dependent variable.",
		category: "Research Design",
	},
	{
		term: "Indirect measurement",
		definition:
			"Measurement of behavior based on data other than direct observation of the behavior, such as artifacts of the behavior or reports about that behavior.",
		category: "Measurement",
	},
	{
		term: "Induction",
		definition:
			"The spread of effects of reinforcement to responses outside the limits of the reinforced operant class.",
		category: "Procedures & Methods",
	},
	{
		term: "Inhibition",
		definition: "A process inferred from a response decrement.",
		category: "Procedures & Methods",
	},
	{
		term: "Intermittent reinforcement",
		definition:
			"A general term referring to schedules in which some, but not all, instances of a response are reinforced.",
		category: "Schedules",
	},
	{
		term: "Internal validity",
		definition:
			"Attribute of experiments designed and executed so that clear inferences can be drawn about the causal relation between the independent and dependent variables.",
		category: "Research Design",
	},
	{
		term: "Interobserver agreement",
		definition:
			"A method for establishing that human-transduced data are believable by comparing the records of two independent observers.",
		category: "Measurement",
	},
	{
		term: "Interoceptive stimulus",
		definition: "A stimulus inside the organism.",
		category: "Stimulus Control",
	},
	{
		term: "Interreinforcement interval (IRI)",
		definition: "The time between two reinforcers.",
		acronym: "IRI",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Interresponse time (IRT)",
		definition: "The time between two responses.",
		acronym: "IRT",
		category: "Operant Behavior",
	},
	{
		term: "Intertrial interval (ITI)",
		definition:
			"A period of time between two trials during which experimental contingencies are not in effect.",
		acronym: "ITI",
	},
	{
		term: "Interval recording",
		definition:
			"Method of discontinuous data collection in which the observer makes a binary (yes-no) distinction about the occurrence of a behavior during a period of time.",
		category: "Measurement",
	},
	{
		term: "Interval schedule",
		definition:
			"Procedure in which presentation of a consequence depends on the emission of the response after some period of time has elapsed.",
		category: "Schedules",
	},
	{
		term: "Intervening variable",
		definition:
			"A variable whose value is determined by its relation to observable variables; it serves as a summary of the relations among observable variables.",
		category: "Research Design",
	},
	{
		term: "Intraverbal",
		definition:
			"An elementary verbal operant that is evoked by a verbal discriminative stimulus and does not have point-to-point correspondence with that verbal stimulus.",
		category: "Verbal Behavior",
	},
	{
		term: "Intrinsic reinforcer",
		definition:
			"A reinforcer that is naturally related to the responses that produce it.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Latency",
		definition:
			"The time from an event, usually a stimulus onset, to a response.",
		category: "Measurement",
	},
	{
		term: "Law of effect",
		definition:
			"Thorndike's classic statement about the effect of consequences on behavior: behavior followed by satisfying consequences is likely to be repeated.",
		category: "Operant Behavior",
	},
	{
		term: "Learned helplessness",
		definition:
			"Disruption in the acquisition of escape or avoidance produced by a history in which responding during aversive stimuli has had no consequences.",
		category: "Operant Behavior",
	},
	{
		term: "Learning",
		definition:
			"Process by which relatively permanent changes are made in an organism's behavioral repertoire.",
		category: "Operant Behavior",
	},
	{
		term: "Limited hold",
		definition:
			"Termination of reinforcer availability if the response to be reinforced does not occur soon enough after the onset of availability.",
	},
	{
		term: "Mand",
		definition:
			"An elementary verbal operant that is evoked by a particular establishing operation and followed by a specific reinforcer.",
		category: "Verbal Behavior",
	},
	{
		term: "Matching",
		definition:
			"In conditions with concurrent schedules of reinforcement, changes in the ratio of responding across the alternative schedules are perfectly proportional to changes in the ratio of reinforcement across the alternatives.",
		category: "Stimulus Control",
	},
	{
		term: "Matching law",
		definition:
			"In conditions with concurrent schedules, a quantitative formulation that relates changes in the ratio of responding across the alternative schedules to changes in the ratio of reinforcement across the schedules.",
		category: "Stimulus Control",
	},
	{
		term: "Matching-to-sample (MTS)",
		definition:
			"A conditional-discrimination procedure in which a sample stimulus is followed by two or more comparison stimuli and selecting the matching stimulus is reinforced.",
		acronym: "MTS",
		category: "Stimulus Control",
	},
	{
		term: "Maximizing",
		definition:
			"Given two or more responses, emitting the one with the higher probability of reinforcement over the long term.",
		category: "Motivation & Choice",
	},
	{
		term: "Mentalism",
		definition:
			"An approach that attributes the cause of behavior to the mind or other inner dimensions.",
		category: "Theory & Philosophy",
	},
	{
		term: "Methodological behaviorism",
		definition:
			"Position that psychology should restrict its attention to overt behavior that can be measured directly.",
		category: "Operant Behavior",
	},
	{
		term: "Mixed (mix) schedule",
		definition:
			"A compound schedule in which two or more component schedules alternate, with all components accompanied by the same stimulus.",
		category: "Schedules",
	},
	{
		term: "Modeling",
		definition:
			"Procedure in which behavior is emitted so that an observer may imitate it.",
		category: "Operant Behavior",
	},
	{
		term: "Molar analysis",
		definition:
			"Analysis of behavior characterized by reliance on long-term measures such as response rates averaged over sessions.",
		category: "Theory & Philosophy",
	},
	{
		term: "Molecular analysis",
		definition:
			"Analysis of behavior characterized by reliance on short-term measures such as interresponse times.",
		category: "Theory & Philosophy",
	},
	{
		term: "Momentary maximizing",
		definition:
			"Given two or more responses, emitting the one with the higher probability of reinforcement in the short term.",
		category: "Motivation & Choice",
	},
	{
		term: "Momentary time sampling",
		definition:
			"A method of discontinuous data collection in which the observational period is divided into intervals and the target behavior is recorded if it is occurring during the moment at the end of each interval.",
		category: "Measurement",
	},
	{
		term: "Motivating operation",
		definition:
			"An event that temporarily alters the reinforcing or punishing effectiveness of other events (value-altering effect) and alters the frequency of relevant behavior (behavior-altering effect).",
		category: "Motivation & Choice",
	},
	{
		term: "Multiple (mult) schedule",
		definition:
			"A compound schedule in which two or more component schedules alternate, each correlated with a distinctive stimulus.",
		category: "Schedules",
	},
	{
		term: "Multiple-baseline design",
		definition:
			"Experimental design in which an intervention is imposed on two or more independent baselines, with the intervention imposed after staggered periods of time.",
		category: "Schedules",
	},
	{
		term: "Natural selection",
		definition:
			"Process in which populations change over time because organisms better adapted to their environment tend to survive and produce more offspring than lesser adapted organisms.",
		category: "Theory & Philosophy",
	},
	{
		term: "Negative punishment",
		definition:
			"Operation or procedure in which the likelihood of a response is reduced by the response-contingent removal or reduction of a stimulus.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Negative reinforcement",
		definition:
			"Operation or procedure in which the likelihood of a response is increased by the response-contingent removal or reduction of a stimulus.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Observational learning",
		definition:
			"Modification of behavior based on observation of another organism's behavior and/or its consequences.",
		category: "Operant Behavior",
	},
	{
		term: "Observing response",
		definition:
			"A response that produces or clarifies a discriminative stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "One-factor theory",
		definition:
			"A theory stating that avoidance is negatively reinforced by overall reductions in the frequency of an aversive event.",
		category: "Aversive Control",
	},
	{
		term: "Ontogeny",
		definition: "The developmental or life history of an individual organism.",
		category: "Theory & Philosophy",
	},
	{
		term: "Operant",
		definition:
			"When used as a noun, a class of behavior that can be modified by its consequences.",
		category: "Operant Behavior",
	},
	{
		term: "Operant conditioning",
		definition: "Modification of behavior by its consequences.",
		category: "Operant Behavior",
	},
	{
		term: "Operant level",
		definition:
			"The rate at which responses occur before they have been reinforced.",
		category: "Operant Behavior",
	},
	{
		term: "Operational definition",
		definition:
			"Specification of a variable in terms of the procedures involved in arranging it or measuring it.",
		category: "Measurement",
	},
	{
		term: "Orienting response",
		definition:
			"A response that allows an organism to attend to a discriminative stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Overcorrection",
		definition:
			"A contingency for inappropriate behavior requiring the individual to engage in an effortful response that more than corrects the effects of the inappropriate behavior.",
		category: "Aversive Control",
	},
	{
		term: "Overmatching",
		definition:
			"In conditions with concurrent schedules of reinforcement, changes in the ratio of responding across the alternative schedules are disproportionately greater than changes in the ratio of reinforcement.",
		category: "Stimulus Control",
	},
	{
		term: "Overshadowing",
		definition:
			"Respondent conditioning process in which acquisition of associative value by a conditioned stimulus is weakened by the presence of another stimulus.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Parsimony",
		definition:
			"Principle of scientific explanation that favors the simplest explanation that fits the evidence.",
		category: "Research Design",
	},
	{
		term: "Partial-interval recording",
		definition:
			"A method of data collection in which the observational period is divided into intervals and the target behavior is recorded if it occurs at any point during each interval.",
		category: "Measurement",
	},
	{
		term: "Partial-reinforcement effect",
		definition:
			"The empirical finding that a response has greater resistance to extinction if it was established with a procedure in which some instances of the response were reinforced.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Peak procedure",
		definition:
			"Omitting some proportion of the reinforcers arranged by a fixed-interval schedule and thereby allow responding to continue for some time after the usual end of the interval.",
		category: "Procedures & Methods",
	},
	{
		term: "Permanent-product recording",
		definition:
			"A recording method in which durable products of a behavior are measured.",
		category: "Measurement",
	},
	{
		term: "Phylogeny",
		definition: "Development or evolutionary history of a species.",
		category: "Theory & Philosophy",
	},
	{
		term: "Positive punishment",
		definition:
			"Operation or procedure in which the likelihood of a response is reduced by the response-contingent presentation of a stimulus.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Positive reinforcement",
		definition:
			"Operation or procedure in which the likelihood of a response is increased by the response-contingent presentation of a stimulus.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Postreinforcement pause",
		definition:
			"A period of no responding following a reinforcer delivery, especially in fixed-ratio and fixed-interval schedules.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Preference assessment",
		definition:
			"A procedure to determine the relative value of items or activities based on an individual's selections.",
		category: "Motivation & Choice",
	},
	{
		term: "Premack Principle",
		definition:
			"Using a more probable response to reinforce a less probable response.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Private event",
		definition:
			"Stimulus events or behavior that take place within the organism's skin and are not accessible to others.",
		category: "Theory & Philosophy",
	},
	{
		term: "Probe",
		definition:
			"A condition or stimulus briefly introduced into an ongoing experimental phase.",
		category: "Research Design",
	},
	{
		term: "Progressive-ratio (PR) schedule",
		definition:
			"A schedule in which the number of responses required for reinforcement is increased after each reinforcer.",
		acronym: "PR",
		category: "Schedules",
	},
	{
		term: "Prompt",
		definition:
			"A supplemental stimulus that increases the probability of a particular response.",
		category: "Stimulus Control",
	},
	{
		term: "Prompt delay",
		definition:
			"A procedure in which discriminative stimulus for a response is presented and then, after a specific interval of time without the response, a prompt for the response is presented.",
		category: "Stimulus Control",
	},
	{
		term: "Prompt fading",
		definition:
			"A procedure in which a prompt for a response is gradually withdrawn across trials, so that the response comes under the control of a discriminative stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Proprioceptive stimulus",
		definition:
			"An interoceptive stimulus produced by the effects of movements and postures on receptors in muscles, tendons, or joints.",
		category: "Stimulus Control",
	},
	{
		term: "Punisher",
		definition:
			"A stimulus or event that reduces the likelihood of the response that precedes it.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Punishment",
		definition:
			"Process in which the likelihood of a response is reduced by its consequences.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Radical behaviorism",
		definition:
			"Position emphasizing: (a) behavior as an object of study in its own right, and (b) the search for causes of behavior in the environment.",
		category: "Operant Behavior",
	},
	{
		term: "Random-interval (RI) schedule",
		definition:
			"A schedule in which some minimum time must elapse before a response is reinforced, and the time requirement varies across intervals on a probabilistic basis.",
		acronym: "RI",
		category: "Schedules",
	},
	{
		term: "Random-ratio (RR) schedule",
		definition:
			"A schedule in which each response has an equal probability of being reinforced.",
		acronym: "RR",
		category: "Schedules",
	},
	{
		term: "Rate",
		definition: "Count per unit time.",
		category: "Measurement",
	},
	{
		term: "Ratio strain",
		definition:
			"Disruption in responding when the requirements of a ratio schedule are high or are raised abruptly.",
	},
	{
		term: "Reinforcement",
		definition:
			"Process in which the likelihood of a response is increased by its consequences.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Reinforcer",
		definition:
			"A stimulus or event that increases the likelihood of the response that precedes it.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Reinforcer assessment",
		definition:
			"Experimental procedure in which a stimulus hypothesized to function as a reinforcer is presented dependent on a response.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Reinstatement",
		definition:
			"The recurrence of a previously extinguished response when the reinforcer that previously maintained the response is delivered independently of responding.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Renewal",
		definition:
			"The transient reemergence of a previously reduced response following a change in context.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Replication",
		definition: "Repetition of an experimental method.",
		category: "Research Design",
	},
	{
		term: "Resistance to change",
		definition:
			"Persistence of an operant response under new environmental conditions that would tend to reduce the likelihood of the response.",
		category: "Operant Behavior",
	},
	{
		term: "Respondent",
		definition:
			"A class of responses defined in terms of stimuli that reliably produce them.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Respondent conditioning",
		definition:
			"The modification of respondent behavior by stimulus-stimulus contingencies, so that a previously neutral stimulus comes to elicit a response.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Respondent discrimination",
		definition:
			"Conditioned response that occurs to one stimulus but not others.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Response",
		definition: "An instance of behavior.",
		category: "Operant Behavior",
	},
	{
		term: "Response cost",
		definition:
			"A procedure designed as negative punishment in which a reinforcer is removed following responding according to a schedule.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Response deprivation",
		definition:
			"A procedure in which a response is restricted below its baseline or operant levels.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Resurgence",
		definition:
			"The transient reemergence of a previously reduced response following a worsening of reinforcement conditions for an alternative response.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Reversal design",
		definition:
			"A research design in which experimental conditions are replicated across phases.",
		category: "Research Design",
	},
	{
		term: "Rule-governed behavior",
		definition:
			"Behavior controlled by verbal stimulus such as rules or instructions, as opposed to behavior directly controlled by its consequences.",
		category: "Operant Behavior",
	},
	{
		term: "Running rate",
		definition:
			"The rate of responding calculated over a period that excludes some time in which the response could have occurred but did not.",
		category: "Measurement",
	},
	{
		term: "Satiation",
		definition:
			"A type of abolishing operation in which prior exposure to the event reduces the extent to which the event functions as a reinforcer.",
		category: "Motivation & Choice",
	},
	{
		term: "Say-do correspondence",
		definition:
			"The extent to which behavior aligns with the subject's previous, usually verbal, behavior.",
		category: "Theory & Philosophy",
	},
	{
		term: "Schedule",
		definition:
			"A specification of the criteria by which responses produce consequences.",
		category: "Schedules",
	},
	{
		term: "Self-control choice (in the context of reinforcement)",
		definition:
			"Choosing a larger, later outcome over a smaller, sooner outcome.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Self-management",
		definition:
			"Procedure in which an individual modifies the environment to change their own behavior.",
		category: "Theory & Philosophy",
	},
	{
		term: "Sensitivity (in the context of matching)",
		definition:
			"In conditions with concurrent schedules of reinforcement, the degree to which changes in the response ratio track changes in the reinforcer ratio.",
		category: "Stimulus Control",
	},
	{
		term: "Sensitization",
		definition:
			"Learning process in which (a) the strength of the response elicited by a stimulus increases as a function of repeated presentations, or (b) the intensity of a stimulus required to elicit a response decreases.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Shaping",
		definition:
			"Procedure in which successive approximations of a target response are differentially reinforced, such that each successive approximation more closely resembles the target.",
		category: "Operant Behavior",
	},
	{
		term: "Simultaneous conditioning",
		definition:
			"A respondent conditioning procedure in which the CS and US are presented at the same time.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Single-subject research designs",
		definition:
			"Experimental designs characterized by repeated measurements of an individual's behavior, comparisons across experimental conditions imposed on that individual.",
		category: "Research Design",
	},
	{
		term: "Social validity",
		definition:
			"In the context of applied behavior analysis, the measurement of the extent to which stakeholders find the goals, procedures, and outcomes of behavior change to be acceptable.",
		category: "Theory & Philosophy",
	},
	{
		term: "Species-specific behavior",
		definition: "Behavior observed in all or most members of a species.",
		category: "Operant Behavior",
	},
	{
		term: "Spontaneous recovery",
		definition:
			"The reemergence of a previously extinguished response following some period of time away from the extinction context, and in the absence of reinforcement.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Stability criterion",
		definition: "A rule for deciding whether a response is in a steady state.",
		category: "Measurement",
	},
	{
		term: "State-dependent learning",
		definition:
			"Learning that is most likely to be demonstrated when the learner is in the same context as during the original learning.",
		category: "Operant Behavior",
	},
	{
		term: "Steady state",
		definition:
			"A state in which an environment-behavior relation reaches equilibrium.",
		category: "Measurement",
	},
	{
		term: "Stereotyped response",
		definition:
			"A response with properties (especially topography) that are relatively invariant over successive occurrences.",
		category: "Operant Behavior",
	},
	{
		term: "Stimulus control",
		definition:
			"Control by a stimulus over behavior that results from response-consequence relations experienced in the presence of the stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Stimulus discrimination",
		definition:
			"A difference in responding resulting from differential consequences of responding in the presence of different stimuli.",
		category: "Stimulus Control",
	},
	{
		term: "Stimulus equivalence",
		definition:
			"A situation in which an individual learns to respond to all stimuli in a category as if they are interchangeable.",
		category: "Stimulus Control",
	},
	{
		term: "Stimulus fading",
		definition:
			"Gradually changing some aspect of a stimulus until a new stimulus continues to evoke the response.",
		category: "Stimulus Control",
	},
	{
		term: "Stimulus generalization",
		definition:
			"The spread of the effects of reinforcement, or other operations such as extinction or punishment, during one stimulus to other stimuli differing from the original stimulus.",
		category: "Stimulus Control",
	},
	{
		term: "Stimulus/stimuli",
		definition: "Any physical event.",
		category: "Stimulus Control",
	},
	{
		term: "Structural approach",
		definition: "Categorization of behavior based on the form of the behavior.",
		category: "Theory & Philosophy",
	},
	{
		term: "Successive approximation",
		definition:
			"In shaping, any response that is closer to the terminal behavior along a particular dimension, including variations of topography.",
		category: "Operant Behavior",
	},
	{
		term: "Superstition",
		definition:
			"Behavior modified or maintained by accidental (also adventitious, incidental or spurious) relations between responses and reinforcers.",
	},
	{
		term: "Systematic replication",
		definition:
			"Repetition of an experimental method under circumstances that differ from the original experiment.",
		category: "Research Design",
	},
	{
		term: "Tact",
		definition:
			"An elementary verbal operant under the control of nonverbal antecedents and generalized conditioned reinforcement.",
		category: "Verbal Behavior",
	},
	{
		term: "Tandem (tand) schedule",
		definition:
			"A compound schedule in which reinforcers are produced by successive completions of two or more component schedules, each operating in the presence of the same stimulus.",
		category: "Schedules",
	},
	{
		term: "Task analysis",
		definition:
			"Identification of the discriminative stimulus and response for each component of a behavior chain.",
		category: "Operant Behavior",
	},
	{
		term: "Three-term contingency",
		definition:
			"A model for analyzing operant behavior that considers (1) the stimulus conditions in which a response-consequence relation is operating, (2) the response itself, and (3) the consequence.",
		category: "Stimulus Control",
	},
	{
		term: "Time-based schedule",
		definition:
			"Schedule of stimulus delivery in which the deliveries are based on the passage of time independently of responding.",
		category: "Schedules",
	},
	{
		term: "Timeout",
		definition: "A period during which a behavioral contingency is suspended.",
		category: "Aversive Control",
	},
	{
		term: "Token economy",
		definition:
			"A treatment package in which responding produces tokens, which may be exchanged for access to established reinforcers at a later time.",
		category: "Reinforcement & Punishment",
	},
	{
		term: "Topography of response",
		definition: "The physical form of behavior.",
		category: "Operant Behavior",
	},
	{
		term: "Trace conditioning",
		definition:
			"A respondent conditioning procedure in which the US is presented some fixed time after the CS has been presented and removed.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Transition state",
		definition: "Behavior that is changing from one steady-state to another.",
		category: "Measurement",
	},
	{
		term: "Treatment integrity",
		definition: "The extent to which procedures are implemented as designed.",
		category: "Theory & Philosophy",
	},
	{
		term: "Trend",
		definition: "Systematic variation over a series of observations.",
		category: "Measurement",
	},
	{
		term: "Two-factor theory",
		definition:
			"A theory stating that avoidance is negatively reinforced by termination of conditioned aversive stimuli established through respondent conditioning.",
		category: "Aversive Control",
	},
	{
		term: "Unconditioned punisher",
		definition:
			"A stimulus whose punishing function does not depend on a relation to another punisher.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Unconditioned reinforcer",
		definition:
			"A stimulus whose reinforcing function does not depend on a relation to another reinforcer.",
		category: "Respondent & Conditioning",
	},
	{
		term: "Unconditioned response (UR)",
		definition:
			"Movement of lips, tongue, etc. that modulates air flow and produces sound.",
		acronym: "UR",
		category: "Respondent & Conditioning",
	},
	{
		term: "Unconditioned stimulus (US)",
		definition:
			"A stimulus that elicits a response without prior conditioning.",
		acronym: "US",
		category: "Respondent & Conditioning",
	},
	{
		term: "Undermatching",
		definition:
			"In conditions with concurrent schedules of reinforcement, changes in the ratio of responding across the alternative schedules are disproportionately lower.",
		category: "Stimulus Control",
	},
	{
		term: "Variable-interval (VI) schedule",
		definition:
			"A schedule in which some minimum time must elapse before a response is reinforced, and time requirement varies across intervals.",
		acronym: "VI",
		category: "Schedules",
	},
	{
		term: "Variable-ratio (VR) schedule",
		definition:
			"A schedule in which the last of a specified number of responses is reinforced, and the number varies across reinforcers.",
		acronym: "VR",
		category: "Schedules",
	},
	{
		term: "Verbal behavior",
		definition:
			"Behavior reinforced through the mediation of other organisms who must be responding in ways which have been conditioned precisely in order to reinforce.",
		category: "Verbal Behavior",
	},
	{
		term: "Visual inspection",
		definition:
			"A systematic approach for interpreting behavioral data that entails inspection of graphed data for variability, level, and trend.",
		category: "Measurement",
	},
	{
		term: "Vocal behavior",
		definition:
			"Movement of lips, tongue, etc. that modulates air flow and produces sound.",
		category: "Verbal Behavior",
	},
	{
		term: "Whole-interval recording",
		definition:
			"A method of data collection in which the observational period is divided into intervals and the target behavior is recorded if it occurs for the full duration.",
		category: "Measurement",
	},
	{
		term: "Yoking",
		definition:
			'Procedure in which the behavior and behavioral consequences of one organism (the "master" subject) determine some aspect of the behavior-consequence relations.',
		category: "Procedures & Methods",
	},
];
