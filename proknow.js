/* =========================
   ProKnow
   - Score tracking (overall + per-chapter) via localStorage
   - Timed quizzes (countdown per question)
   - Questions are stored in code: edit DEFAULT_TOPICS below.
   ========================= */

const DEFAULT_TOPICS = [
  {
    id: "navy-personnel",
    title: "US Navy Personnel",
   
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
      // Paste questions here in this format:
      // {
      //   q: "Question text",
      //   choices: ["A", "B", "C", "D"],
      //   correctIndex: 0 // 0=A,1=B,2=C,3=D
      // },
    ],
  },

  {
    id: "navy-organization",
    title: "US Navy Organization",
    
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
      // Paste questions here in this format:
      // {
      //   q: "Question text",
      //   choices: ["A", "B", "C", "D"],
      //   correctIndex: 0 // 0=A,1=B,2=C,3=D
      // },
    ],
  },

  {
    id: "surface-warfare",
    title: "Surface Warfare",
    
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
      // Paste questions here in this format:
      // {
      //   q: "Question text",
      //   choices: ["A", "B", "C", "D"],
      //   correctIndex: 0 // 0=A,1=B,2=C,3=D
      // },
    ],
  },

  {
    id: "submarine-warfare",
    title: "Submarine Warfare",
    
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
      // Paste questions here in this format:
      // {
      //   q: "Question text",
      //   choices: ["A", "B", "C", "D"],
      //   correctIndex: 0 // 0=A,1=B,2=C,3=D
      // },
    ],
  },

  {
    id: "aviation",
    title: "Aviation",
    
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
      // Paste questions here in this format:
      // {
      //   q: "Question text",
      //   choices: ["A", "B", "C", "D"],
      //   correctIndex: 0 // 0=A,1=B,2=C,3=D
      // },
    ],
  },

  {
    id: "marine-corps",
    title: "Marine Corps",
    
    practiceLinks: [
      // {'label': 'Practice Test', 'url': 'https://...'}
    ],
    questions: [
  {"q": "The U.S. Marine Corps is a direct descendent of which organization founded in 1664?", "choices": ["French Foreign Legion", "British Royal Marines", "Continental Navy", "Spanish Infantry"], "correctIndex": 1},
  {"q": "What date marks the birth of the United States Marine Corps?", "choices": ["October 13, 1775", "November 10, 1775", "July 4, 1776", "July 11, 1798"], "correctIndex": 1},
  {"q": "Who was the first commissioned officer in the Continental Marines and is considered the first Commandant?", "choices": ["Archibald Henderson", "Samuel Nicholas", "Presley O’Bannon", "Alfred Cunningham"], "correctIndex": 1},
  {"q": "Where did the Marines conduct their first amphibious raid in March 1776?", "choices": ["Tripoli", "Mexico City", "The Bahamas", "Guadalcanal"], "correctIndex": 2},
  {"q": "On what date was the Marine Corps formally re-established as a permanent service?", "choices": ["November 10, 1775", "July 11, 1798", "March 3, 1815", "August 25, 1861"], "correctIndex": 1},
  {"q": "Which Marine tradition enabled sharpshooters in ship riggings to distinguish friend from foe?", "choices": ["The Blood Stripe", "The Mameluke Sword", "The Quatrefoil", "The Leatherneck Collar"], "correctIndex": 2},
  {"q": "The Quatrefoil is currently worn on which part of the Marine officer's uniform?", "choices": ["The sleeve", "The shoulder board", "Top of the barracks cover", "The utility cap"], "correctIndex": 2},
  {"q": "The nickname 'Leatherneck' refers to a leather collar worn from 1775 to 1875 to protect against what?", "choices": ["Musket fire", "Sunburn", "Sword slashes", "Chafing"], "correctIndex": 2},
  {"q": "Who was the first Marine to rise to the rank of Sergeant Major in 1798?", "choices": ["Wilbur Bestwick", "Archibald Sommers", "Samuel Nicholas", "John Quick"], "correctIndex": 1},
  {"q": "In which year was the billet of Sergeant Major of the Marine Corps (SMMC) established?", "choices": ["1798", "1868", "1912", "1957"], "correctIndex": 3},
  {"q": "Who was the first Sergeant Major of the Marine Corps?", "choices": ["Archibald Sommers", "Wilbur Bestwick", "Dan Daly", "Pappy Boyington"], "correctIndex": 1},
  {"q": "Which organization is known as 'The President's Own'?", "choices": ["The Silent Drill Platoon", "The Marine Corps Band", "The Marine Raider Regiment", "The Chemical Biological Incident Response Force"], "correctIndex": 1},
  {"q": "The Mameluke Sword was presented to 1stLt Presley O'Bannon by the Ruler of which region?", "choices": ["Egypt", "Morocco", "Tripoli", "Tunisia"], "correctIndex": 2},
  {"q": "Which weapon is the oldest weapon still in use by any of the U.S. Armed Forces?", "choices": ["The NCO Sword", "The Mameluke Sword", "The 1911 Pistol", "The KA-BAR Knife"], "correctIndex": 1},
  {"q": "What event does the scarlet 'Blood Stripe' on Marine trousers commemorate?", "choices": ["The founding in Tun Tavern", "The seizure of the Bahamas", "Casualties at the Battle of Chapultepec", "The defense of Henderson Hall"], "correctIndex": 2},
  {"q": "Who is known as the 'Grand Old Man of the Marine Corps'?", "choices": ["Samuel Nicholas", "Archibald Henderson", "Chesty Puller", "John Lejeune"], "correctIndex": 1},
  {"q": "For how many years did Archibald Henderson serve as Commandant of the Marine Corps?", "choices": ["20 years", "25 years", "32 years", "38 years"], "correctIndex": 3},
  {"q": "Who is considered the 'Father of Marine Corps Aviation'?", "choices": ["Eugene Ely", "Theodore Ellyson", "Alfred A. Cunningham", "Gregory Boyington"], "correctIndex": 2},
  {"q": "In which year did the development of Marine aviation begin?", "choices": ["1775", "1898", "1912", "1922"], "correctIndex": 2},
  {"q": "In the Marine Corps Emblem, what does the Eagle represent?", "choices": ["Naval traditions", "Worldwide service", "The Nation", "Air power"], "correctIndex": 2},
  {"q": "In the Marine Corps Emblem, what does the Globe represent?", "choices": ["Naval traditions", "Worldwide service", "The Nation", "Amphibious warfare"], "correctIndex": 1},
  {"q": "In the Marine Corps Emblem, what does the Anchor represent?", "choices": ["Naval traditions", "Worldwide service", "The Nation", "Strength"], "correctIndex": 0},
  {"q": "What is the primary foundation of a Marine's conduct, according to the Ethos?", "choices": ["Loyalty", "Integrity", "Selflessness", "Courage"], "correctIndex": 1},
  {"q": "Which core value is defined as the spirit of determination and dedication to Corps and country?", "choices": ["Honor", "Courage", "Commitment", "Integrity"], "correctIndex": 2},
  {"q": "Which core value guides Marines to never lie, cheat, or steal and respect human dignity?", "choices": ["Honor", "Courage", "Commitment", "Bravery"], "correctIndex": 0},
  {"q": "Which core value is the mental, moral, and physical strength ingrained in Marines?", "choices": ["Honor", "Courage", "Commitment", "Discipline"], "correctIndex": 1},
  {"q": "The informal Marine Corps mission is to 'Make Marines, Win Battles, and ______.'", "choices": ["Defend the Seas", "Defeat the Enemy", "Return Quality Citizens", "Build the Future"], "correctIndex": 2},
  {"q": "According to the Commandant's Planning Guidance, what is the number one priority?", "choices": ["Manpower reform", "Training and Education", "Force Design", "Warfighting"], "correctIndex": 2},
  {"q": "What is described as the most important aspect of the Force Design restructure?", "choices": ["Phasing out tanks", "Closer naval integration", "Increased UAS funding", "Manpower model changes"], "correctIndex": 1},
  {"q": "The new USMC manpower model values which of the following over time and experience?", "choices": ["Rank and seniority", "Talent and performance", "Physical fitness", "Specialized MOS"], "correctIndex": 1},
  {"q": "What does EABO stand for in current Marine Corps strategy?", "choices": ["Extended Area Base Operations", "Expeditionary Advanced Base Operations", "Electronic Attack Battle Organization", "Emergency Amphibious Beach Operations"], "correctIndex": 1},
  {"q": "The essence of war is a violent struggle between two hostile, independent, and ______ wills.", "choices": ["Irreconcilable", "Predictable", "Weak", "Equal"], "correctIndex": 0},
  {"q": "Which of the following are essential principles of war, according to the text?", "choices": ["Peace and Stability", "Friction and Uncertainty", "Logistics and Supply", "Command and Control"], "correctIndex": 1},
  {"q": "What is the goal of Maneuver Warfare?", "choices": ["Destroy every enemy soldier", "Shatter the enemy's cohesion", "Wait for the enemy to attack", "Conduct static defense"], "correctIndex": 1},
  {"q": "Which dimension of maneuver involves generating a faster operating tempo than the enemy?", "choices": ["Spatial", "Psychological", "Technological", "Temporal"], "correctIndex": 3},
  {"q": "Maneuver warfare is a warfighting ______.", "choices": ["Tactic", "Policy", "Philosophy", "Regulation"], "correctIndex": 2},
  {"q": "Congress prescribes that the Marine Corps includes not less than how many combat divisions?", "choices": ["One", "Two", "Three", "Four"], "correctIndex": 2},
  {"q": "Congress prescribes that the Marine Corps includes not less than how many air wings?", "choices": ["One", "Two", "Three", "Four"], "correctIndex": 2},
  {"q": "Which war featured the Marines fighting all the way to the 'Halls of Montezuma'?", "choices": ["The War of 1812", "The Mexican War", "The Civil War", "The Spanish-American War"], "correctIndex": 1},
  {"q": "During World War I, in which battle did the 4th Marine Brigade earn the title 'Devil Dogs'?", "choices": ["Battle of Iwo Jima", "Battle of the Somme", "Battle of Belleau Wood", "Battle of the Bulge"], "correctIndex": 2},
  {"q": "What was the peak strength of the Marine Corps during World War II?", "choices": ["85,000", "150,000", "485,113", "1,000,000"], "correctIndex": 2},
  {"q": "How many Marines earned the Medal of Honor during World War II?", "choices": ["13", "52", "82", "113"], "correctIndex": 2},
  {"q": "What major amphibious landing occurred in September 1950 during the Korean War?", "choices": ["Pusan Perimeter", "Inchon", "Tarawa", "Peleliu"], "correctIndex": 1},
  {"q": "Which operation in 1989 was launched in Panama to protect American lives and restore democracy?", "choices": ["Operation Desert Storm", "Operation Just Cause", "Operation Restore Hope", "Operation Urgent Fury"], "correctIndex": 1},
  {"q": "The main attack of Operation Desert Storm began on which date in 1991?", "choices": ["January 16", "February 24", "February 28", "March 3"], "correctIndex": 1},
  {"q": "Which Marine Expeditionary Force (MEF) was the first conventional ground unit to enter Iraq in 2003?", "choices": ["I MEF", "II MEF", "III MEF", "V MEF"], "correctIndex": 0},
  {"q": "What does MAGTF stand for?", "choices": ["Marine Air-Ground Task Force", "Mobile Amphibious Ground Team Force", "Maritime Aviation Ground Tactical Force", "Marine Allied General Task Force"], "correctIndex": 0},
  {"q": "Which MAGTF element is responsible for asserting combat power on the ground?", "choices": ["Command Element (CE)", "Logistics Combat Element (LCE)", "Aviation Combat Element (ACE)", "Ground Combat Element (GCE)"], "correctIndex": 3},
  {"q": "Which MAGTF element provides all necessary combat service support?", "choices": ["Ground Combat Element", "Aviation Combat Element", "Logistics Combat Element", "Command Element"], "correctIndex": 2},
  {"q": "Which MAGTF element contains the headquarters unit and plans for manpower and intelligence?", "choices": ["Ground Combat Element", "Aviation Combat Element", "Logistics Combat Element", "Command Element"], "correctIndex": 3},
  {"q": "Which is the largest principal warfighting element of the Marine Corps?", "choices": ["MEU", "MEB", "MEF", "SPMAGTF"], "correctIndex": 2},
  {"q": "A Marine Expeditionary Force (MEF) is usually commanded by a officer of what rank?", "choices": ["Major General", "Lieutenant General", "Brigadier General", "Colonel"], "correctIndex": 1},
  {"q": "Which MAGTF structure is typically 'stood up' for specific theaters or engagements?", "choices": ["MEF", "MEB", "MEU", "MLR"], "correctIndex": 1},
  {"q": "Which MAGTF is described as the nation's self-contained, forward-deployed response force?", "choices": ["MEF", "MEB", "MEU", "SPMAGTF"], "correctIndex": 2},
  {"q": "A Marine Expeditionary Unit (MEU) is able to plan and launch a mission within how many hours?", "choices": ["2 hours", "6 hours", "12 hours", "24 hours"], "correctIndex": 1},
  {"q": "What type of MAGTF is formed to conduct a specific mission limited in scope and duration?", "choices": ["MEF", "MEB", "SPMAGTF", "MLR"], "correctIndex": 2},
  {"q": "The Marine Littoral Regiment (MLR) is optimized for which layers of the global operating model?", "choices": ["Deep strike and extraction", "Contact and blunt layers", "Rear area security", "Garrison support"], "correctIndex": 1},
  {"q": "Marine Special Operations Command (MARSOC) was renamed what on June 19, 2015?", "choices": ["Special Service Unit", "Marine Raider Regiment", "Amphibious Roger", "NCDU"], "correctIndex": 1},
  {"q": "What is the MOS code for a Manpower Officer?", "choices": ["0102", "0302", "0402", "0602"], "correctIndex": 0},
  {"q": "Which MOS is primarily responsible for tactical planning of ground surveillance units?", "choices": ["0203 Ground Intelligence", "0204 Human Source Intelligence", "0206 Signals Intelligence", "0207 Air Intelligence"], "correctIndex": 0},
  {"q": "Which MOS serves as the intelligence functional experts at all command levels of the Marine Air Wing?", "choices": ["0203", "0204", "0206", "0207"], "correctIndex": 3},
  {"q": "What is the MOS code for an Infantry Officer?", "choices": ["0302", "0402", "0102", "0802"], "correctIndex": 0},
  {"q": "Which officer MOS coordinates the movement of Marines and equipment from ship to shore?", "choices": ["0302 Infantry", "0402 Logistics", "0602 Communications", "1302 Combat Engineer"], "correctIndex": 1},
  {"q": "What is the MOS code for a Communications Officer?", "choices": ["0402", "0602", "0802", "1302"], "correctIndex": 1},
  {"q": "What is the MOS code for a Combat Engineer Officer?", "choices": ["1302", "1702", "1803", "3002"], "correctIndex": 0},
  {"q": "Which MOS conducts offensive and defensive cyber warfare at tactical and strategic levels?", "choices": ["0602", "1702 Cyberspace Officer", "1705", "1706"], "correctIndex": 1},
  {"q": "What is the MOS code for a Maritime Space Officer?", "choices": ["1702", "1705", "1706", "1707"], "correctIndex": 2},
  {"q": "Which MOS focuses on integrated Influence Operations including MISO and CAO?", "choices": ["1702", "1705", "1706", "1707 Influence Officer"], "correctIndex": 3},
  {"q": "Which MOS leads the tactical employment of Amphibious Combat Vehicles (ACVs)?", "choices": ["0302", "0802", "1302", "1803 Amphibious Assault Officer"], "correctIndex": 3},
  {"q": "What is the MOS code for a Ground Supply Officer?", "choices": ["3002", "3404", "4402", "4502"], "correctIndex": 0},
  {"q": "Which staff officer supervises the Commanders’ Property, Plant, & Equipment (PP&E)?", "choices": ["Logistics Officer", "Financial Management Officer", "Ground Supply Officer", "Aircraft Maintenance Officer"], "correctIndex": 2},
  {"q": "What is the MOS code for a Financial Management Officer?", "choices": ["3002", "3404", "4402", "4502"], "correctIndex": 1},
  {"q": "What is the MOS code for a Judge Advocate?", "choices": ["3404", "4402", "4502", "5803"], "correctIndex": 1},
  {"q": "Which MOS is responsible for identifying risks to the Marine Corps’ reputation?", "choices": ["Influence Officer", "Communications Officer", "Communication Strategy and Operations Officer", "Military Police Officer"], "correctIndex": 2},
  {"q": "What is the MOS code for a Military Police Officer?", "choices": ["4502", "5803", "6002", "6602"], "correctIndex": 1},
  {"q": "What is the MOS code for an Aircraft Maintenance Officer?", "choices": ["6002", "6602", "7204", "7599"], "correctIndex": 0},
  {"q": "Which MOS makes critical decisions concerning budget and inventory at a Marine Aviation Logistics Squadron (MALS)?", "choices": ["6002", "6602 Aviation Supply Officer", "7204", "7210"], "correctIndex": 1},
  {"q": "Which MOS works in the TAOC directing aircraft and surface-to-air missile assets?", "choices": ["7204 Low Altitude Air Defense", "7208 Air Support Control", "7210 Air Defense Control", "7220 Air Traffic Control"], "correctIndex": 2},
  {"q": "Which MOS normally works in the Direct Air Support Center (DASC) co-located with the GCE?", "choices": ["7204", "7208 Air Support Control", "7210", "7220"], "correctIndex": 1},
  {"q": "What is the MOS code for a Flight Student (TBS)?", "choices": ["7220", "7315", "7599", "6002"], "correctIndex": 2},
  {"q": "The mission of The Basic School (TBS) is to prepare officers for duty as what?", "choices": ["Company staff officers", "Rifle platoon commanders", "MAGTF commanders", "Aviation pilots"], "correctIndex": 1},
  {"q": "TBS uses a policy to ensure every field receives a fair share of competitive lieutenants. What is it called?", "choices": ["Merit distribution", "Quality Spread", "Balanced accession", "Talent management"], "correctIndex": 1},
  {"q": "Which TBS phase covers Rifle and Pistol Qualification and Land Navigation?", "choices": ["Phase I Individual Skills", "Phase II Rifle Squad Leader", "Phase III Rifle Platoon Leader", "Phase IV Basic MAGTF Officer"], "correctIndex": 0},
  {"q": "Which aircraft is known as the 'Viper' or 'Super Cobra'?", "choices": ["UH-1Y", "CH-53E", "AH-1Z", "F-35B"], "correctIndex": 2},
  {"q": "Which aircraft has been called 'flying artillery'?", "choices": ["F/A-18", "AH-1Z", "KC-130J", "MQ-9A"], "correctIndex": 1},
  {"q": "Which helicopter is described as a 'microcosm of Marine Aviation' because it blends all six functions?", "choices": ["AH-1Z", "UH-1Y Venom", "CH-53E", "MV-22"], "correctIndex": 1},
  {"q": "The UH-1Y Venom features a what percent increase in range and speed over the UH-1N?", "choices": ["25%", "50%", "100%", "125%"], "correctIndex": 1},
  {"q": "Which helicopter is the heavy-lift helicopter of the Marine Corps?", "choices": ["UH-1Y", "CH-53E Super Stallion", "MH-60S", "MV-22"], "correctIndex": 1},
  {"q": "The CH-53E is powerful enough to lift every aircraft in the Marine inventory EXCEPT which one?", "choices": ["F/A-18", "MV-22", "KC-130", "AH-1Z"], "correctIndex": 2},
  {"q": "What is the planned replacement for the aging CH-53E?", "choices": ["CH-53F", "CH-53K King Stallion", "CH-54 Skycrane", "MV-22B"], "correctIndex": 1},
  {"q": "The CH-53K is designed to provide how many times the lift capability of the CH-53E?", "choices": ["Two times", "Three times", "Four times", "Five times"], "correctIndex": 1},
  {"q": "The MV-22 Osprey can carry how many combat-loaded Marines?", "choices": ["12", "18", "24", "36"], "correctIndex": 2},
  {"q": "Which aircraft is the replacement for the aging F/A-18A/C?", "choices": ["F/A-18E Super Hornet", "F-22 Raptor", "F-35B Lightning II", "AV-8B Harrier"], "correctIndex": 2},
  {"q": "What unique capability does the Marine F-35B variant possess?", "choices": ["Supersonic cruise", "Stealth coating", "V/STOL", "Carrier catapult capability"], "correctIndex": 2},
  {"q": "Which aircraft is called the 'workhorse' of Marine Aviation?", "choices": ["MV-22 Osprey", "CH-53E Super Stallion", "KC-130J Hercules", "F/A-18 Hornet"], "correctIndex": 2},
  {"q": "How many gallons of fuel can the KC-130 carry?", "choices": ["6,000", "8,000", "12,000", "25,000"], "correctIndex": 2},
  {"q": "The KC-130 can simultaneously refuel two aircraft at what rate?", "choices": ["100 gallons/min", "300 gallons/min", "500 gallons/min", "1,000 gallons/min"], "correctIndex": 1},
  {"q": "What is the primary mission of the MQ-9A Reaper?", "choices": ["Assault support", "ISR (Intelligence, Surveillance, and Reconnaissance)", "Air-to-air combat", "Cargo transport"], "correctIndex": 1},
  {"q": "Which UAS is a hand-launched system for battalion-and-below maneuver elements?", "choices": ["MQ-9A Reaper", "RQ-20 Puma", "Skyraider", "MQ-4C Triton"], "correctIndex": 1},
  {"q": "The RQ-20 Puma sensor simultaneously provides EO, IR, and what other capability?", "choices": ["Radar jamming", "Datalink relay", "Illuminator capabilities", "Sonobuoy deployment"], "correctIndex": 2},
  {"q": "What is the listed maximum range of the Skyraider UAS?", "choices": ["3km", "8km", "15km", "50km"], "correctIndex": 1},
  {"q": "Which Marine jet is described as the 'calling card' of Marine Aviation for Close Air Support?", "choices": ["F-35B", "AV-8B", "F/A-18 Hornet", "EA-6B"], "correctIndex": 2},
  {"q": "The AH-1Z Viper rotor blades are made of composite materials that can withstand fire from what size cannon?", "choices": ["7.62mm", ".50 cal", "20mm", "23mm"], "correctIndex": 3},
  {"q": "What is the caliber of the gun mounted in the nose of the F/A-18 Hornet?", "choices": ["20mm (6-barrel)", "25mm", "30mm", "40mm"], "correctIndex": 0},
  {"q": "What is the troop capacity of the CH-53E for a humanitarian operation (combat loaded)?", "choices": ["24", "37", "55", "70"], "correctIndex": 1},
  {"q": "A commander needs an officer to integration space capabilities of allies into plans. Which MOS fits?", "choices": ["1702", "1705", "1706 Maritime Space Officer", "1707"], "correctIndex": 2},
  {"q": "Which MOS manages the cyber warfare development lifecycle?", "choices": ["1702", "1705 Cyberspace Warfare Development", "1706", "1707"], "correctIndex": 1},
  {"q": "A commander needs an officer to provide law enforcement support. Which MOS fits?", "choices": ["1803", "3002", "4402", "5803 Military Police"], "correctIndex": 3},
  {"q": "Which MOS is the intelligence functional expert in the Marine Air Wing?", "choices": ["0203", "0206", "0207 Air Intelligence", "0302"], "correctIndex": 2},
  {"q": "Which MAGTF typically has a permanent structure?", "choices": ["MEB", "MEU", "MEF", "SPMAGTF"], "correctIndex": 2},
  {"q": "The Marine Raider Regiment was established on which date?", "choices": ["Feb 24, 2006", "June 19, 2015", "Nov 10, 1775", "Dec 7, 1941"], "correctIndex": 0},
  {"q": "In Maneuver Warfare, what is the 'essence' of maneuver?", "choices": ["Moving faster than the enemy", "Taking action to generate and exploit an advantage", "Attacking the enemy's front line", "Using superior technology"], "correctIndex": 1},
  {"q": "Which core value carries Marines through the challenges of combat and aids in overcoming fear?", "choices": ["Honor", "Courage", "Commitment", "Integrity"], "correctIndex": 1},
  {"q": "The first Marine Commandant, Samuel Nicholas, held what final rank?", "choices": ["Captain", "Major", "Colonel", "Brigadier General"], "correctIndex": 1},
  {"q": "Which battle is the source of the term 'Devil Dogs'?", "choices": ["Chapultepec", "Guadalcanal", "Belleau Wood", "Chosin Reservoir"], "correctIndex": 2},
  {"q": "The Marine Corps strength peaked at 485,113 during which war?", "choices": ["WWI", "WWII", "Korean War", "Vietnam War"], "correctIndex": 1},
  {"q": "In which war were the last Marine ground troops withdrawn in June 1971?", "choices": ["Korean War", "Vietnam War", "Operation Desert Storm", "OIF"], "correctIndex": 1},
  {"q": "Which aircraft is a tiltrotor that can fly like a turboprop and maneuver like a helicopter?", "choices": ["UH-1Y", "CH-53E", "MV-22 Osprey", "AH-1Z"], "correctIndex": 2},
  {"q": "Which aircraft is equipped with an in-flight refueling probe for 'limitless range'?", "choices": ["AH-1Z", "CH-53E", "F/A-18", "UH-1Y"], "correctIndex": 1},
  {"q": "Which UAS is described as suitable for clandestine operations and BLOS reconnaissance?", "choices": ["RQ-20 Puma", "MQ-9A Reaper", "Skyraider", "ScanEagle"], "correctIndex": 2},
  {"q": "What is the flight time listed for the Skyraider UAS?", "choices": ["30 minutes", "50 minutes", "90 minutes", "120 minutes"], "correctIndex": 1},
  {"q": "The F-35B is the replacement for which aging aircraft?", "choices": ["F-14 Tomcat", "A-10 Thunderbolt", "F/A-18A/C", "AV-8B Harrier"], "correctIndex": 2},
  {"q": "Which aircraft can resupply austere battle zones and provide a Direct Air Support Center?", "choices": ["MV-22", "CH-53E", "KC-130J", "UH-1Y"], "correctIndex": 2},
  {"q": "The MQ-9A Reaper posing no risk to the pilot or crew is used for which primary mission?", "choices": ["Cargo transport", "Assault support", "ISR", "Nuclear deterrence"], "correctIndex": 2},
  {"q": "Which MAGTF element includes infantry, artillery, and armor?", "choices": ["CE", "ACE", "GCE", "LCE"], "correctIndex": 2},
  {"q": "Which type of MAGTF varies in size and composition depending on the needs of the mission?", "choices": ["MEF", "MEB", "MEU", "SPMAGTF"], "correctIndex": 0},
  {"q": "The MLR focuses on deterrence through what concept?", "choices": ["Massive retaliation", "Sea denial", "Nuclear triad", "Garrison presence"], "correctIndex": 1},
  {"q": "Which MOS is the backbone for command and control of operating forces?", "choices": ["0302", "0402", "0602 Communications Officer", "0802"], "correctIndex": 2},
  {"q": "Which MOS is responsible for training Marines for every variety of ground combat mission?", "choices": ["0302 Infantry Officer", "1302", "1803", "5803"], "correctIndex": 0},
  {"q": "Which MOS leads tactical planning and employment of ground surveillance units?", "choices": ["0203 Ground Intelligence", "0204", "0206", "0207"], "correctIndex": 0},
  {"q": "What is the MOS code for an Influence Officer?", "choices": ["1702", "1705", "1706", "1707"], "correctIndex": 3},
  {"q": "Which MOS coordinates tactical employment of LAAD units?", "choices": ["7204 Low Altitude Air Defense", "7208", "7210", "7220"], "correctIndex": 0},
  {"q": "Which MOS operates as a watch commander at an expeditionary ATC detachment?", "choices": ["7204", "7208", "7210", "7220 Air Traffic Control"], "correctIndex": 3},
  {"q": "What is the MOS code for a UAS/MAGTF Electronic Warfare Officer?", "choices": ["7210", "7315", "7599", "0206"], "correctIndex": 1},
  {"q": "Which official title was given to the Marine Band by Thomas Jefferson?", "choices": ["The Commandant's Own", "The President's Own", "The Nation's Pride", "The Leatherneck Band"], "correctIndex": 1},
  {"q": "Which battle during the Mexican War involved 90% casualties for Marine officers and NCOs?", "choices": ["Veracruz", "Chapultepec", "Puebla", "Halls of Montezuma"], "correctIndex": 1},
  {"q": "In which war did the 1st and 2nd Marine Divisions breach Iraqi defense lines in 100 hours?", "choices": ["Vietnam War", "Korean War", "Operation Desert Storm", "OIF"], "correctIndex": 2},
  {"q": "Which aviation platform offers about a 125% boost in payload over the UH-1N?", "choices": ["CH-53E", "UH-1Y Venom", "MV-22", "AH-1Z"], "correctIndex": 1},
  {"q": "Which aircraft is described as the 'perfect example' of why Marine Aviation is called 'flying artillery'?", "choices": ["F/A-18", "F-35B", "AH-1Z Viper", "KC-130J"], "correctIndex": 2},
  {"q": "What is the range listed for the RQ-20 Puma UAS?", "choices": ["5km", "15km", "50km", "100km"], "correctIndex": 1},
  {"q": "Which aircraft is a tactical tanker/transport and stretches more than 90 feet in length?", "choices": ["F/A-18", "MV-22", "KC-130J Hercules", "CH-53E"], "correctIndex": 2},
  {"q": "Which MOS code corresponds to an Aviation Supply Officer?", "choices": ["6002", "6602", "7204", "7599"], "correctIndex": 1},
  {"q": "Which core value is defined as the ingrediant that enables constant dedication to Corps and country?", "choices": ["Honor", "Courage", "Commitment", "Integrity"], "correctIndex": 2},
  {"q": "What is the name of the Cross-shaped braid worn on top of the officer's barracks cover?", "choices": ["Blood Stripe", "Quatrefoil", "Mameluke", "Leatherneck"], "correctIndex": 1},
  {"q": "Which is the smallest element listed in the MAGTF types section?", "choices": ["MEF", "MEB", "MEU", "SPMAGTF (often MEU size or smaller)"], "correctIndex": 3},
  {"q": "The MLR formation was designed with which region in mind?", "choices": ["Middle East", "Eastern Europe", "Indo-Pacific", "Arctic"], "correctIndex": 2},
  {"q": "In which year did the Marine Corps adopt its emblem?", "choices": ["1775", "1798", "1868", "1912"], "correctIndex": 2},
  {"q": "Which term describes the Marines' role as the Nation’s ready-to-deploy force?", "choices": ["Expeditionary Core", "Force-in-Readiness", "Littoral Vanguard", "Stand-in Force"], "correctIndex": 1},
  {"q": "A commander needs a principal advisor on manpower staffing. Which MOS best fits?", "choices": ["0102 Manpower Officer", "0402", "3002", "3404"], "correctIndex": 0},
  {"q": "Which MOS is responsible for tactical planning of ground surveillance units?", "choices": ["0203 Ground Intelligence Officer", "0204", "0206", "0207"], "correctIndex": 0},
  {"q": "Which MOS is the 'backbone' for command and control?", "choices": ["0302", "0402", "0602 Communications Officer", "1302"], "correctIndex": 2},
  {"q": "Which aviation platform is the 'heavy-lift' workhorse often used for long-range insertion?", "choices": ["AH-1Z", "UH-1Y", "CH-53E Super Stallion", "MV-22"], "correctIndex": 2},
  {"q": "Which aviation platform allows a Marine commander operational reach turning 'the size of Texas into Rhode Island'?", "choices": ["F/A-18", "KC-130", "MV-22 Osprey", "F-35B"], "correctIndex": 2},
  {"q": "The MQ-9A Reaper sensor suite includes which of the following?", "choices": ["Dipping sonar", "Magnetic anomaly detector", "Multi-Spectral Targeting System", "Ground-looking radar only"], "correctIndex": 2},
  {"q": "Which MAGTF is described as having a 'permanent structure'?", "choices": ["MEB", "MEU", "MEF", "SPMAGTF"], "correctIndex": 2},
  {"q": "Which Commandant was known for creating Force Design 2030 (as mentioned in modern guidance)?", "choices": ["John Lejeune", "Archibald Henderson", "The text refers to the 'current' Planning Guidance", "Samuel Nicholas"], "correctIndex": 2},
  {"q": "In the context of TBS, what are students called while awaiting flight training?", "choices": ["Air Intelligence", "Air Traffic Control", "Flight Students (7599)", "Aviation Supply"], "correctIndex": 2}
],
  },

  {
    id: "seal-eod",
    title: "SEAL/EOD",
   
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
     questions: [
    // --- 4/C LO 1: Historical Reasons for Creation ---
    {"q": "What historical event led to the creation of the Navy Underwater Demolition Teams (UDTs)?", "choices": ["The attack on Pearl Harbor", "The challenges faced during the amphibious landing on Tarawa", "The invasion of Normandy", "The sinking of the USS Housatonic"], "correctIndex": 1},
    {"q": "The Naval Combat Demolition Units (NCDUs) were created specifically for operations in which theater during WWII?", "choices": ["Pacific Theater", "European Theater", "North African Theater", "Mediterranean Theater"], "correctIndex": 1},
    {"q": "In 1961, which CNO stressed the need for a naval unit with unconventional warfare capabilities, leading to the SEALs?", "choices": ["ADM Chester Nimitz", "ADM Arleigh Burke", "ADM Hyman Rickover", "ADM Elmo Zumwalt"], "correctIndex": 1},
    {"q": "Which president officially established SEAL Teams ONE and TWO in 1962?", "choices": ["Franklin D. Roosevelt", "Harry S. Truman", "John F. Kennedy", "Lyndon B. Johnson"], "correctIndex": 2},
    {"q": "The original NCDU volunteers were primarily acquired from which Navy community?", "choices": ["Aviation", "Submarine Force", "Construction Battalion (Seabees)", "Surface Warfare"], "correctIndex": 2},
    {"q": "The 'Operational Swimmers' of which WWII organization were early predecessors to the SEALs?", "choices": ["Office of Strategic Services (OSS)", "Special Air Service (SAS)", "Coast Guard Intelligence", "Army Rangers"], "correctIndex": 0},
    {"q": "Which unit pioneered the first UDT submarine operation in the Caroline Islands in August 1944?", "choices": ["NCDUs", "OSS Maritime Unit", "Scouts and Raiders", "Special Boat Teams"], "correctIndex": 1},
    {"q": "What was the casualty rate for NCDUs during the invasion of Normandy?", "choices": ["15 percent", "30 percent", "52 percent", "75 percent"], "correctIndex": 2},
    {"q": "Which group was tasked in 1942 to identify objective beaches and guide assault waves during landings?", "choices": ["UDTs", "Scouts and Raiders", "NCDUs", "SEAL Team ONE"], "correctIndex": 1},
    {"q": "UDTs were reactivated and expanded specifically for which 1950s conflict?", "choices": ["WWII", "Korean War", "Vietnam War", "Operation Desert Storm"], "correctIndex": 1},

    // --- 4/C LO 2: LCDR Draper Kauffman ---
    {"q": "Who is considered the 'Father of Naval Combat Demolition'?", "choices": ["Phil H. Bucklew", "Draper L. Kauffman", "Michael Murphy", "Samuel Nicholas"], "correctIndex": 1},
    {"q": "LCDR Draper Kauffman established the NCDU Training School in which location?", "choices": ["Coronado, CA", "Little Creek, VA", "Fort Pierce, FL", "Maui, HI"], "correctIndex": 2},
    {"q": "Draper Kauffman's NCDU training model was largely based on which foreign model?", "choices": ["French Foreign Legion", "British Bomb Disposal", "German Sapper", "Japanese Special Naval Landing Force"], "correctIndex": 1},
    {"q": "True or False: LCDR Draper Kauffman also founded the first Bomb Disposal School in 1942.", "choices": ["True", "False"], "correctIndex": 0},
    {"q": "Who is the namesake of the Naval Special Warfare Center?", "choices": ["Draper Kauffman", "Phil H. Bucklew", "Michael Monsoor", "Samuel Nicholas"], "correctIndex": 1},

    // --- 4/C LO 3: Organization and Composition of SEAL Teams ---
    {"q": "How many platoons are typically found in a standard SEAL Team?", "choices": ["2", "4", "6", "8"], "correctIndex": 2},
    {"q": "A SEAL Team is typically comprised of how many 'Troops'?", "choices": ["Two", "Three", "Four", "Five"], "correctIndex": 1},
    {"q": "What is the first leadership assignment for a SEAL officer?", "choices": ["Troop Commander", "Squad Leader", "Task Unit Commander", "Executive Officer"], "correctIndex": 1},
    {"q": "A standard SEAL platoon is comprised of how many personnel?", "choices": ["8", "12", "16", "32"], "correctIndex": 2},
    {"q": "Approximately how many personnel make up a single SEAL Team, including support staff?", "choices": ["100", "200", "300", "500"], "correctIndex": 2},
    {"q": "Where is the headquarters for Naval Special Warfare Command (NAVSPECWARCOM)?", "choices": ["Little Creek, VA", "Coronado, CA", "Tampa, FL", "Pearl Harbor, HI"], "correctIndex": 1},
    {"q": "Which rank/billet commands NAVSPECWARCOM?", "choices": ["O-6 Captain", "One-star Rear Admiral", "Two-star Rear Admiral", "Three-star Vice Admiral"], "correctIndex": 2},
    {"q": "SEAL Teams ONE, THREE, FIVE, and SEVEN are under which NSW Group?", "choices": ["NSWG-1", "NSWG-2", "NSWG-4", "NSWG-8"], "correctIndex": 0},
    {"q": "SEAL Teams TWO, FOUR, EIGHT, and TEN are based in which location?", "choices": ["Coronado, CA", "Little Creek, VA", "Guam", "Pearl Harbor, HI"], "correctIndex": 1},
    {"q": "NSW constitutes approximately what percentage of the total Navy's forces?", "choices": ["Less than 2 percent", "5 percent", "11 percent", "15 percent"], "correctIndex": 0},

    // --- 4/C LO 4: Mission Sets, Capabilities, and Limitations ---
    {"q": "Which SEAL core task involves short-duration strikes to seize, destroy, or recover targets in denied areas?", "choices": ["Direct Action", "Special Reconnaissance", "Counterinsurgency", "Foreign Internal Defense"], "correctIndex": 0},
    {"q": "Operation NEPTUNE SPEAR is an example of which primary core task?", "choices": ["Foreign Internal Defense", "Special Reconnaissance", "Direct Action", "Unconventional Warfare"], "correctIndex": 2},
    {"q": "Acquiring information concerning the capabilities and intentions of an enemy is known as ______.", "choices": ["Direct Action", "Special Reconnaissance", "Information Operations", "Preparation of the Environment"], "correctIndex": 1},
    {"q": "What mission involves training the security forces of other nations for peacekeeping or border defense?", "choices": ["Direct Action", "Foreign Internal Defense", "Counterterrorism", "Unconventional Warfare"], "correctIndex": 1},
    {"q": "Village Stability Operations (VSO) in Afghanistan were primarily a component of which core task?", "choices": ["Direct Action", "Counterinsurgency", "Counterterrorism", "Security Force Assistance"], "correctIndex": 1},
    {"q": "Which limitation emphasizes that SEAL/SWCC operators cannot be replaced quickly nor expanded rapidly?", "choices": ["Conservation of Forces", "Sustained Engagement", "Timing", "Support"], "correctIndex": 0},
    {"q": "What is the primary constraint on NSW forces acting as a static defense force?", "choices": ["Lack of ammo", "Their small size", "Poor training", "Political restrictions"], "correctIndex": 1},
    {"q": "True or False: SEALs are a rapid-response force but preparation time varies with the assembly of support packages.", "choices": ["True", "False"], "correctIndex": 0},
    {"q": "Which core task involves actions to alter or shape the environment to create favorable conditions for military operations?", "choices": ["Direct Action", "Preparation of the Environment", "Special Reconnaissance", "Information Operations"], "correctIndex": 1},
    {"q": "Direct Action includes which specific activity?", "choices": ["Hydrographic reconnaissance", "Ambush", "Reforestation", "Currency stabilization"], "correctIndex": 1},

    // --- 4/C LO 5: Navy EOD Purpose and Mission Areas ---
    {"q": "What is the primary purpose of Navy EOD?", "choices": ["To conduct clandestine beach surveys", "To protect personnel/property and provide freedom of maneuver", "To pilot underwater vehicles", "To manage nuclear power plants"], "correctIndex": 1},
    {"q": "Which EOD mission area involves support to U.S. Secret Service for POTUS and foreign heads of state?", "choices": ["ExMCM", "SOF Support", "VIPPSA", "MDSU"], "correctIndex": 2},
    {"q": "EOD 'MOB Platoons' are standard operating forces that support which group?", "choices": ["Marine Corps only", "Carrier Strike Groups", "Medical units", "Supply depots"], "correctIndex": 1},
    {"q": "Which mission area tasks EOD with technical exploitation operations on recovered IEDs?", "choices": ["Expeditionary Mine Countermeasures", "Weapons Exploitation", "SOF Support", "Mobility"], "correctIndex": 1},
    {"q": "In Expeditionary Mine Countermeasures (ExMCM), EOD units use which type of vehicle?", "choices": ["LCAC", "Unmanned Underwater Vehicles (UUVs)", "M-ATV", "Luyang III"], "correctIndex": 1},
    {"q": "Which unit conducts salvage, recovery, and ship’s husbandry operations?", "choices": ["EOD Mobile Unit", "Mobile Diving and Salvage Unit (MDSU)", "SEAL Delivery Vehicle Team", "Special Boat Team"], "correctIndex": 1},
    {"q": "True or False: Navy EOD is the only Special Operations capable EOD force in the U.S. military.", "choices": ["True", "False"], "correctIndex": 0},
    {"q": "EOD Shore Detachments are geographically located to support which entities?", "choices": ["National parks", "Navy regional commanders", "Coast Guard stations", "University ROTC units"], "correctIndex": 1},
    {"q": "Which EOD mission area allows EOD technicians to participate in advanced training like Freefall parachuting?", "choices": ["Mobility", "SOF Support", "Weapons Exploitation", "Mine Countermeasures"], "correctIndex": 1},
    {"q": "How many types of hazards can Navy EOD render safe?", "choices": ["3", "4", "5", "6"], "correctIndex": 2},

    // --- 4/C LO 6: Ordnance Disposal Skills and Creation ---
    {"q": "What specific need during WWII drove the creation of the EOD community?", "choices": ["Need for faster ships", "Large quantities of dud-fired German and Japanese ordnance", "Need for more pilots", "Lack of medical doctors"], "correctIndex": 1},
    {"q": "In what year were the first two Navy EOD commands established?", "choices": ["1941", "1945", "1953", "1978"], "correctIndex": 2},
    {"q": "Which school was founded in May 1941 to address the threat of mines?", "choices": ["Bomb Disposal School", "Mine Disposal School", "BUD/S", "SOBC"], "correctIndex": 1},
    {"q": "The EOD community was officially organized as a warfare community in 1978. What was its initial name?", "choices": ["Nuclear Safety Community", "Special Operations Community", "Mine Countermeasure Community", "Demolition Group"], "correctIndex": 1},
    {"q": "Where do EOD technicians from all four services receive their primary training?", "choices": ["Coronado, CA", "Little Creek, VA", "Eglin AFB, FL", "Annapolis, MD"], "correctIndex": 2},

    // --- 4/C LO 7: EOD Organization and Symbolism ---
    {"q": "What is the common nickname for the EOD insignia?", "choices": ["The Dolphin", "The Trident", "The Crab", "The Frog"], "correctIndex": 2},
    {"q": "On the EOD badge, what does the Wreath symbolize?", "choices": ["Worldwide service", "Achievements through ingenuity and devotion", "Naval tradition", "The unexploded bomb"], "correctIndex": 1},
    {"q": "The three fins on the EOD bomb insignia represent which mission sets?", "choices": ["Air, Land, and Sea", "Nuclear, Conventional, and Chemical/Biological", "Intelligence, Logistics, and Combat", "Past, Present, and Future"], "correctIndex": 1},
    {"q": "What do the Lightning Bolts on the EOD badge represent?", "choices": ["Electronic warfare", "Potential destructive power of the bomb and EOD courage", "Speed of response", "Weather monitoring"], "correctIndex": 1},
    {"q": "On the EOD badge, what does the Shield represent?", "choices": ["National defense", "The mission to protect personnel and property", "Resistance to heat", "Armor plating"], "correctIndex": 1},
    {"q": "How many silver stars are on the Master EOD Technician badge?", "choices": ["One", "Two", "None (it features a star and wreath at the top)", "Three"], "correctIndex": 2},
    {"q": "What is the visual difference between the Master EOD Technician and the EOD Officer badge?", "choices": ["The Officer badge has an anchor", "The Officer badge is gold rather than silver/pewter", "The Officer badge has a different bomb", "There is no difference"], "correctIndex": 1},
    {"q": "Who is the Type Commander (TYCOM) for Navy EOD?", "choices": ["NAVSPECWARCOM", "CNO", "Naval Expeditionary Combat Command (NECC)", "PERS-41"], "correctIndex": 2},
    {"q": "Which EODGRU is located in Little Creek, VA?", "choices": ["EODGRU ONE", "EODGRU TWO", "EODGRU FOUR", "EODGRU FIVE"], "correctIndex": 1},
    {"q": "Each EOD platoon consists of one officer and how many enlisted EOD Technicians?", "choices": ["2 to 4", "3 to 11", "12 to 15", "Exactly 16"], "correctIndex": 1},
    
    // --- 4/C MQS Mixed Review/Advanced Detail ---
    {"q": "What is the first step for all midshipmen interested in the EOD community at USNA?", "choices": ["Summer Cruise", "Final Board", "EOD Screener", "Join the Diving Club"], "correctIndex": 2},
    {"q": "The EOD 10E bomb suit weighs over how many pounds?", "choices": ["45 lbs", "65 lbs", "85 lbs", "100 lbs"], "correctIndex": 2},
    {"q": "The Mk-16 Mod 1 rebreather allows EOD technicians to dive to what maximum depth?", "choices": ["100 feet", "200 feet", "300 feet", "500 feet"], "correctIndex": 2},
    {"q": "Which NSW craft is an electrically powered 'wet' vehicle carried in a submarine dry deck shelter?", "choices": ["CCA", "M-ATV", "Mark VIII SDV", "LT-ATV"], "correctIndex": 2},
    {"q": "SWCC operators are specially trained enlisted personnel who operate in which environment?", "choices": ["Deep ocean only", "Maritime, coastal, and riverine", "Garrison only", "High-altitude"], "correctIndex": 1},
    {"q": "What is the range of the Mark VIII SEAL Delivery Vehicle (SDV)?", "choices": ["10 miles", "30 miles", "70 miles", "150 miles"], "correctIndex": 2},
    {"q": "The M-ATV vehicle has an operational range of approximately how many miles?", "choices": ["100 miles", "250 miles", "320 miles", "500 miles"], "correctIndex": 2},
    {"q": "Which organization encompasses Navy Reserve SEALs and SWCC?", "choices": ["NSWG-1", "NSWG-4", "NSWG-11", "NSWG-CENTER"], "correctIndex": 2},
    {"q": "How long is the NAVSCOLEOD school for Navy personnel?", "choices": ["6 months", "9 months", "12 months", "18 months"], "correctIndex": 1},
    {"q": "EOD officer candidates attend Dive School for how many weeks?", "choices": ["9 weeks", "12 weeks", "21 weeks", "26 weeks"], "correctIndex": 2},
    {"q": "What does the acronym AFO stand for in the context of Preparation of the Environment?", "choices": ["Aerial Flight Operations", "Advance Force Operations", "Amphibious Frontal Onslaught", "Allies and Foreign Officers"], "correctIndex": 1},
    {"q": "The SEAL Ethos motto 'The Only Easy Day was Yesterday' is whose feared reputation?", "choices": ["The President's", "The Navy's", "The SEALs' team and heritage", "The Army's"], "correctIndex": 2}
    
   
  ],
  },

  {
    id: "china",
    title: "China",
   
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
    // --- 4/C LO 1: Global Expansion & Island Chains ---
    {"q": "Over the past two decades, what has been the status of China’s People’s Liberation Army (PLA)?", "choices": ["It has remained a large but antiquated force", "It has transformed into a capable, modern military", "It has decreased in size to focus on domestic issues", "It has abandoned its naval modernization efforts"], "correctIndex": 1},
    {"q": "According to the CRS report, how long has China’s naval modernization effort been underway?", "choices": ["Since 1949", "Since the early to mid-1990s", "Since 2013", "Since the start of the COVID-19 pandemic"], "correctIndex": 1},
    {"q": "What geographical advantage does China enjoy in most plausible conflict scenarios?", "choices": ["Abundant natural resources", "Vast mountain ranges", "Proximity", "Island fortresses"], "correctIndex": 2},
    {"q": "What is the primary goal of the Chinese Communist Party's (CCP) foreign policy regarding the Indo-Pacific?", "choices": ["To maintain U.S. presence", "To displace the U.S. and reorder the region in its favor", "To isolate itself from regional trade", "To promote democratic governance"], "correctIndex": 1},
    {"q": "The Belt and Road Initiative (BRI), announced in 2013, is also known as what?", "choices": ["The Great Wall Project", "The Silk Shield", "One Belt, One Road (OBOR)", "The Maritime Meridian"], "correctIndex": 2},
    {"q": "The BRI aims to promote the flow of which three things through investment projects?", "choices": ["Goods, investment, and people", "Information, military hardware, and food", "Culture, oil, and technology", "Labor, data, and weapons"], "correctIndex": 0},
    {"q": "As of 2023, approximately how many countries have signed on to BRI projects?", "choices": ["50", "90", "147", "195"], "correctIndex": 2},
    {"q": "What is the estimated cost range for completing the Belt and Road Initiative?", "choices": ["$100 billion to $500 billion", "$1 trillion to $8 trillion", "$10 trillion to $20 trillion", "$500 million to $1 billion"], "correctIndex": 1},
    {"q": "In 2017, China opened its first overseas naval base in which strategically important location?", "choices": ["Burma", "Pakistan", "Djibouti", "Cambodia"], "correctIndex": 2},
    {"q": "The naval base in Djibouti overlooks a chokepoint of a major what?", "choices": ["Fiber optic cable", "Mountain pass", "Sea line of communication (SLOC)", "Railway"], "correctIndex": 2},
    {"q": "China has successfully built and began use of a pier off of which Cambodian naval base?", "choices": ["Ream Naval Base", "Sihanoukville Base", "Phnom Penh Harbor", "Angkor Base"], "correctIndex": 0},
    {"q": "What name is given to the promotion of Chinese 5G and undersea cables globally?", "choices": ["The Digital Great Wall", "The 21st Century Digital Silk Road", "Huawei Global Link", "The Cyber Belt"], "correctIndex": 1},
    {"q": "The extensive chains of Pacific islands ringing China are described by policy makers as the what?", "choices": ["The Dragon's Teeth", "The First and Second Island Chains", "The Wall of Sovereignty", "The Maritime Perimeter"], "correctIndex": 1},
    {"q": "Chinese strategists assert that the U.S. uses island chains to ______ China.", "choices": ["Support", "Contain", "Modernize", "Democraticize"], "correctIndex": 1},
    {"q": "The range of Chinese missiles and military operating patterns are linked to which geographic concept?", "choices": ["The Tibetan Plateau", "The First and Second Island Chains", "The Gobi Desert", "The Yellow River Basin"], "correctIndex": 1},

    // --- 4/C LO 2: U.S. Policy Implications and Response ---
    {"q": "How does Beijing view its relationship with Washington currently?", "choices": ["Increasingly cooperative", "Increasingly adversarial", "Economically dependent", "Strategically irrelevant"], "correctIndex": 1},
    {"q": "China's goal to establish a 'world-class military' aims to make the PLA as strong as which military?", "choices": ["The Russian military", "The Japanese Self-Defense Forces", "The United States military", "The British Royal Navy"], "correctIndex": 2},
    {"q": "The CCP's milestone to 'basically' achieve military modernization is set for which year?", "choices": ["2025", "2027", "2030", "2035"], "correctIndex": 1},
    {"q": "China's goal for 'transforming into a dominant military' is set for which year?", "choices": ["2027", "2035", "2049", "2050"], "correctIndex": 2},
    {"q": "The U.S. Department of Defense believes China's 2027 timeline includes being prepared to invade whom?", "choices": ["South Korea", "Japan", "Taiwan", "The Philippines"], "correctIndex": 2},
    {"q": "Which commander stated in March 2024 that the PLA is meeting President Xi's directive to be ready to invade Taiwan by 2027?", "choices": ["CNO", "SECNAV", "Commander, U.S. Indo-Pacific Command", "Chairman of the JCS"], "correctIndex": 2},
    {"q": "China seeks to develop a force capable of defeating third-party military intervention during a regional conflict over what?", "choices": ["Resource rights", "The South China Sea", "Taiwan unification", "Trade tariffs"], "correctIndex": 2},
    {"q": "Which U.S. office stated that Chinese naval ship design quality is in many cases comparable to U.S. Navy ships?", "choices": ["The White House", "The Office of Naval Intelligence (ONI)", "The Coast Guard", "The State Department"], "correctIndex": 1},
    {"q": "China is emphasizing which type of vehicle to counter ballistic missile defense systems?", "choices": ["Nuclear-powered drones", "Hypersonic glide vehicles (HGV)", "Stealth submarines", "Unmanned surface vessels"], "correctIndex": 1},
    {"q": "In 2022, the Pentagon warned that China could triple its nuclear arsenal by which year?", "choices": ["2025", "2027", "2030", "2035"], "correctIndex": 3},
    {"q": "Beijing seeks to keep a portion of its nuclear forces on what type of posture?", "choices": ["No first use", "Launch-on-warning", "Garrison-only", "Deterrence-only"], "correctIndex": 1},
    {"q": "What national strategy does China use to lead the shift toward 'intelligentized' warfare?", "choices": ["Great Leap Forward", "Military-civil fusion", "The Zero-COVID policy", "Maritime Dominance"], "correctIndex": 1},
    {"q": "The PLA seeks to utilize which technology to increase comprehensive national power?", "choices": ["Quantum computing only", "Artificial Intelligence (AI)", "Blockchain", "Steam propulsion"], "correctIndex": 1},
    {"q": "In 2020, China conducted survey operations in whose exclusive economic zone?", "choices": ["Japan", "The Philippines", "Malaysia", "Vietnam"], "correctIndex": 2},
    {"q": "China used maritime law enforcement ships to patrol near which islands to challenge Japan's claim?", "choices": ["Spratly Islands", "Paracel Islands", "Senkaku Islands", "Kuril Islands"], "correctIndex": 2},

    // --- 4/C LO 3: Military Capabilities (Ships, Aircraft, Missiles) ---
    {"q": "The PLA Navy (PLAN) is currently the largest navy in the world with over how many platforms?", "choices": ["296", "370", "435", "500"], "correctIndex": 1},
    {"q": "How many ships is the PLAN battle force expected to grow to by 2030?", "choices": ["400", "415", "435", "500"], "correctIndex": 2},
    {"q": "The PLAN is organized into how many fleets?", "choices": ["Two", "Three", "Four", "Five"], "correctIndex": 1},
    {"q": "Which PLAN fleet is headquartered at Qingdao Naval Base?", "choices": ["North Sea Fleet", "East Sea Fleet", "South Sea Fleet", "Pacific Fleet"], "correctIndex": 0},
    {"q": "Which PLAN fleet is headquartered at Ningbo Fleet Headquarters?", "choices": ["North Sea Fleet", "East Sea Fleet", "South Sea Fleet", "Indian Ocean Fleet"], "correctIndex": 1},
    {"q": "Which PLAN fleet is headquartered at Yulin Naval Base?", "choices": ["North Sea Fleet", "East Sea Fleet", "South Sea Fleet", "Caspian Fleet"], "correctIndex": 2},
    {"q": "Which ship is China's newest and most capable surface combatant, displacing more than U.S. Cruisers?", "choices": ["Luyang III Destroyer", "Renhai Class Cruiser (Type 055)", "Jin Class Submarine", "Liaoning Carrier"], "correctIndex": 1},
    {"q": "How many VLS cells are on the Type 055 Renhai Class Cruiser?", "choices": ["64", "96", "112", "128"], "correctIndex": 2},
    {"q": "Which ship class is informally referred to as the 'Chinese Aegis'?", "choices": ["Renhai Class", "Luyang III Class Destroyer", "Shang Class", "Yuan Class"], "correctIndex": 1},
    {"q": "How many VLS cells are on the Luyang III Class Destroyer?", "choices": ["32", "64", "96", "112"], "correctIndex": 1},
    {"q": "Which aircraft carrier was purchased from Ukraine in 1998 and achieved operational capability in 2016?", "choices": ["CV-16 Liaoning", "CV-17 Shandong", "Fujan", "Kiev"], "correctIndex": 0},
    {"q": "The CV-16 Liaoning carrier uses which type of launch system?", "choices": ["Steam catapult", "Electromagnetic catapult", "Ski-jump catapult", "Vertical takeoff"], "correctIndex": 2},
    {"q": "Which aircraft carrier was China's first domestically built carrier, reaching capability in 2019?", "choices": ["CV-16 Liaoning", "CV-17 Shandong", "Fujan", "Renhai"], "correctIndex": 1},
    {"q": "How many aircraft can the CV-17 Shandong embark?", "choices": ["24", "30", "40", "60"], "correctIndex": 2},
    {"q": "The third Chinese carrier, Fujan, is equipped with which launch technology?", "choices": ["Ski-ramp", "Electromagnetic catapults", "Rocket assist", "Hydraulic sling"], "correctIndex": 1},
    {"q": "Which class of ballistic missile submarine (SSBN) is the Type 094?", "choices": ["Shang Class", "Yuan Class", "Jin Class", "Han Class"], "correctIndex": 2},
    {"q": "How many JL-2 Submarine Launched Ballistic Missiles does a Jin Class submarine carry?", "choices": ["6", "12", "16", "24"], "correctIndex": 1},
    {"q": "Which class of nuclear-powered attack submarine (SSN) is the Type 093?", "choices": ["Jin Class", "Shang Class", "Yuan Class", "Kilo Class"], "correctIndex": 1},
    {"q": "The Shang Class SSN is confirmed to have VLS tubes for which anti-ship missile?", "choices": ["YJ-12", "YJ-18", "DF-21", "Tomahawk"], "correctIndex": 1},
    {"q": "Which class is China's first AIP (air-independent propulsion) powered submarine?", "choices": ["Jin Class", "Shang Class", "Yuan Class (Type 039A)", "Ming Class"], "correctIndex": 2},
    {"q": "Which heavy class strike fighter is the primary aircraft for conducting maritime intercepts of U.S. P-8 aircraft?", "choices": ["J-15 Flanker", "J-20 Stealth", "Su-30 Flanker", "MQ-9 Reaper"], "correctIndex": 2},
    {"q": "Which aircraft is the carrier-based fighter in the PLA Air Force, first launched from a ski-jump in 2010?", "choices": ["J-10", "J-15 Flanker X2", "Su-35", "EP-3"], "correctIndex": 1},
    {"q": "Which Chinese supersonic anti-ship cruise missile is capable of evasive maneuvers to avoid anti-missile threats?", "choices": ["YJ-12", "YJ-18", "DF-21D", "CSS-5"], "correctIndex": 0},
    {"q": "The YJ-18 anti-ship cruise missile is believed to be similar to which Russian missile?", "choices": ["Kinzhal", "3M-54 Klub", "Strobile", "Sizzler"], "correctIndex": 1},
    {"q": "Which missile is known as the 'Carrier Killer Missile'?", "choices": ["DF-17", "DF-21D", "DF-26", "YJ-12"], "correctIndex": 1},
    {"q": "Which missile is known as the 'Guam Killer'?", "choices": ["DF-21D", "DF-26", "DF-15", "YJ-18"], "correctIndex": 1},
    {"q": "What is the estimated range of the Dong-Feng 26 (DF-26) missile?", "choices": ["1,000 km", "2,500 km", "4,500 km", "10,000 km"], "correctIndex": 2},
    {"q": "True or False: The DF-21D is the world's first land-based anti-ship ballistic missile (ASBM).", "choices": ["True", "False"], "correctIndex": 0},

    // --- 4/C LO 4: Significant Recent Events ---
    {"q": "In the 2001 Hainan Island Incident, a Chinese plane collided with which type of U.S. aircraft?", "choices": ["P-8 Poseidon", "EP-3 Aries U.S. surveillance plane", "F-18 Super Hornet", "C-2 Greyhound"], "correctIndex": 1},
    {"q": "In 2005, China held its first joint military exercises with which country?", "choices": ["United States", "Japan", "Russia", "North Korea"], "correctIndex": 2},
    {"q": "In January 2007, China carried out a missile test in space that shot down what?", "choices": ["A U.S. satellite", "A space station", "An old weather satellite", "A meteor"], "correctIndex": 2},
    {"q": "In May 2012, Philippines and Chinese vessels confronted one another off which reef?", "choices": ["Scarborough Shoal", "Mischief Reef", "Subi Reef", "Fiery Cross"], "correctIndex": 0},
    {"q": "China launched its first aircraft carrier, the Liaoning, in which year?", "choices": ["2001", "2012", "2016", "2018"], "correctIndex": 1},
    {"q": "In October 2015, China expressed anger at a U.S. ship sailing by artificial reefs in which islands?", "choices": ["Senkaku Islands", "Spratly Islands", "Paracel Islands", "Hainan Islands"], "correctIndex": 1},
    {"q": "In 2018, the PLAN deployed its largest ever flotilla to the South China Sea, including how many ships?", "choices": ["12", "24", "48", "70"], "correctIndex": 2},
    {"q": "In May 2025, China deployed larger than usual fleets throughout the First Island Chain, reaching how many ships at times?", "choices": ["48", "Over 70", "100", "200"], "correctIndex": 1},
    {"q": "Which U.S. Secretary of Defense is scheduled to visit Cambodia’s Ream Naval Base pier in 2025?", "choices": ["Lloyd Austin", "Pete Hegseth", "Mark Esper", "Jim Mattis"], "correctIndex": 1}
    {"q": "China's 'military-civil fusion' strategy aims to lead a shift toward what specific type of warfare?", "choices": ["Guerrilla warfare", "Intelligentized warfare", "Trench warfare", "Nuclear-only warfare"], "correctIndex": 1}, [cite: 1015]
    {"q": "Which organization manages China's space program?", "choices": ["Ministry of Commerce", "The People's Liberation Army (PLA)", "The Chinese Academy of Sciences", "China Telecom"], "correctIndex": 1}, [cite: 1014]
    {"q": "What name is given to the barrier benchmarks marking the extent of a country’s influence in the Indo-Pacific?", "choices": ["The Bamboo Curtain", "The First and Second Island Chains", "The Great Maritime Wall", "The Dragon's Perimeter"], "correctIndex": 1}, [cite: 1012]
    {"q": "China test-fired multiple ballistic missiles in 2020 that landed near which administrative areas in the South China Sea?", "choices": ["Hainan and the Paracel Islands", "Taiwan and Okinawa", "The Philippines and Guam", "Malacca and Singapore"], "correctIndex": 0}, [cite: 1013]
    {"q": "How many countries had signed on to Belt and Road Initiative (BRI) projects as of 2023?", "choices": ["50", "100", "147", "195"], "correctIndex": 2}, [cite: 1010]

      // --- Military Milestones & Modernization ---
    {"q": "What is the primary objective of China’s 2027 military milestone?", "choices": ["Total global dominance", "Complete economic isolation", "To develop key capabilities and better posture for conflict", "To dismantle all nuclear warheads"], "correctIndex": 2}, [cite: 1014]
    {"q": "By which year does China aim to achieve a 'world-class military'?", "choices": ["2027", "2035", "2049", "2050"], "correctIndex": 2}, [cite: 1013, 1014]
    {"q": "Which US Navy Admiral stated in March 2024 that the PLA is meeting the directive to be ready to invade Taiwan by 2027?", "choices": ["Admiral Nimitz", "Admiral Rickover", "Admiral Aquilino", "Admiral Richardson"], "correctIndex": 2}, [cite: 1014]
    {"q": "According to 2022 reports, the Pentagon warned China could triple its nuclear arsenal by which year?", "choices": ["2025", "2030", "2035", "2049"], "correctIndex": 2}, [cite: 1014]
    {"q": "The PLA seeks to accelerate its transition to 'basically' achieve military modernization by which year?", "choices": ["2025", "2027", "2030", "2040"], "correctIndex": 1}, [cite: 1013]

      // --- Major Naval Units (PLAN) ---
    {"q": "Which PLAN fleet is headquartered at Ningbo Fleet Headquarters?", "choices": ["North Sea Fleet", "East Sea Fleet", "South Sea Fleet", "Yellow Sea Fleet"], "correctIndex": 1}, [cite: 1015]
    {"q": "The Type 055 Destroyer is known by which NATO classification?", "choices": ["Luyang III Class", "Renhai Class Cruiser", "Jin Class", "Shang Class"], "correctIndex": 1}, [cite: 1018]
    {"q": "What is the specific VLS cell count of the Renhai Class Cruiser?", "choices": ["64 cells", "96 cells", "112 cells", "128 cells"], "correctIndex": 2}, [cite: 1018]
    {"q": "Which ship class is informally referred to as the 'Chinese Aegis'?", "choices": ["Renhai Class", "Luyang III Class Destroyer", "Jin Class", "Shandong Class"], "correctIndex": 1}, [cite: 1018]
    {"q": "Which aircraft carrier was China's first domestically built ship?", "choices": ["CV-16 Liaoning", "CV-17 Shandong", "Fujan", "Renhai"], "correctIndex": 1}, [cite: 1019]
    {"q": "What launch technology reportedly equips the third Chinese carrier, Fujan?", "choices": ["Ski-jump ramp", "Steam catapults", "Electromagnetic catapults", "Vertical takeoff pods"], "correctIndex": 2}, [cite: 1019]
    {"q": "Which aircraft carrier was purchased from Ukraine in 1998?", "choices": ["CV-16 Liaoning", "CV-17 Shandong", "Fujan", "Minsk"], "correctIndex": 0}, [cite: 1019]
    {"q": "The Jin Class Strategic Missile Submarine (Type 094) carries how many JL-2 ballistic missiles?", "choices": ["6", "12", "16", "24"], "correctIndex": 1}, [cite: 1020]
    {"q": "What is the NATO reporting name for the Type 093 nuclear-powered attack submarine?", "choices": ["Jin Class", "Shang Class", "Yuan Class", "Han Class"], "correctIndex": 1}, [cite: 1020]
    {"q": "Which submarine class is China’s first AIP (air-independent propulsion) powered vessel?", "choices": ["Shang Class", "Yuan Class (Type 039A)", "Jin Class", "Ming Class"], "correctIndex": 1}, [cite: 1021]

      // --- Aircraft & Missiles ---
    {"q": "Which aircraft is considered the primary interceptor of U.S. reconnaissance planes like the P-8 in the South China Sea?", "choices": ["J-15 Flanker", "Su-30 Flanker", "J-20 Stealth", "MQ-9 Reaper"], "correctIndex": 1}, [cite: 1021]
    {"q": "The J-15 Flanker performed its first successful takeoff from which carrier in 2012?", "choices": ["Shandong", "Liaoning", "Fujan", "Enterprise"], "correctIndex": 1}, [cite: 1021]
    {"q": "Which missile is known as the 'Carrier Killer'?", "choices": ["YJ-12", "YJ-18", "Dong-Feng 21D", "Dong-Feng 26"], "correctIndex": 2}, [cite: 1022]
    {"q": "Which missile is known as the 'Guam Killer'?", "choices": ["YJ-18", "DF-21D", "DF-26", "CSS-5"], "correctIndex": 2}, [cite: 1022]
    {"q": "What is the estimated range of the Dong-Feng 26 intermediate-range ballistic missile?", "choices": ["1,500 km", "2,500 km", "4,500 km", "10,000 km"], "correctIndex": 2}, [cite: 1022]
    {"q": "The YJ-12 anti-ship cruise missile allows short-range defenses only how many seconds to engage before impact?", "choices": ["15 seconds", "30 seconds", "45 seconds", "90 seconds"], "correctIndex": 2}, [cite: 1022]

      // --- Recent Incidents ---
    {"q": "During the 2001 Hainan Island Incident, a Chinese plane collided with which type of U.S. surveillance plane?", "choices": ["P-8 Poseidon", "P-3 Orion", "EP-3 Aries", "Global Hawk"], "correctIndex": 2}, [cite: 1022]
    {"q": "In May 2025, how many PLAN ships were deployed at once throughout the First Island Chain in a major show of force?", "choices": ["Over 30", "Over 50", "More than 70", "Exactly 100"], "correctIndex": 2}, [cite: 1023]
    {"q": "Where did China and Russia hold their first joint military exercises in 2005?", "choices": ["South China Sea", "Baltic Sea", "Peace Mission", "Gulf of Aden"], "correctIndex": 2}, [cite: 1022]
    {"q": "Which reefs was China building upon in the South China Sea in October 2015 when U.S. ships sailed nearby?", "choices": ["Senkaku Islands", "Spratly Islands", "Falkland Islands", "Midway Atoll"], "correctIndex": 1} [cite: 1023]
   
  ],
  },

  {
    id: "russia",
    title: "Russia",
    
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
    // --- 4/C LO 1: National Strategy & U.S. Relationship ---
    {"q": "Russian President Putin returned to power in which year seeking to reassert Russia as a great power?", "choices": ["2008", "2010", "2012", "2014"], "correctIndex": 2},
    {"q": "Russia is one of how many permanent members of the U.N. Security Council?", "choices": ["Three", "Five", "Seven", "Ten"], "correctIndex": 1},
    {"q": "Russia was a member of which group of leading economies until its removal in 2014?", "choices": ["G20", "BRICS", "Group of Eight (G8)", "OPEC"], "correctIndex": 2},
    {"q": "Which international group consists of Brazil, India, China, South Africa, and Russia?", "choices": ["NATO", "ASEAN", "BRICS", "EU"], "correctIndex": 2},
    {"q": "Russia is the second largest major weapons exporter in the world. Who are its top three clients?", "choices": ["USA, UK, and France", "India, China, and Vietnam", "Iran, Syria, and Iraq", "Brazil, Mexico, and Canada"], "correctIndex": 1},
    {"q": "The spirit of 'strategic partnership' in the early 1990s was forged between Bill Clinton and which Russian leader?", "choices": ["Vladimir Putin", "Dmitry Medvedev", "Boris Yeltsin", "Mikhail Gorbachev"], "correctIndex": 2},
    {"q": "Bilateral ties deteriorated to their lowest point since the Cold War following which 2008 conflict?", "choices": ["Syrian Civil War", "Russian-Georgian conflict", "Annexation of Crimea", "War in Donbas"], "correctIndex": 1},
    {"q": "The U.S.-Russia Bilateral Presidential Commission was suspended in 2014 due to Russian actions where?", "choices": ["Georgia", "Syria", "Ukraine", "Libya"], "correctIndex": 2},
    {"q": "In 2017, the ODNI released a report stating with 'high confidence' that Putin ordered a campaign to influence which election?", "choices": ["2012 Russian Election", "2014 Ukrainian Election", "2016 U.S. Presidential Election", "2020 U.S. Presidential Election"], "correctIndex": 2},
    {"q": "The U.S. responded with sanctions against Russia as recently as which date for continued election interference?", "choices": ["January 2017", "February 2022", "December 2024", "March 2025"], "correctIndex": 2},

    // --- 4/C LO 2: Military Action and Modernization ---
    {"q": "In which month and year did the full-scale Russian invasion of Ukraine begin?", "choices": ["March 2014", "September 2015", "February 2022", "January 2023"], "correctIndex": 2},
    {"q": "Russia successfully seized Crimea in March 2014 using which combination of forces?", "choices": ["Special forces, elite airborne troops, and naval infantry", "Drafted infantry and heavy tanks", "Cyber attacks and private contractors only", "Long-range ballistic missiles"], "correctIndex": 0},
    {"q": "What term is used to describe Russia's use of irregular forces backed by regular military and propaganda?", "choices": ["Guerrilla warfare", "Blitzkrieg", "Hybrid warfare", "Nuclear deterrence"], "correctIndex": 2},
    {"q": "Russia intervened in the Syrian Civil War in September 2015 at the request of which regime?", "choices": ["The Taliban", "The al-Assad regime", "The Muslim Brotherhood", "The Free Syrian Army"], "correctIndex": 1},
    {"q": "The Syrian campaign allowed Russia to display noteworthy capabilities, such as launching cruise missiles from which body of water?", "choices": ["The Baltic Sea", "The Caspian Sea", "The Sea of Japan", "The Gulf of Mexico"], "correctIndex": 1},
    {"q": "Russia's Syria intervention highlighted their ability to effect 'area denial' using what?", "choices": ["Overlapping advanced missile systems", "Naval blockades", "Land mines", "Trench warfare"], "correctIndex": 0},
    {"q": "In December 2014, Russia launched a new command focused on which strategic region?", "choices": ["Central Asia", "The Arctic Joint Strategic Command", "The Middle East Task Force", "The Pacific Reach Command"], "correctIndex": 1},
    {"q": "Russia's latest State Armament Plan (SAP) covers which specific period?", "choices": ["2014-2020", "2018-2027", "2020-2030", "2025-2035"], "correctIndex": 1},
    {"q": "The 2018-2027 SAP prioritizes improving mobility and command for which reaction forces?", "choices": ["Garrisoned infantry", "Spetsnaz, Naval Infantry, and Airborne troops", "Coastal defense only", "Nuclear technicians"], "correctIndex": 1},
    {"q": "In November 2023, Russia announced its highest defense budget in history, increasing it by approximately how much?", "choices": ["10%", "25%", "50%", "100%"], "correctIndex": 1},

    // --- 4/C LO 3: Military Capabilities ---
    {"q": "What is the only aircraft carrier class in the Russian Navy?", "choices": ["Gerald R. Ford Class", "Admiral Kuznetsov Class", "Liaoning Class", "Sovremenny Class"], "correctIndex": 1},
    {"q": "The Admiral Kuznetsov carrier sits at what length?", "choices": ["800 ft", "999 ft", "1,001 ft", "1,106 ft"], "correctIndex": 2},
    {"q": "What is the primary mission of the Admiral Kuznetsov carrier?", "choices": ["Independent power projection", "To defend strategic submarines and other surface ships", "Logistics and refueling", "Clandestine reconnaissance"], "correctIndex": 1},
    {"q": "Which Russian ship class is identified by two four-cell anti-ship missile launchers set at a 15-degree angle?", "choices": ["Admiral Grigorovich Class", "Sovremenny Class Destroyer", "Borei Class", "Akula Class"], "correctIndex": 1},
    {"q": "What is the primary task of the Sovremenny Class Destroyer?", "choices": ["Strategic deterrence", "Anti-ship warfare", "Hospital ship duties", "Mine sweeping"], "correctIndex": 1},
    {"q": "Which frigate class is recognizable by the black search radar behind the main superstructure?", "choices": ["Sovremenny Class", "Admiral Grigorovich Class", "Kuznetsov Class", "Akula Class"], "correctIndex": 1},
    {"q": "The Admiral Grigorovich Class Frigate functions include air defense, ASW, and what other duty?", "choices": ["Escorting other warships", "Landing heavy tanks", "Cyber operations", "Deep sea mining"], "correctIndex": 0},
    {"q": "Russia is replacing Soviet-era Delta submarines with which class of nuclear ballistic missile submarines?", "choices": ["Akula Class", "Borei Class", "Yasen Class", "Kilo Class"], "correctIndex": 1},
    {"q": "The Borei Class falls under which submarine designation?", "choices": ["SSN", "SSGN", "SSBN (Strategic Missile Submarine)", "SSK"], "correctIndex": 2},
    {"q": "Which class is Russia's newest and most advanced nuclear-powered cruise missile submarine (SSGN)?", "choices": ["Akula Class", "Borei Class", "Yasen Class", "Severodvinsk Class"], "correctIndex": 2},
    {"q": "The Yasen Class is commonly known by NATO countries as what class?", "choices": ["Delta Class", "Severodvinsk Class", "Typhoon Class", "Oscar Class"], "correctIndex": 1},
    {"q": "The Akula Class SSN incorporates what kind of hull system for more reserve buoyancy?", "choices": ["Single pressure hull", "Triple hull", "Double hull system", "Wooden hull"], "correctIndex": 2},
    {"q": "What distinctive feature on top of the Akula's rudder houses its towed sonar array?", "choices": ["A flag mast", "A 'bulb' or 'can'", "A satellite dish", "A searchlight"], "correctIndex": 1},
    {"q": "The Varshavyanka Class is an improved version of which existing submarine class?", "choices": ["Akula", "Severodvinsk", "Kilo", "Delta III"], "correctIndex": 2},
    {"q": "What is the propulsion type for the Varshavyanka Class patrol submarine?", "choices": ["Nuclear", "Diesel-electric", "Steam", "Gas turbine"], "correctIndex": 1},
    {"q": "Which Russian aircraft represents the pinnacle of fourth-generation jet fighter design?", "choices": ["Mig-29", "Su-33", "Su-35 Flanker-E", "Su-24 Fencer"], "correctIndex": 2},
    {"q": "The Su-35 Flanker-E is distinguished by what physical flight characteristic?", "choices": ["Stealth technology", "Unrivaled maneuverability", "Vertical takeoff", "Supersonic cruise without afterburners"], "correctIndex": 1},
    {"q": "Which fighter is the most common to conduct intercepts against U.S. reconnaissance aircraft in the Mediterranean?", "choices": ["Su-24", "Su-33", "Su-35 Flanker-E", "Mig-31"], "correctIndex": 2},
    {"q": "The SS-N-26 Strobile is what type of missile?", "choices": ["Subsonic land attack", "Supersonic anti-ship cruise missile", "ICBM", "Surface-to-air"], "correctIndex": 1},
    {"q": "What is a primary advantage of the SS-N-26 Strobile?", "choices": ["Manual control only", "Full autonomy ('fire and forget')", "Low speed for accuracy", "Launched only from trucks"], "correctIndex": 1},
    {"q": "The SS-N-27 Sizzler includes variants for anti-ship, land attack, and what other mission?", "choices": ["Anti-submarine", "Space warfare", "Cyber attack", "Medical supply delivery"], "correctIndex": 0},
    {"q": "True or False: The SS-N-27 Sizzler can be launched from a ship's Vertical Launch System (VLS).", "choices": ["True", "False"], "correctIndex": 0},

    // --- 4/C LO 4: Notable U.S. and Russia Military Interactions ---
    {"q": "In April 2016, Russian Su-24 jets performed low-altitude passes on which U.S. destroyer in the Baltic Sea?", "choices": ["USS Porter", "USS Carney", "USS Donald Cook", "USS Mason"], "correctIndex": 2},
    {"q": "In February 2017, multiple Russian jets buzzed which U.S. Navy destroyer in the Black Sea?", "choices": ["USS Ross", "USS Porter (DDG 78)", "USS Arleigh Burke", "USS Winston Churchill"], "correctIndex": 1},
    {"q": "In January 2018, a Russian Su-27 came within how many feet of a U.S. EP-3 Aries?", "choices": ["Five feet", "Fifty feet", "One hundred feet", "Five hundred feet"], "correctIndex": 0},
    {"q": "In June 2019, which U.S. cruiser came close to a collision with the Russian destroyer Admiral Vinogradov?", "choices": ["USS Lake Erie", "USS Gettysburg", "USS Chancellorsville (CG 62)", "USS Monterey"], "correctIndex": 2},
    {"q": "U.S. 7th Fleet stated the Admiral Vinogradov came within how many feet of the USS Chancellorsville?", "choices": ["10 to 20 feet", "50 to 100 feet", "200 to 300 feet", "One mile"], "correctIndex": 1},
    {"q": "In October 2021, Russia claimed it prevented which U.S. ship from 'intruding' into territorial waters in the Sea of Japan?", "choices": ["USS Finn", "USS Chafee (DDG 90)", "USS Stout", "USS Mustin"], "correctIndex": 1},
    {"q": "In March 2025, U.S. Navy jets intercepted which type of Russian spy plane near the USS Carl Vinson?", "choices": ["Su-35", "Il-38", "Tu-95", "Mig-29"], "correctIndex": 1},
    {"q": "Ukraine's 'Operation Spider's Web' in June 2025 reportedly struck more than how many high-value Russian aircraft?", "choices": ["10", "20", "40", "100"], "correctIndex": 2},
    {"q": "As of March 2025, the U.S. has committed over how much in aid to Ukraine?", "choices": ["$50 billion", "$100 billion", "$175 billion", "$500 billion"], "correctIndex": 2},
    {"q": "The future of Russian bases in Syria currently rests with which interim Syrian President?", "choices": ["Bashar al-Assad", "Ahmed Sharaa", "Vladimir Putin", "Masoud Pezeshkian"], "correctIndex": 1}

  ],
  },

  {
    id: "rogue-states",
    title: "Rogue States",
  
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
    // --- North Korea: National Strategy & Nuclear Program (4/C LO 1) ---
    {"q": "For how many years has the U.S. been committed to security on the Korean Peninsula?", "choices": ["Almost 25 years", "Almost 50 years", "Almost 70 years", "Exactly 100 years"], "correctIndex": 2},
    {"q": "What is the primary objective of North Korea's national security strategy according to the DIA?", "choices": ["Regional economic integration", "Kim regime's long-term security", "Democratic reform", "Global trade expansion"], "correctIndex": 1},
    {"q": "Under which leader has North Korea dramatically hastened nuclear weapon development?", "choices": ["Kim Il Sung", "Kim Jong Il", "Kim Jong Un", "Kim Yo Jong"], "correctIndex": 2},
    {"q": "In his 2023 New Year's address, Kim Jong Un pledged to do what regarding his nuclear arsenal?", "choices": ["Dismantle it entirely", "Halt production for ten years", "Exponentially expand it", "Sell it to regional allies"], "correctIndex": 2},
    {"q": "According to the IAEA, North Korea began restoring test tunnels at which site in March 2022?", "choices": ["Punggye-ri", "Pyongyang", "Yongbyon", "Hamhung"], "correctIndex": 0},
    {"q": "How many ballistic missile test launches did North Korea conduct between 2022 and 2023?", "choices": ["Over 10", "Over 40", "Over 80", "Exactly 100"], "correctIndex": 2},
    {"q": "How many ICBMs were included in North Korea's 2022-2023 test launches?", "choices": ["At least two", "At least five", "At least ten", "Zero"], "correctIndex": 1},
    {"q": "The Intelligence Community assesses that North Korea is ______ to give up all of its nuclear weapons.", "choices": ["Likely", "Unlikely", "Guaranteed", "Eager"], "correctIndex": 1},
    {"q": "What new capability was associated with the North Korean ICBM test in 2024?", "choices": ["Stealth technology", "MIRV (Multiple Independently Targetable Reentry Vehicle)", "Nuclear propulsion", "AI guidance"], "correctIndex": 1},
    {"q": "Historically, North Korea has tied the idea of denuclearization to what?", "choices": ["Unconditional surrender", "Changes in economic sanctions and military activities", "Joining the European Union", "Abolishing the Kim family"], "correctIndex": 1},

    // --- North Korea: Military Posture & Strengths (4/C LO 2) ---
    {"q": "What is the collective name for the fighting forces of North Korea?", "choices": ["People's Guard", "Korean People's Army (KPA)", "Supreme Guard Command", "National Defense Force"], "correctIndex": 1},
    {"q": "Approximately how many active-duty personnel are in the North Korean military?", "choices": ["500,000", "850,000", "Over 1.3 million", "Over 5 million"], "correctIndex": 2},
    {"q": "How many paramilitary and reserve personnel does North Korea have?", "choices": ["1 million", "3 million", "5 million", "7 million"], "correctIndex": 3},
    {"q": "North Korea's military equipment profile is primarily described as being from which era?", "choices": ["Western-modern", "Soviet-era", "Post-2020 Chinese", "WWII-era"], "correctIndex": 1},
    {"q": "What is listed as a 'Core Strength' of the North Korean military regarding its neighbor?", "choices": ["Massed artillery threat to South Korea", "Technological superiority", "Naval carrier groups", "Air force quality"], "correctIndex": 0},
    {"q": "Which of these is a major vulnerability of the North Korean military?", "choices": ["Lack of personnel", "Logistics for sustained combat operations", "Lack of defensive fortifications", "Insufficient underground facilities"], "correctIndex": 1},
    {"q": "Which North Korean service is responsible for its strategic ballistic missiles?", "choices": ["Strategic Force", "Navy", "Air Force", "Ground Forces"], "correctIndex": 0},
    {"q": "How many major branches of service make up the North Korean military?", "choices": ["Three", "Four", "Five", "Six"], "correctIndex": 2},
    {"q": "North Korea can launch a high-intensity attack using thousands of which systems?", "choices": ["Cyber units", "Artillery and rocket systems", "Stealth bombers", "Nuclear submarines"], "correctIndex": 1},
    {"q": "The North Korean military's modern doctrine is most likely rooted in which style?", "choices": ["U.S. Marine Corps style", "Old Soviet style", "Modern NATO style", "Guerrilla-only style"], "correctIndex": 1},

    // --- North Korea: Engagement & Sanctions (4/C LO 2 Cont.) ---
    {"q": "Which country accounts for over 80% of North Korea’s trade?", "choices": ["Russia", "Japan", "China", "United States"], "correctIndex": 2},
    {"q": "In 2024, North Korea transferred weapons to which country for the war in Ukraine?", "choices": ["China", "Iran", "Russia", "Syria"], "correctIndex": 2},
    {"q": "What method does North Korea use at sea to acquire refined petroleum while evading sanctions?", "choices": ["Submarine pipelines", "Ship-to-ship transfers", "Underwater storage", "Airborne refueling"], "correctIndex": 1},
    {"q": "Which two countries blocked 2022 U.S.-led efforts at the UNSC to tighten petroleum sanctions?", "choices": ["China and Russia", "Iran and Syria", "UK and France", "Japan and South Korea"], "correctIndex": 0},
    {"q": "What did the 2025 ATA report Moscow might be providing North Korea in exchange for weapons?", "choices": ["Food only", "Technical expertise", "Diplomatic immunity", "Territory in Ukraine"], "correctIndex": 1},

    // --- North Korea: Notable Military Events (4/C LO 3) ---
    {"q": "Which U.S. Navy vessel was captured by North Korea in January 1968?", "choices": ["USS Arizona", "USS Pueblo", "USS Constitution", "USS Enterprise"], "correctIndex": 1},
    {"q": "In April 1969, North Korean Mig-21s shot down which U.S. aircraft?", "choices": ["P-8 Poseidon", "EC-121 reconnaissance aircraft", "EP-3 Aries", "F-14 Tomcat"], "correctIndex": 1},
    {"q": "How many U.S. sailors perished in the 1969 shoot-down of the EC-121?", "choices": ["15 sailors", "24 sailors", "31 sailors", "83 sailors"], "correctIndex": 2},
    {"q": "When did North Korea conduct its first nuclear weapons test?", "choices": ["1998", "2006", "2009", "2013"], "correctIndex": 1},
    {"q": "In May 2025, which North Korean ship suffered significant damage during a failed launch?", "choices": ["Choe Hyon-class guided missile destroyer", "Sinpo-class submarine", "Taepodong carrier", "Kim-class frigate"], "correctIndex": 0},
    {"q": "How many missile launches did North Korea execute in 2022, marking a new record?", "choices": ["26", "45", "69", "100"], "correctIndex": 2},
    {"q": "In July 2017, a North Korean long-range missile test reportedly had the range to reach where?", "choices": ["Hawaii", "Alaska", "California", "New York City"], "correctIndex": 1},
    {"q": "North Korea held the crew of the USS Pueblo hostage for how long?", "choices": ["11 days", "11 weeks", "11 months", "11 years"], "correctIndex": 2},
    {"q": "The failed launching ceremony of the North Korean destroyer in 2025 was confirmed by what?", "choices": ["North Korean confession", "Satellite imagery", "U.S. Navy divers", "A defector report"], "correctIndex": 1},
    {"q": "What happened to the stern of the North Korean destroyer during the failed 2025 launch?", "choices": ["It exploded", "It swung out into the harbor", "It was stolen", "It sank immediately"], "correctIndex": 1},

    // --- Iran: Strategy & Proxies (4/C LO 4) ---
    {"q": "What year did Iran introduce Islam as its form of governance?", "choices": ["1945", "1972", "1979", "2001"], "correctIndex": 2},
    {"q": "What was the name of the 2015 agreement that restricted Iran's nuclear program?", "choices": ["SALT II", "Camp David Accord", "Joint Comprehensive Plan of Action (JCPOA)", "The Tehran Treaty"], "correctIndex": 2},
    {"q": "In what month and year did the U.S. withdraw from the JCPOA?", "choices": ["January 2017", "May 2018", "December 2019", "June 2021"], "correctIndex": 1},
    {"q": "Iran backs regional armed groups to erode U.S. influence. Which of these is NOT an Iranian proxy listed?", "choices": ["Hamas", "Hezbollah", "The Houthis", "The Taliban"], "correctIndex": 3},
    {"q": "What June 2025 U.S. operation destroyed 3 Iranian nuclear sites effectively ending their program?", "choices": ["Operation Desert Shield", "Operation Midnight Hammer", "Operation Neptune Spear", "Operation Enduring Freedom"], "correctIndex": 1},
    {"q": "How many aircraft were used in 'Operation Midnight Hammer' in 2025?", "choices": ["50", "75", "100", "Over 125"], "correctIndex": 3},
    {"q": "Which stealth aircraft participated in the June 2025 strike on Iranian nuclear sites?", "choices": ["F-14 Tomcats", "F-18 Super Hornets", "B-2 Stealth Bombers", "A-10 Warthogs"], "correctIndex": 2},
    {"q": "What specialized bomb was used by the U.S. in 2025 to target hardened Iranian sites?", "choices": ["GBU-57 Massive Ordnance Penetrator (MOP)", "Daisy Cutter", "Cluster Munition", "Hellfire Missile"], "correctIndex": 0},
    {"q": "Which group committed the deadly October 7th, 2023 terrorist attack on Israel?", "choices": ["Hezbollah", "Al-Qaida", "Hamas", "The Houthis"], "correctIndex": 2},
    {"q": "The Trump administration began air strikes on Houthi targets in Yemen in which month of 2025?", "choices": ["January", "March", "June", "August"], "correctIndex": 1},

    // --- Iran: Military & Naval Structure (4/C LO 5) ---
    {"q": "Iran has the largest inventory of what type of weapon in the Middle East?", "choices": ["Aircraft carriers", "Ballistic missiles", "Nuclear submarines", "Stealth fighters"], "correctIndex": 1},
    {"q": "Iran's ballistic missiles can strike targets as far as how many kilometers?", "choices": ["500 km", "1,000 km", "2,000 km", "5,000 km"], "correctIndex": 2},
    {"q": "Which Iranian force emphasizes asymmetric doctrine for security in the Persian Gulf?", "choices": ["IRIN", "Basij", "IRGCN", "Qods Force"], "correctIndex": 2},
    {"q": "The IRIN (Islamic Republic of Iran Navy) focuses on which specific areas?", "choices": ["Persian Gulf only", "Caspian Sea, Gulf of Oman, and out-of-area", "Nile River", "Red Sea exclusively"], "correctIndex": 1},
    {"q": "What does FIAC stand for in the context of Iranian naval threats?", "choices": ["Fast Inshore Attack Craft", "First Iranian Armed Combatant", "Fixed Infantry Air Command", "Fleet Interdiction Air Craft"], "correctIndex": 0},
    {"q": "What tactic does the IRGCN use en masse with FIACs to harass warships?", "choices": ["Stealth approach", "Swarm tactics", "Sniper fire", "Aerial bombing"], "correctIndex": 1},
    {"q": "Nearly what percentage of the world's natural gas shipped on tankers passes through the Strait of Hormuz?", "choices": ["10%", "20%", "30%", "50%"], "correctIndex": 2},
    {"q": "Which air defense system did Russia deliver to Iran in 2016?", "choices": ["SA-2", "Patriot", "SA-20c", "Iron Dome"], "correctIndex": 2},
    {"q": "What is a 'Key Vulnerability' of the Iranian military listed in the book?", "choices": ["Lack of personnel", "Dual military structure", "No ballistic missiles", "Lack of asymmetric doctrine"], "correctIndex": 1},
    {"q": "How many active personnel are in the Iranian military (2026 outlook)?", "choices": ["100,000", "250,000", "400,000", "600,000"], "correctIndex": 3},

    // --- Iran: Strait of Hormuz & Mining (4/C LO 5 Cont.) ---
    {"q": "How wide is the deep-water shipping channel in the Strait of Hormuz?", "choices": ["2 miles wide", "10 miles wide", "20 miles wide", "50 miles wide"], "correctIndex": 0},
    {"q": "How many barrels of oil pass through the Strait of Hormuz each day?", "choices": ["1 million", "5 million", "10 million", "Over 18 million"], "correctIndex": 3},
    {"q": "Why is deploying mines from submarines considered 'tricky' for Iran in the Strait of Hormuz?", "choices": ["Strong currents", "Lack of submarines", "Shallow waters", "High temperatures"], "correctIndex": 2},
    {"q": "How many U.S. minesweepers are active in Bahrain to counter the Iranian threat?", "choices": ["One", "Two", "Three", "Four"], "correctIndex": 3},
    {"q": "Iran has military presence on islands near the Strait and along which coastline?", "choices": ["Southern coastline", "Northern coastline", "Western coastline", "Eastern coastline"], "correctIndex": 1},

    // --- Iran: Recent Military Incidents (4/C LO 6) ---
    {"q": "Describe the January 2016 incident near Farsi Island.", "choices": ["Iran sank a U.S. destroyer", "Ten U.S. Sailors were detained for 15 hours", "A U.S. helicopter was shot down", "The U.S. captured an Iranian base"], "correctIndex": 1},
    {"q": "In June 2019, Iran shot down which U.S. unmanned aircraft?", "choices": ["MQ-9 Reaper", "MQ-4C Triton", "RQ-4A Global Hawk BAMS-D", "RQ-20 Puma"], "correctIndex": 2},
    {"q": "What was 'Operation Martyr Soleimani' in January 2020?", "choices": ["A rescue mission", "A cyber attack", "A retaliatory ballistic missile strike on Iraqi bases", "The blockade of the Red Sea"], "correctIndex": 2},
    {"q": "In January 2024, an Iranian-backed group killed how many U.S. service members in Jordan?", "choices": ["Zero", "One", "Three", "Ten"], "correctIndex": 2},
    {"q": "In April 2024, Iran launched its first direct strike on Israel using over ______ drones and missiles.", "choices": ["50", "100", "200", "300"], "correctIndex": 3},
    {"q": "What act did the IRGCN commit against a U.S. helicopter in September 2023?", "choices": ["Shot a missile", "Fired machine guns", "Shone a laser multiple times", "Ramming attempt"], "correctIndex": 2},
    {"q": "Who is the first 'reformist' president of Iran in 20 years, seceding Raisi in 2024?", "choices": ["Masoud Pezeshkian", "Hassan Rouhani", "Qasem Soleimani", "Ayatollah Khamenei"], "correctIndex": 0},
    {"q": "Iran's latest solid-fueled missile 'Qassem Basir' has what reported range?", "choices": ["100 miles", "745 miles", "1,500 miles", "3,000 miles"], "correctIndex": 1},
    {"q": "In April 2024, how many incidents did the U.S. Navy engage in against Houthi attacks?", "choices": ["One", "Five", "Ten", "Seventeen"], "correctIndex": 3},
    {"q": "How many Houthi launched missiles did the U.S. Navy defend against in April 2024?", "choices": ["One", "Five", "Twelve", "Twenty"], "correctIndex": 2}

  ],
  },

  {
    id: "cyber-warfare",
    title: "Cyber Warfare",
   
    practiceLinks: [
      // { label: "Practice Test", url: "https://..." },
    ],
    questions: [
    // --- Cyber Threat Intelligence (4/C LO 1) ---
    {"q": "The U.S. Intelligence Community expects cyber threats to national security to increasingly exploit which weakest components?", "choices": ["Supercomputers", "Mainframe servers", "Mobile devices and the Internet of Things (IoT)", "Undersea fiber optic cables"], "correctIndex": 2},
    {"q": "Which two countries are identified as the primary state adversaries of the United States in cyberspace?", "choices": ["Iran and North Korea", "Russia and China", "China and Iran", "Russia and North Korea"], "correctIndex": 1},
    {"q": "Adversaries target U.S. military personnel on which platforms to gain insight into force movement?", "choices": ["NIPRNET", "Direct mail", "Social media", "Encrypted forums"], "correctIndex": 2},
    {"q": "Which Chinese organization operates a global campaign of cyber espionage for economic and strategic purposes?", "choices": ["The PLASSF", "The Ministry of State Security (MSS)", "Huawei Technologies", "The Central Military Commission"], "correctIndex": 1},
    {"q": "In 2015, China reorganized its cyber, space, and electronic warfare units into which single force?", "choices": ["Network Systems Department", "Digital Silk Road Command", "Strategic Support Forces (PLASSF)", "Cyber Management Agency"], "correctIndex": 2},
    {"q": "The Chinese MSS operation 'Cloud Hopper' specifically targeted which sector to gain sensitive government data?", "choices": ["IT service providers", "Electrical power grids", "Commercial banking", "Social media platforms"], "correctIndex": 0},
    {"q": "Which Russian organization is primarily responsible for state-sponsored counterintelligence in cyberspace?", "choices": ["GRU", "SVR", "FSB", "KGB"], "correctIndex": 2},
    {"q": "The Russian GRU is associated with disabling power grids in which two countries?", "choices": ["Estonia and Latvia", "Poland and Germany", "Georgia and Ukraine", "Syria and Iraq"], "correctIndex": 2},
    {"q": "Which Russian intelligence service was identified as the lead element behind the 2020 SolarWinds attack?", "choices": ["FSB", "SVR", "GRU", "OPEC"], "correctIndex": 1},
    {"q": "What is the primary objective of China's 'Digital Silk Road'?", "choices": ["Providing free internet to allies", "Gaining long-term access to global IT networks for future operations", "Selling low-cost consumer electronics", "Establishing a global satellite TV network"], "correctIndex": 1},

    // --- Space Domain Definition & Operations (4/C LO 2-4) ---
    {"q": "The space domain in the USSPACECOM area of responsibility begins at what minimum altitude?", "choices": ["50 kilometers", "100 kilometers", "150 nautical miles", "Any altitude where birds cannot fly"], "correctIndex": 1},
    {"q": "Which space mission is defined as having predictive knowledge and characterization of space objects and the operating environment?", "choices": ["Space Control", "Spacelift", "Space domain awareness (SDA)", "Missile Warning"], "correctIndex": 2},
    {"q": "Military users depend on Positioning, Navigation, and Timing (PNT) for which mission-essential requirement?", "choices": ["Beyond line-of-sight connectivity", "Precise geo-location and time reference services", "Predicting solar radiation levels", "Monitoring terrestrial weather"], "correctIndex": 1},
    {"q": "Which mission uses Overhead Persistent Infrared (OPIR) and ground-based radars to notify leaders of attacks?", "choices": ["Environmental Monitoring", "Spacelift", "Missile Warning", "Nuclear Detonation Detection"], "correctIndex": 2},
    {"q": "What is a primary operational benefit of access to space for a combatant commander?", "choices": ["Immunity to electronic jamming", "Unlimited bandwidth for all users", "Global perspective and overflight", "Low latency compared to terrestrial fiber"], "correctIndex": 2},
    {"q": "Space control includes both offensive and defensive operations to ensure what in space?", "choices": ["Commercial profit", "Freedom of action", "Total secrecy", "Absolute satellite density"], "correctIndex": 1},
    {"q": "Which space mission is the ability to deliver payloads like satellites into orbit?", "choices": ["SATOPS", "Spacelift", "Space Control", "SDA"], "correctIndex": 1},
    {"q": "Environmental Monitoring in space provides support to joint operations by giving the JFC awareness of what?", "choices": ["The adversary's base locations", "The Operational Environment (OE)", "Satellite fuel levels", "Launch vehicle costs"], "correctIndex": 1},

    // --- Orbit Types & Characteristics (4/C LO 5) ---
    {"q": "Which type of orbit is roughly 23,000 miles above Earth and provides continuous coverage over a specific area?", "choices": ["Low Earth Orbit (LEO)", "Medium Earth Orbit (MEO)", "Geosynchronous Earth Orbit (GEO)", "Highly Elliptical Orbit (HEO)"], "correctIndex": 2},
    {"q": "Which orbit is preferred for PNT and GPS satellites due to stable orbit and lower latency than GEO?", "choices": ["Low Earth Orbit", "Medium Earth Orbit (MEO)", "Geosynchronous Orbit", "Highly Elliptical Orbit"], "correctIndex": 1},
    {"q": "What type of orbit provides high resolution and signal strength because it is closest to Earth (up to ~1,000 miles)?", "choices": ["Low Earth Orbit (LEO)", "MEO", "GEO", "HEO"], "correctIndex": 0},
    {"q": "A long ellipse orbit used for communication over high North or South latitudes is known as what?", "choices": ["LEO", "MEO", "GEO", "Highly Elliptical Orbit (HEO)"], "correctIndex": 3},
    {"q": "What is a primary disadvantage of Geosynchronous Earth Orbit (GEO)?", "choices": ["Small coverage area", "High signal latency and ease of jamming", "Short dwell time", "Unstable orbital mechanics"], "correctIndex": 1},

    // --- Chinese and Russian Space Threats (4/C LO 6) ---
    {"q": "The PLA Strategic Support Force (SSF) Network Systems Department is responsible for cyberwarfare and which other mission?", "choices": ["Amphibious assault", "Nuclear launch", "Psychological warfare", "Undersea exploration"], "correctIndex": 2},
    {"q": "What is the name of the Chinese satellite navigation system comprised of 35 satellites?", "choices": ["GLONASS", "Galileo", "Beidou Navigation Satellite System (BDS)", "Yaogan"], "correctIndex": 2},
    {"q": "Which Chinese satellite platform is believed to be operated for military intelligence-gathering?", "choices": ["Tiangong", "Yaogan", "GLONASS", "Nudol"], "correctIndex": 1},
    {"q": "The Russian PL-19 Nudol system is a counterspace weapon primarily focused on which mission?", "choices": ["GPS Jamming", "Anti-satellite (ASAT)", "Meteorological monitoring", "Missile refueling"], "correctIndex": 1},
    {"q": "What is the name of the Russian global navigation satellite system that consists of 24+ satellites in MEO?", "choices": ["Yaogan", "Tiangong", "GLONASS", "Starlink"], "correctIndex": 2},
    {"q": "Which Chinese lunar mission returned a sample of lunar regolith to Earth in December 2020?", "choices": ["Chang'e 5", "Tiangong 1", "BDS 3", "Jianbing 4"], "correctIndex": 0},

    // --- Terrorism and Transnational Threats (4/C LO 7-8) ---
    {"q": "Which organization maintains relevance by overseeing at least 19 branches and networks in Africa, Asia, and Europe?", "choices": ["Al-Qaida", "ISIS", "The Taliban", "Hezbollah"], "correctIndex": 1},
    {"q": "Which terrorist leader's 2013 guidelines intended to 'exhaust America and bleed her to death'?", "choices": ["Osama bin Laden", "Abu Bakr al-Baghdadi", "Ayman al-Zawahiri", "Qasem Soleimani"], "correctIndex": 2},
    {"q": "ISIS advocates for the immediate creation of a ______ and implementation of its ideology without compromise.", "choices": ["Democracy", "Caliphate", "Coalition", "Trade zone"], "correctIndex": 1},
    {"q": "Which group is more willing to compromise with local groups over ideology than its rival, ISIS?", "choices": ["Hamas", "Hezbollah", "Al-Qaida", "Al-Shabaab"], "correctIndex": 2},
    {"q": "By the end of 2024, the number of people living in internal displacement worldwide reached a record high of what?", "choices": ["50.1 million", "73.5 million", "100 million", "183.4 million"], "correctIndex": 3},
    {"q": "The wars in which two locations triggered approximately 6.9 million total displacements in 2024?", "choices": ["Syria and Libya", "Afghanistan and Yemen", "Ukraine and Gaza", "Iraq and Mali"], "correctIndex": 2},
    {"q": "In 2024, how many countries had more than 3 million internally displaced people (IDPs) as a result of conflict?", "choices": ["Two", "Five", "Ten", "Twenty"], "correctIndex": 2}

    {"q": "What is the official assessed primary objective of North Korea's national security strategy?", "choices": ["Global economic expansion", "Ensuring the Kim regime's long-term security", "Establishing a democratic peninsula", "Developing a commercial space program"], "correctIndex": 1},
    {"q": "The intelligence community assesses that North Korea is ______ to give up all of its nuclear weapons.", "choices": ["Likely", "Eager", "Unlikely", "Guaranteed"], "correctIndex": 2},
    {"q": "How many ballistic missile test launches did North Korea conduct between 2022 and 2023?", "choices": ["Over 20", "Over 50", "Over 80", "Exactly 100"], "correctIndex": 2},
    {"q": "In his 2023 New Year's address, Kim Jong Un reversed previous pledges to call for a mass production of what?", "choices": ["Naval destroyers", "Tactical nuclear weapons", "Cyber warfare code", "Submarine-launched drones"], "correctIndex": 1},
    {"q": "According to the IAEA, North Korea began restoring test tunnels at which site in March 2022?", "choices": ["Punggye-ri", "Pyongyang", "Yongbyon", "Hamhung"], "correctIndex": 0},
        
        // --- North Korea Military Posture (4/C LO 2) ---
    {"q": "Which of these is listed as a 'Core Strength' of the North Korean military?", "choices": ["Stealth technology", "Massed artillery threat to South Korea", "Advanced logistics systems", "A numerically superior navy"], "correctIndex": 1},
    {"q": "North Korea is described as one of the most ______ countries in the world.", "choices": ["Democratic", "Militarized", "Technologically advanced", "Globalized"], "correctIndex": 1},
    {"q": "What is a major vulnerability of the North Korean military identified in the Pro-Book?", "choices": ["Lack of artillery", "Logistics for sustained combat operations", "Lack of underground facilities", "Insufficient defensive fortifications"], "correctIndex": 1},
    {"q": "Which North Korean service is specifically responsible for ballistic missiles?", "choices": ["Air Force", "Navy", "Strategic Force", "Ground Forces"], "correctIndex": 2},
        
        // --- North Korea Notable Events (4/C LO 3) ---
        {"q": "Which U.S. Navy intelligence vessel captured in 1968 remains in North Korea's possession today?", "choices": ["USS Arizona", "USS Pueblo", "USS Constitution", "USS Enterprise"], "correctIndex": 1},
        {"q": "In May 2025, which North Korean ship suffered major damage during a failed launch attempt?", "choices": ["Choe Hyon-class guided missile destroyer", "Sinpo-class submarine", "Taepodong carrier", "Kim-class frigate"], "correctIndex": 0},
        {"q": "How many U.S. sailors perished when North Korea shot down an EC-121 in 1969?", "choices": ["15 sailors", "24 sailors", "31 sailors", "83 sailors"], "correctIndex": 2},
        {"q": "North Korea set a record in 2022 by executing a total of how many missile launches?", "choices": ["26", "45", "69", "80"], "correctIndex": 2},

        // --- Iran Strategy & Proxies (4/C LO 4) ---
        {"q": "Iran seeks to erode U.S. influence in the Middle East by backing which of these groups?", "choices": ["Hamas, Hezbollah, and the Houthis", "The Taliban and Al-Qaida", "ISIS and the Muslim Brotherhood", "The Free Syrian Army"], "correctIndex": 0},
        {"q": "What was the name of the 2015 agreement that restricted Iran's nuclear program?", "choices": ["SALT II", "Joint Comprehensive Plan of Action (JCPOA)", "Camp David Accords", "The Tehran Treaty"], "correctIndex": 1},
        {"q": "Which June 2025 U.S. operation destroyed 3 Iranian nuclear sites using over 125 aircraft?", "choices": ["Operation Desert Shield", "Operation Midnight Hammer", "Operation Neptune Spear", "Operation Enduring Freedom"], "correctIndex": 1},
        {"q": "Iranian support for which group enables attacks against shipping near the Bab el Mandeb Strait?", "choices": ["Hezbollah", "Hamas", "The Houthis", "Basij"], "correctIndex": 2},

        // --- Iran Military Capabilities (4/C LO 5) ---
        {"q": "Which Iranian naval force emphasizes an asymmetric doctrine and operates in the Persian Gulf?", "choices": ["IRIN", "IRGCN", "Basij", "Qods Force"], "correctIndex": 1},
        {"q": "Iran has the largest inventory of what type of weapon in the Middle East?", "choices": ["Aircraft carriers", "Ballistic missiles", "Nuclear submarines", "Stealth fighters"], "correctIndex": 1},
        {"q": "What does FIAC stand for in the context of Iranian naval threats?", "choices": ["Fast Inshore Attack Craft", "First Iranian Air Combat", "Fixed Inshore Army Command", "Fleet Interdiction Air Craft"], "correctIndex": 0},
        {"q": "Nearly what percentage of the world's natural gas shipped on tankers passes through the Strait of Hormuz?", "choices": ["10%", "20%", "30%", "50%"], "correctIndex": 2},
        {"q": "The Shahab-3 is a road-mobile missile with a maximum range of approximately how many miles?", "choices": ["500 miles", "1,242 miles", "3,000 miles", "5,000 miles"], "correctIndex": 1},

        // --- Iran Recent Incidents (4/C LO 6) ---
        {"q": "In June 2019, Iran shot down which U.S. unmanned aircraft in international airspace?", "choices": ["MQ-9 Reaper", "RQ-4A Global Hawk BAMS-D", "MQ-4C Triton", "RQ-20 Puma"], "correctIndex": 1},
        {"q": "The U.S. drone strike that killed IRGC-QF Commander Qasem Soleimani occurred in which year?", "choices": ["2018", "2019", "2020", "2021"], "correctIndex": 2},
        {"q": "In April 2024, Iran launched its first-ever direct military strike against Israel using over how many drones and missiles?", "choices": ["50", "100", "200", "300"], "correctIndex": 3},
        {"q": "In September 2023, IRGCN vessels committed which unsafe act against a U.S. helicopter?", "choices": ["Ramming attempt", "Shone a laser multiple times", "Fired machine guns", "Launched a drone"], "correctIndex": 1}
  ],
  },
];

/* ---------- STORAGE KEYS ---------- */
const STORAGE_TOPICS = "proknow_topics_code_v1"; // stores any edits you choose to persist later
const STORAGE_SCORE = "proknow_score_v1";
const STORAGE_SETTINGS = "proknow_settings_v1";

/* ---------- STATE ---------- */
let TOPICS = structuredClone(DEFAULT_TOPICS);
let activeTopic = TOPICS[0];
let activeQuestion = null;

let answered = false;
let timerId = null;
let timeLeft = 0;

/* ---------- DOM ---------- */
const topicListEl = document.getElementById("topicList");
const topicTitleEl = document.getElementById("topicTitle");
const topicDescEl = document.getElementById("topicDesc");
const questionTextEl = document.getElementById("questionText");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

const overallScoreEl = document.getElementById("overallScore");
const topicScoreEl = document.getElementById("topicScore");
const timeLeftEl = document.getElementById("timeLeft");

const timePerQEl = document.getElementById("timePerQ");
const autoAdvanceEl = document.getElementById("autoAdvance");
const resetScoreBtn = document.getElementById("resetScoreBtn");

/* ---------- SCORE MODEL ---------- */
let score = loadScore();

/* ---------- SETTINGS ---------- */
let settings = loadSettings();
applySettingsToUI();

/* =========================
   INIT
   ========================= */
renderTopics();
setActiveTopic(activeTopic?.id || TOPICS[0]?.id);

/* =========================
   UI + QUIZ LOGIC
   ========================= */

function renderTopics() {
  topicListEl.innerHTML = "";
  TOPICS.forEach((t) => {
    const btn = document.createElement("button");
    btn.className = "topic-btn" + (t.id === activeTopic.id ? " active" : "");
    const count = (t.questions?.length || 0);
    btn.textContent = `${t.title} (${count})`;
    btn.addEventListener("click", () => setActiveTopic(t.id));
    topicListEl.appendChild(btn);
  });
}

function setActiveTopic(topicId) {
  const found = TOPICS.find((t) => t.id === topicId);
  if (!found) return;
  activeTopic = found;
  renderTopics();
  renderHeader();
  renderPracticeLinks();
  nextQuestion();
}

function renderHeader() {
  topicTitleEl.textContent = activeTopic.title;
  topicDescEl.textContent = activeTopic.desc || "";
  updateScoreUI();
}

function pickRandomQuestion(topic) {
  if (!topic.questions || topic.questions.length === 0) {
    return {
      q: "No questions for this chapter yet.",
      choices: ["OK"],
      correctIndex: 0,
    };
  }
  const idx = Math.floor(Math.random() * topic.questions.length);
  return topic.questions[idx];
}

function renderPracticeLinks() {
  const ul = document.getElementById("practiceLinks");
  ul.innerHTML = "";

  const links = (activeTopic.practiceLinks || []).filter(l => l && l.label && l.url);

  if (!links.length) {
    const li = document.createElement("li");
    li.textContent = "No links yet for this chapter.";
    ul.appendChild(li);
    return;
  }

  links.forEach((l) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = l.label;
    li.appendChild(a);
    ul.appendChild(li);
  });
}

function setFeedback(text, type) {
  feedbackEl.textContent = text;
  feedbackEl.className = "feedback " + (type || "");
}

function nextQuestion() {
  answered = false;
  setFeedback("", "");

  activeQuestion = pickRandomQuestion(activeTopic);
  questionTextEl.textContent = activeQuestion.q;

  choicesEl.innerHTML = "";
  activeQuestion.choices.forEach((choiceText, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choiceText;
    btn.addEventListener("click", () => handleAnswer(i));
    choicesEl.appendChild(btn);
  });

  startTimer();
}

function disableChoices() {
  [...choicesEl.querySelectorAll("button.choice")].forEach((b) => (b.disabled = true));
}

function markCorrectWrong(selectedIndex) {
  const buttons = [...choicesEl.querySelectorAll("button.choice")];
  buttons.forEach((b, i) => {
    if (i === activeQuestion.correctIndex) b.classList.add("correct");
    if (i === selectedIndex && selectedIndex !== activeQuestion.correctIndex) b.classList.add("wrong");
  });
}

function stopTimer() {
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function startTimer() {
  stopTimer();
  const seconds = clampInt(parseInt(settings.timePerQ, 10), 5, 300);
  timeLeft = seconds;
  timeLeftEl.textContent = `${timeLeft}s`;

  timerId = setInterval(() => {
    timeLeft -= 1;
    timeLeftEl.textContent = `${timeLeft}s`;

    if (timeLeft <= 0) {
      stopTimer();
      if (!answered) handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  answered = true;
  disableChoices();
  markCorrectWrong(-1);
  setFeedback("Time’s up ⏱️", "bad");
  recordScore(false);
  if (settings.autoAdvance) autoAdvanceSoon();
}

function autoAdvanceSoon() {
  setTimeout(() => nextQuestion(), 700);
}

function handleAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  stopTimer();
  disableChoices();
  markCorrectWrong(selectedIndex);

  const isCorrect = selectedIndex === activeQuestion.correctIndex;
  setFeedback(isCorrect ? "Correct ✅" : "Incorrect ❌", isCorrect ? "good" : "bad");

  recordScore(isCorrect);

  if (settings.autoAdvance) autoAdvanceSoon();
}

/* =========================
   SCORE TRACKING
   ========================= */

function ensureTopicScore(topicId) {
  if (!score.byTopic[topicId]) score.byTopic[topicId] = { correct: 0, total: 0 };
}

function recordScore(isCorrect) {
  ensureTopicScore(activeTopic.id);

  score.overall.total += 1;
  score.byTopic[activeTopic.id].total += 1;

  if (isCorrect) {
    score.overall.correct += 1;
    score.byTopic[activeTopic.id].correct += 1;
  }

  saveScore();
  updateScoreUI();
}

function updateScoreUI() {
  ensureTopicScore(activeTopic.id);

  overallScoreEl.textContent = `${score.overall.correct} / ${score.overall.total}`;
  const t = score.byTopic[activeTopic.id];
  topicScoreEl.textContent = `${t.correct} / ${t.total}`;
}

function resetScore() {
  score = { overall: { correct: 0, total: 0 }, byTopic: {} };
  saveScore();
  updateScoreUI();
  setFeedback("Score reset.", "");
}

resetScoreBtn.addEventListener("click", () => resetScore());

/* =========================
   SETTINGS
   ========================= */

timePerQEl.addEventListener("change", () => {
  settings.timePerQ = clampInt(parseInt(timePerQEl.value, 10), 5, 300);
  saveSettings();
  startTimer();
});

autoAdvanceEl.addEventListener("change", () => {
  settings.autoAdvance = !!autoAdvanceEl.checked;
  saveSettings();
});

shuffleBtn.addEventListener("click", () => nextQuestion());
nextBtn.addEventListener("click", () => nextQuestion());

function applySettingsToUI() {
  if (!settings) settings = { timePerQ: 20, autoAdvance: true };
  timePerQEl.value = settings.timePerQ ?? 20;
  autoAdvanceEl.checked = !!settings.autoAdvance;
}

function loadSettings() {
  try {
    const raw = localStorage.getItem(STORAGE_SETTINGS);
    if (!raw) return { timePerQ: 20, autoAdvance: true };
    const parsed = JSON.parse(raw);
    return {
      timePerQ: clampInt(parseInt(parsed.timePerQ, 10), 5, 300) || 20,
      autoAdvance: !!parsed.autoAdvance,
    };
  } catch {
    return { timePerQ: 20, autoAdvance: true };
  }
}

function saveSettings() {
  localStorage.setItem(STORAGE_SETTINGS, JSON.stringify(settings));
}

/* =========================
   PERSISTENCE
   ========================= */

function loadScore() {
  try {
    const raw = localStorage.getItem(STORAGE_SCORE);
    if (!raw) return { overall: { correct: 0, total: 0 }, byTopic: {} };
    const parsed = JSON.parse(raw);
    if (!parsed?.overall || !parsed?.byTopic) throw new Error("bad score");
    return parsed;
  } catch {
    return { overall: { correct: 0, total: 0 }, byTopic: {} };
  }
}

function saveScore() {
  localStorage.setItem(STORAGE_SCORE, JSON.stringify(score));
}

/* =========================
   UTILS
   ========================= */

function clampInt(n, min, max) {
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, n));
}
