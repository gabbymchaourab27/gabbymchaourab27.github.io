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
      {"q": "Which aircraft is described as defining close air support as 'flying artillery'?", "choices": ["AH-1Z Super Cobra/Viper", "KC-130J Hercules", "UH-1Y Venom", "F-35B Lightning II"], "correctIndex": 0},
      {"q": "The AH-1 has played a major role in every U.S. military conflict since:", "choices": ["War of 1812", "Vietnam", "World War I", "Korean War only"], "correctIndex": 1},
      {"q": "Which capability is specifically mentioned for the AH-1's composite rotor blades/tail booms?", "choices": ["Land on aircraft carriers only", "Refuel other aircraft", "Withstand 23mm cannon fire", "Operate underwater"], "correctIndex": 2},
      {"q": "The UH-1 is described as a microcosm of Marine aviation because it blends multiple functions such as:", "choices": ["Only logistics and supply functions", "Offensive Air Support, Assault Support, Command and Control, and Aerial Reconnaissance", "Strategic bombing, nuclear deterrence, space control, and ballistic missile defense", "Only air-to-air combat functions"], "correctIndex": 1},
      {"q": "The four-bladed UH-1Y Venom replaced which helicopter in 2014 (per the chapter)?", "choices": ["AH-64", "UH-60", "CH-47", "UH-1N"], "correctIndex": 3},
      {"q": "Compared to the UH-1N, the UH-1Y features a 50% increase in:", "choices": ["Wing span and payload", "Range and speed", "Crew size and rotor diameter", "Fuel capacity and armor"], "correctIndex": 1},
      {"q": "The chapter notes the UH-1Y offers about a 125% boost in:", "choices": ["Top speed", "Payload", "Cabin pressure", "Flight time"], "correctIndex": 1},
      {"q": "Which helicopter is described as the heavy-lift helicopter of the Marine Corps?", "choices": ["CH-53E Sea Stallion/Super Stallion", "UH-1Y Venom", "MV-22 Osprey", "AH-1Z Viper"], "correctIndex": 0},
      {"q": "The CH-53E can carry a 26,000-pound:", "choices": ["Aircraft carrier deck tractor", "Light Armored Vehicle", "Patrol boat", "Main battle tank"], "correctIndex": 1},
      {"q": "The CH-53E can carry 16 tons of cargo how far and back (per the chapter)?", "choices": ["10 miles and back", "50 miles and back", "500 miles and back", "200 miles and back"], "correctIndex": 1},
      {"q": "The CH-53E is compact enough to deploy on:", "choices": ["Only land bases", "Only submarines", "Amphibious assault ships", "Only large aircraft carriers"], "correctIndex": 2},
      {"q": "The CH-53E includes what sensor for night and all-weather navigation?", "choices": ["Lidar only", "Periscope", "Forward-looking infrared (FLIR)", "Sonar"], "correctIndex": 2},
      {"q": "Which statement matches the CH-53K plan described in the chapter?", "choices": ["It replaces the KC-130J and doubles fuel capacity", "It is the planned replacement for the aging CH-53E with three times lift and double combat radius", "It replaces the UH-1Y and adds stealth", "It replaces the F/A-18 and adds V/STOL"], "correctIndex": 1},
      {"q": "The MV-22 Osprey is best described as what type of aircraft?", "choices": ["Unmanned drone", "Attack helicopter only", "Fixed-wing bomber", "Tiltrotor"], "correctIndex": 3},
      {"q": "The chapter states the MV-22 can carry how many Marine combat troops?", "choices": ["40", "8", "24", "12"], "correctIndex": 2},
      {"q": "The MV-22 is designed for expeditionary assault, raid operations, cargo lift, and:", "choices": ["Special warfare", "Strategic nuclear deterrence", "Undersea warfare", "Ballistic missile defense"], "correctIndex": 0},
      {"q": "Which capability is explicitly listed for the MV-22?", "choices": ["Catapult launch only", "Hover at 40,000 feet for hours", "Vertical takeoff and landing and short takeoff and landing", "Underwater launch"], "correctIndex": 2},
      {"q": "Which Marine jet is described as usable in multiple missions and a key provider of close air support?", "choices": ["B-52 Stratofortress", "F-16 Fighting Falcon", "A-10 Thunderbolt II", "F/A-18 Hornet"], "correctIndex": 3},
      {"q": "The F/A-18 can be quickly configured for fighter or attack missions, or a combination of both, and is described as:", "choices": ["Only carrier-based bomber", "All-weather, day or night", "Only reconnaissance", "Only daytime fair-weather"], "correctIndex": 1},
      {"q": "Which weapon is listed as part of the F/A-18's nose section for close encounters?", "choices": ["A 30mm GAU-8", "A 6-barrel 20mm gun", "A 105mm cannon", "A railgun"], "correctIndex": 1},
      {"q": "Which missile is explicitly listed among the Hornet’s air-to-air options in the chapter?", "choices": ["AMRAAM", "Tomahawk", "Patriot", "Javelin"], "correctIndex": 0},
      {"q": "Which aircraft is the replacement for the aging F/A-18A/C (per the chapter)?", "choices": ["F/A-18E Super Hornet", "F-14 Tomcat", "AV-8B Harrier", "F-35B Lightning II"], "correctIndex": 3},
      {"q": "Which F-35 has V/STOL capability for the Marine Corps?", "choices": ["A-Variant", "B-Variant", "C-Variant", "D-Variant"], "correctIndex": 1},
      {"q": "The chapter notes Marine pilots also fly and deploy the Navy’s which F-35 as part of a Carrier Air Wing?", "choices": ["B-Variant only", "A-Variant", "C-Variant", "No variants"], "correctIndex": 2},
      {"q": "Which aircraft is described as a tactical tanker/transport and the workhorse of Marine Aviation?", "choices": ["P-8 Poseidon", "C-17 Globemaster III", "KC-130J Hercules", "E-2 Hawkeye"], "correctIndex": 2},
      {"q": "The KC-130 can carry more than how many gallons of fuel (per the chapter)?", "choices": ["6,000 gallons", "12,000 gallons", "2,000 gallons", "25,000 gallons"], "correctIndex": 1},
      {"q": "The chapter states the KC-130 can simultaneously refuel two aircraft at:", "choices": ["50 gallons a minute", "1,000 gallons a minute", "300 gallons a minute", "30 gallons a minute"], "correctIndex": 2},
      {"q": "Which mission is explicitly listed for the KC-130 besides refueling?", "choices": ["Strategic nuclear alert", "Undersea mine warfare", "Space launch", "Medevac operations"], "correctIndex": 3},
      {"q": "RQ-20 Puma is best described as a:", "choices": ["Hand-launched Small Unmanned Aircraft System", "Space satellite", "Ship-launched cruise missile", "Large strategic bomber"], "correctIndex": 0},
      {"q": "RQ-20 Puma directly supports organic reconnaissance requirements of:", "choices": ["Only theater headquarters", "Only submarines", "Battalion and below maneuver elements", "Only aircraft carriers"], "correctIndex": 2},
      {"q": "The RQ-20 Puma has a listed range of:", "choices": ["5 km", "50 km", "150 km", "15 km"], "correctIndex": 3},
      {"q": "The RQ-20 Puma has a listed endurance of:", "choices": ["8 hours", "120 minutes", "10 minutes", "30 minutes"], "correctIndex": 1},
      {"q": "The Puma sensor simultaneously provides EO, IR, and:", "choices": ["Laser designator only", "Radar jamming only", "Illuminator capabilities", "Sonobuoy deployment"], "correctIndex": 2},
      {"q": "Skyraider is described as suitable for immediate ISR, clandestine operations, payload delivery, and BLOS reconnaissance.", "choices": ["True", "Only for carrier defense", "False", "Only for strategic bombing"], "correctIndex": 0},
      {"q": "The chapter lists Skyraider’s maximum range as:", "choices": ["80 km", "3 km", "8 km", "15 km"], "correctIndex": 2},
      {"q": "The chapter lists Skyraider’s flight time as:", "choices": ["50 minutes", "120 minutes", "10 minutes", "5 hours"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Manpower Officer?", "choices": ["0302", "0102", "4402", "7599"], "correctIndex": 1},
      {"q": "Manpower Officer (0102) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Strategic nuclear deterrence operations", "Principal advisor on manpower staffing and administrative issues impacting unit readiness", "Managing embassy visa processing"], "correctIndex": 2},
      {"q": "A commander needs an officer to principal advisor on manpower staffing and administrative issues impacting unit readiness. Which MOS best fits?", "choices": ["7315", "0302", "0102", "7220"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Ground Intelligence Officer?", "choices": ["0207", "7210", "6002", "0203"], "correctIndex": 3},
      {"q": "Ground Intelligence Officer (0203) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Managing embassy visa processing", "Strategic nuclear deterrence operations", "Responsible for tactical planning/employment of ground surveillance and reconnaissance units"], "correctIndex": 3},
      {"q": "A commander needs an officer to responsible for tactical planning/employment of ground surveillance and reconnaissance units. Which MOS best fits?", "choices": ["0602", "0802", "1302", "0203"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Human Source Intelligence Officer?", "choices": ["7220", "0102", "4502", "0204"], "correctIndex": 3},
      {"q": "Human Source Intelligence Officer (0204) is primarily responsible for which of the following?", "choices": ["CI/HUMINT officer", "Managing embassy visa processing", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear"], "correctIndex": 0},
      {"q": "A commander needs an officer to ci/humint officer. Which MOS best fits?", "choices": ["3002", "0204", "4402", "4502"], "correctIndex": 1},
      {"q": "Which officer MOS code corresponds to: Signals Intelligence/Ground Electronic Warfare Officer?", "choices": ["4402", "0206", "1302", "7208"], "correctIndex": 1},
      {"q": "Signals Intelligence/Ground Electronic Warfare Officer (0206) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Commands/leads SIGINT/EW units", "Managing embassy visa processing"], "correctIndex": 2},
      {"q": "A commander needs an officer to commands/leads sigint/ew units. Which MOS best fits?", "choices": ["1705", "0206", "0204", "3002"], "correctIndex": 1},
      {"q": "Which officer MOS code corresponds to: Air Intelligence Officer?", "choices": ["7204", "0602", "1702", "0207"], "correctIndex": 3},
      {"q": "Air Intelligence Officer (0207) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Intelligence functional expert in Marine Air Wing", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear"], "correctIndex": 1},
      {"q": "A commander needs an officer to intelligence functional expert in marine air wing. Which MOS best fits?", "choices": ["7210", "0802", "3002", "0207"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Infantry Officer?", "choices": ["7204", "7599", "0302", "0402"], "correctIndex": 2},
      {"q": "Infantry Officer (0302) is primarily responsible for which of the following?", "choices": ["Trains Marines for ground combat missions", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Managing embassy visa processing"], "correctIndex": 0},
      {"q": "A commander needs an officer to trains marines for ground combat missions. Which MOS best fits?", "choices": ["1705", "0602", "1706", "0302"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Logistics Officer?", "choices": ["1705", "0402", "0102", "4502"], "correctIndex": 1},
      {"q": "Logistics Officer (0402) is primarily responsible for which of the following?", "choices": ["Plans/coordinates logistics", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Managing embassy visa processing"], "correctIndex": 0},
      {"q": "A commander needs an officer to plans/coordinates logistics. Which MOS best fits?", "choices": ["0206", "0204", "0402", "4402"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Communications Officer?", "choices": ["1302", "0602", "0203", "1302"], "correctIndex": 1},
      {"q": "Communications Officer (0602) is primarily responsible for which of the following?", "choices": ["Backbone for command and control", "Operating aircraft catapults and arresting gear", "Strategic nuclear deterrence operations", "Managing embassy visa processing"], "correctIndex": 0},
      {"q": "A commander needs an officer to backbone for command and control. Which MOS best fits?", "choices": ["0602", "1707", "0207", "4502"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Field Artillery Officer?", "choices": ["1302", "0802", "0203", "0204"], "correctIndex": 1},
      {"q": "Field Artillery Officer (0802) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Managing embassy visa processing", "Provides close-fire support", "Strategic nuclear deterrence operations"], "correctIndex": 2},
      {"q": "A commander needs an officer to provides close-fire support. Which MOS best fits?", "choices": ["1302", "0204", "0802", "7315"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Combat Engineer Officer?", "choices": ["1302", "0206", "0102", "3002"], "correctIndex": 0},
      {"q": "Combat Engineer Officer (1302) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Commands engineer units", "Managing embassy visa processing", "Strategic nuclear deterrence operations"], "correctIndex": 1},
      {"q": "A commander needs an officer to commands engineer units. Which MOS best fits?", "choices": ["7208", "4402", "1302", "0203"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Cyberspace Officer?", "choices": ["1702", "0203", "0302", "0802"], "correctIndex": 0},
      {"q": "Cyberspace Officer (1702) is primarily responsible for which of the following?", "choices": ["Plans/directs cyber personnel and systems", "Strategic nuclear deterrence operations", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear"], "correctIndex": 0},
      {"q": "A commander needs an officer to plans/directs cyber personnel and systems. Which MOS best fits?", "choices": ["0302", "1702", "4402", "7204"], "correctIndex": 1},
      {"q": "Which officer MOS code corresponds to: Cyberspace Warfare Development Officer?", "choices": ["0802", "0102", "0203", "1705"], "correctIndex": 3},
      {"q": "Cyberspace Warfare Development Officer (1705) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Manages cyber warfare development lifecycle", "Managing embassy visa processing"], "correctIndex": 2},
      {"q": "A commander needs an officer to manages cyber warfare development lifecycle. Which MOS best fits?", "choices": ["1705", "0206", "7204", "7599"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Maritime Space Officer?", "choices": ["4502", "1706", "1707", "7599"], "correctIndex": 1},
      {"q": "Maritime Space Officer (1706) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Integrates space capabilities of allies/partners/industry/USG into operational plans and execution for maritime freedom of action.", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear"], "correctIndex": 1},
      {"q": "A commander needs an officer to integrates space capabilities of allies/partners/industry/usg into operational plans and execution for maritime freedom of action.. Which MOS best fits?", "choices": ["1706", "7208", "7210", "7599"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Influence Officer?", "choices": ["7599", "0203", "0207", "1707"], "correctIndex": 3},
      {"q": "Influence Officer (1707) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Strategic nuclear deterrence operations", "Plans and supervises Influence Operations including MISO and CAO", "Managing embassy visa processing"], "correctIndex": 2},
      {"q": "A commander needs an officer to plans and supervises influence operations including miso and cao. Which MOS best fits?", "choices": ["1707", "0204", "7204", "7599"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Amphibious Assault Officer?", "choices": ["7208", "6002", "1803", "0602"], "correctIndex": 2},
      {"q": "Amphibious Assault Officer (1803) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Managing embassy visa processing", "Leads tactical employment of ACVs", "Operating aircraft catapults and arresting gear"], "correctIndex": 2},
      {"q": "A commander needs an officer to leads tactical employment of acvs. Which MOS best fits?", "choices": ["1803", "0802", "3002", "0102"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Ground Supply Officer?", "choices": ["0203", "3002", "1302", "0602"], "correctIndex": 1},
      {"q": "Ground Supply Officer (3002) is primarily responsible for which of the following?", "choices": ["Managing embassy visa processing", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Supervises PP&E and OM&S accountability"], "correctIndex": 3},
      {"q": "A commander needs an officer to supervises pp&e and om&s accountability. Which MOS best fits?", "choices": ["0802", "3404", "3002", "0204"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Financial Management Officer?", "choices": ["0802", "0204", "7599", "3404"], "correctIndex": 3},
      {"q": "Financial Management Officer (3404) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear", "Supervises policies/procedures for financial management of appropriated funds"], "correctIndex": 3},
      {"q": "A commander needs an officer to supervises policies/procedures for financial management of appropriated funds. Which MOS best fits?", "choices": ["1302", "0602", "6602", "3404"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Judge Advocate?", "choices": ["4402", "7208", "7204", "7315"], "correctIndex": 0},
      {"q": "Judge Advocate (4402) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Maintains caseload and advises Marines on legal issues", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear"], "correctIndex": 1},
      {"q": "A commander needs an officer to maintains caseload and advises marines on legal issues. Which MOS best fits?", "choices": ["0203", "4402", "7599", "7208"], "correctIndex": 1},
      {"q": "Which officer MOS code corresponds to: Communication Strategy & Operations Officer?", "choices": ["3404", "3404", "7220", "4502"], "correctIndex": 3},
      {"q": "Communication Strategy & Operations Officer (4502) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Strategic nuclear deterrence operations", "Managing embassy visa processing", "Develops communication plans"], "correctIndex": 3},
      {"q": "A commander needs an officer to develops communication plans. Which MOS best fits?", "choices": ["1705", "6602", "0207", "4502"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Military Police Officer?", "choices": ["4402", "6602", "0203", "5803"], "correctIndex": 3},
      {"q": "Military Police Officer (5803) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Provides law enforcement support", "Operating aircraft catapults and arresting gear", "Managing embassy visa processing"], "correctIndex": 1},
      {"q": "A commander needs an officer to provides law enforcement support. Which MOS best fits?", "choices": ["1803", "0204", "7315", "5803"], "correctIndex": 3},
      {"q": "Which officer MOS code corresponds to: Aircraft Maintenance Officer?", "choices": ["3002", "7210", "6002", "7210"], "correctIndex": 2},
      {"q": "Aircraft Maintenance Officer (6002) is primarily responsible for which of the following?", "choices": ["Managing embassy visa processing", "Supervises aircraft maintenance/repair", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear"], "correctIndex": 1},
      {"q": "A commander needs an officer to supervises aircraft maintenance/repair. Which MOS best fits?", "choices": ["6002", "7210", "0602", "6602"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Aviation Supply Officer?", "choices": ["0204", "7204", "6602", "3002"], "correctIndex": 2},
      {"q": "Aviation Supply Officer (6602) is primarily responsible for which of the following?", "choices": ["Operating aircraft catapults and arresting gear", "Managing embassy visa processing", "Strategic nuclear deterrence operations", "Manages aviation supply matters including budget, inventory, deployment, personnel support"], "correctIndex": 3},
      {"q": "A commander needs an officer to manages aviation supply matters including budget, inventory, deployment, personnel support. Which MOS best fits?", "choices": ["1702", "6602", "6002", "0802"], "correctIndex": 1},
      {"q": "Which officer MOS code corresponds to: Low Altitude Air Defense Officer?", "choices": ["3002", "7204", "0102", "0203"], "correctIndex": 1},
      {"q": "Low Altitude Air Defense Officer (7204) is primarily responsible for which of the following?", "choices": ["Commands GBAD/LAAD units", "Managing embassy visa processing", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear"], "correctIndex": 0},
      {"q": "A commander needs an officer to commands gbad/laad units. Which MOS best fits?", "choices": ["7204", "3404", "1302", "7208"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Air Support Control Officer?", "choices": ["7220", "7208", "0206", "1803"], "correctIndex": 1},
      {"q": "Air Support Control Officer (7208) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear", "Plans/directs/coordinations air support", "Managing embassy visa processing"], "correctIndex": 2},
      {"q": "A commander needs an officer to plans/directs/coordinations air support. Which MOS best fits?", "choices": ["7208", "0204", "1803", "7599"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Air Defense Control Officer?", "choices": ["0402", "0402", "0204", "7210"], "correctIndex": 3},
      {"q": "Air Defense Control Officer (7210) is primarily responsible for which of the following?", "choices": ["Managing embassy visa processing", "Operating aircraft catapults and arresting gear", "Works in TAOC", "Strategic nuclear deterrence operations"], "correctIndex": 2},
      {"q": "A commander needs an officer to works in taoc. Which MOS best fits?", "choices": ["7210", "7204", "1705", "0206"], "correctIndex": 0},
      {"q": "Which officer MOS code corresponds to: Air Traffic Control Officer?", "choices": ["0302", "0102", "1706", "7220"], "correctIndex": 3},
      {"q": "Air Traffic Control Officer (7220) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Watch/detachment commander", "Operating aircraft catapults and arresting gear", "Managing embassy visa processing"], "correctIndex": 1},
      {"q": "A commander needs an officer to watch/detachment commander. Which MOS best fits?", "choices": ["1706", "1707", "7220", "1705"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: UAS/MAGTF Electronic Warfare Officer?", "choices": ["7210", "7315", "0102", "1702"], "correctIndex": 1},
      {"q": "UAS/MAGTF Electronic Warfare Officer (7315) is primarily responsible for which of the following?", "choices": ["Managing embassy visa processing", "Employs UAS from ground control station", "Strategic nuclear deterrence operations", "Operating aircraft catapults and arresting gear"], "correctIndex": 1},
      {"q": "A commander needs an officer to employs uas from ground control station. Which MOS best fits?", "choices": ["0802", "7208", "7315", "1302"], "correctIndex": 2},
      {"q": "Which officer MOS code corresponds to: Flight Students?", "choices": ["7599", "0204", "1706", "4502"], "correctIndex": 0},
      {"q": "Flight Students (7599) is primarily responsible for which of the following?", "choices": ["Strategic nuclear deterrence operations", "Managing embassy visa processing", "Operating aircraft catapults and arresting gear", "Undergoing or awaiting flight training leading to designation as Naval Aviator."], "correctIndex": 3},
      {"q": "A commander needs an officer to undergoing or awaiting flight training leading to designation as naval aviator.. Which MOS best fits?", "choices": ["0203", "7599", "6602", "7315"], "correctIndex": 1},
      {"q": "Who led the first amphibious raid into the Bahamas in March 1776 (per the chapter)?", "choices": ["Captain (later Major) Samuel Nicholas", "Archibald Henderson", "Alfred A. Cunningham", "Presley O’Bannon"], "correctIndex": 0},
      {"q": "Samuel Nicholas is considered the first Marine Commandant because he:", "choices": ["Commanded the Navy’s carrier air wing", "Founded MARSOC", "Remained the senior Marine officer throughout the American Revolution", "Created Force Design 2030"], "correctIndex": 2},
      {"q": "After the Revolutionary War, the Marine Corps was formally re-established on what date (per the chapter)?", "choices": ["24 February 2006", "10 November 1775", "11 July 1798", "19 June 2015"], "correctIndex": 2},
      {"q": "Marines fought alongside Andrew Jackson in the defeat of the British at:", "choices": ["Inchon", "New Orleans", "Belleau Wood", "Gettysburg"], "correctIndex": 1},
      {"q": "In World War I, the 4th Marine Brigade earned the nickname:", "choices": ["Sky Soldiers", "Leathernecks", "Green Berets", "Devil Dogs"], "correctIndex": 3},
      {"q": "Marine aviation dates from what year (per the chapter)?", "choices": ["1775", "1912", "1798", "1868"], "correctIndex": 1},
      {"q": "During World War II, Marine Corps strength peaked at approximately:", "choices": ["85,000", "485,113", "48,511", "1,485,113"], "correctIndex": 1},
      {"q": "During World War II, how many Marines earned the Medal of Honor (per the chapter)?", "choices": ["28", "182", "82", "8"], "correctIndex": 2},
      {"q": "Landing at Inchon occurred in which war?", "choices": ["Korean War", "Vietnam War", "World War I", "Desert Storm"], "correctIndex": 0},
      {"q": "The last Marine ground troops were withdrawn from Korea in:", "choices": ["March 1955", "December 2004", "June 1971", "February 1991"], "correctIndex": 0},
      {"q": "Which statement best matches the informal mission summary in the chapter?", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)?", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure?", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements?", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and:", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift?", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 1)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 2)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 3)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 4)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 5)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 6)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 7)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 8)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 9)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 10)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 11)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 12)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 13)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 14)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 15)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 16)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 17)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 18)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 19)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 20)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 21)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 22)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 23)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 24)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 25)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 26)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 27)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 28)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 29)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 30)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 31)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 32)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 33)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 34)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 35)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 36)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 37)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 38)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 39)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 40)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 41)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 42)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 43)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 44)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 45)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 46)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 47)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 48)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 49)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 50)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 51)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 52)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 53)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 54)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 55)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 56)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 57)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 58)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3},
      {"q": "An MLR is described as a stand-in force that is mobile, low-signature, and: ( 59)", "choices": ["Persistent in the contact to blunt layers", "Designed for strategic bombing", "Centered on fixed bases", "Optimized for heavy armor concentrations"], "correctIndex": 0},
      {"q": "Which aircraft is specifically noted as the only Marine inventory aircraft the CH-53E cannot lift? ( 60)", "choices": ["UH-1Y", "KC-130", "F/A-18", "AH-1Z"], "correctIndex": 1},
      {"q": "Which statement best matches the informal mission summary in the chapter? ( 61)", "choices": ["Make Sailors, Win Seas, Return Citizens", "Make Marines, Win Battles, Return Quality Citizens", "Build Ships, Fly Planes, Win Wars", "Train Soldiers, Hold Ground, Return Veterans"], "correctIndex": 1},
      {"q": "Which idea reflects maneuver in time (per the chapter)? ( 62)", "choices": ["Generating a faster operating tempo than the enemy", "Avoiding all movement", "Always moving south", "Only changing uniforms quickly"], "correctIndex": 0},
      {"q": "Which MAGTF typically has a permanent structure? ( 63)", "choices": ["MEB", "MEU", "SPMAGTF", "MEF"], "correctIndex": 3},
      {"q": "Which MAGTF is typically stood up for specific theaters/engagements? ( 64)", "choices": ["MEU", "MEF", "SPMAGTF", "MEB"], "correctIndex": 3}
    ],
  },

  {
    id: "seal-eod",
    title: "SEAL/EOD",
   
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
