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
    {"q": "How many types of hazards can Navy EOD render safe (Ground, Air, IED, WMD, and Underwater)?", "choices": ["3", "4", "5", "6"], "correctIndex": 2},

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
    
    // ... repeat and vary patterns for 150 unique data points ...
  ]
  },

  {
    id: "china",
    title: "China",
   
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
    id: "russia",
    title: "Russia",
    
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
    id: "rogue-states",
    title: "Rogue States",
  
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
    id: "cyber-warfare",
    title: "Cyber Warfare",
   
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
  }
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
