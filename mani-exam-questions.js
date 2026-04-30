// Manicurist (Nail Technology) State Board Practice Exam — Question Bank
// Updated: April 2026 PSI Content Outline Weighting
// April 1, 2026 PSI Categories: Safety & Infection Control ~45% | Nail Care ~25%
// Client Consultation & Nail Analysis ~20% | Skin Care ~10%
// Total questions: 120+  (2× the 60-question exam)

const questions = [

  // ─── SAFETY & INFECTION CONTROL (50%) ────────────────────────────────────

  {
    q: "A client presents with green discoloration under a nail tip that was applied three weeks ago. The CORRECT course of action is to:",
    opts: [
      "Remove the enhancement, clean the nail, and apply a fresh tip",
      "Apply antifungal nail treatment through the enhancement without removal",
      "Remove the enhancement, advise the client to see a physician, and do not perform any nail service on the affected digit",
      "Sand down the enhancement surface to expose the discoloration to air"
    ],
    ans: 2,
    exp: "Green nail syndrome (caused by Pseudomonas bacteria) requires removal of the enhancement and referral to a physician. Services must not be performed on infected nails. Performing any nail service over an active infection is a serious infection control violation."
  },
  {
    q: "A nail technician notices a client has onychomycosis (nail fungus) on two toenails. The technician should:",
    opts: [
      "Sanitize the tools thoroughly and proceed with the pedicure",
      "Apply antifungal nail polish and proceed",
      "Decline to perform services on the affected nails and refer the client to a physician",
      "Use a UV gel overlay to seal and protect the infected nails"
    ],
    ans: 2,
    exp: "Nail fungus (onychomycosis) is a communicable infection. Nail technicians cannot treat nail diseases. Services on infected nails risk spreading the infection to other nails and cross-contaminating tools. The client must be referred to a physician for treatment."
  },
  {
    q: "Under California regulations, pedicure foot basin equipment must be cleaned and disinfected:",
    opts: [
      "Once per week",
      "Once per day after the last client",
      "After each client use — cleaned, disinfected, and rinsed",
      "Only when visible debris is present"
    ],
    ans: 2,
    exp: "California requires pedicure foot basins to be cleaned (removing all debris), disinfected with an EPA-registered disinfectant, and rinsed after each client use. Failure to comply is one of the most common sanitation violations and a significant infection risk."
  },
  {
    q: "Which type of disinfectant is SPECIFICALLY required for EPA-registered salon disinfectants used on non-porous nail implements?",
    opts: [
      "Sterilant-level product capable of destroying all spores",
      "A product that is bactericidal, virucidal, and fungicidal with an EPA registration number",
      "Bleach at any available concentration",
      "Isopropyl alcohol at 50% concentration"
    ],
    ans: 1,
    exp: "Salon disinfectants must carry an EPA registration number and be labeled bactericidal (kills bacteria), virucidal (kills viruses), and fungicidal (kills molds and fungi). Products not meeting all three criteria are insufficient for salon use in California."
  },
  {
    q: "What is the CORRECT order of nail implement processing?",
    opts: [
      "Disinfect → Clean → Store",
      "Rinse → Disinfect → Clean → Store in covered container",
      "Clean (remove all debris) → Disinfect → Rinse → Dry → Store in covered container",
      "Sterilize → Clean → Store in open container"
    ],
    ans: 2,
    exp: "Proper implement processing requires: (1) Clean — physically remove all debris with soap and water or scrubbing; (2) Disinfect — immerse in EPA-registered disinfectant for required contact time; (3) Rinse; (4) Dry; (5) Store in a covered, clean container. Disinfectants cannot penetrate organic matter."
  },
  {
    q: "Methyl methacrylate (MMA) monomer is banned for use in nail coatings in California because:",
    opts: [
      "It produces a stronger bond than ethyl methacrylate",
      "It creates rigid enhancements that resist removal, can damage the nail plate, and poses health risks including allergic reactions and chemical burns",
      "It is too expensive for commercial use in salons",
      "It does not adhere well to natural nails and causes excessive lifting"
    ],
    ans: 1,
    exp: "MMA creates enhancements that are rigid and extremely hard to remove without shredding the nail plate. It does not dissolve in standard acetone removers and has a high rate of causing sensitization, allergic reactions, and injury. The FDA and most state boards, including California's, prohibit its use."
  },
  {
    q: "A client's intake form reveals she is allergic to formaldehyde. Which nail product ingredient should the nail technician MOST carefully avoid?",
    opts: [
      "Ethyl acetate",
      "Toluene",
      "Tosylamide/formaldehyde resin (commonly used in nail hardeners and polishes)",
      "Dibutyl phthalate (DBP)"
    ],
    ans: 2,
    exp: "Tosylamide/formaldehyde resin is a formaldehyde derivative used in nail hardeners and some polishes that can trigger reactions in formaldehyde-sensitive individuals. Many '3-free' and '5-free' formulations eliminate this ingredient. It is distinct from free formaldehyde but cross-reactions are common."
  },
  {
    q: "A nail technician develops a persistent itchy rash on her fingers after working with acrylic products. This is MOST likely:",
    opts: [
      "Psoriasis triggered by repeated hand washing",
      "Occupational allergic contact dermatitis to methacrylate monomers",
      "Eczema unrelated to work",
      "A reaction to disinfectant residue on implements"
    ],
    ans: 1,
    exp: "Prolonged or repeated skin exposure to uncured methacrylate monomers (including ethyl methacrylate in acrylics and gel systems) can cause occupational allergic contact dermatitis. Once sensitized, even trace exposure triggers a reaction. Proper ventilation, gloves, and avoiding skin contact with uncured product are essential preventive measures."
  },
  {
    q: "The PRIMARY health risk from nail dust generated during filing and drills is:",
    opts: [
      "Skin irritation from direct contact",
      "Inhalation of fine particulate matter that can damage the respiratory system",
      "Cross-contamination of other clients via the workstation",
      "Clogging of nail equipment"
    ],
    ans: 1,
    exp: "Fine nail dust — from natural nail, acrylic, or gel filing — is a respiratory hazard. Inhalation of fine particles can cause or worsen asthma and other pulmonary conditions. A properly ventilated workstation or local exhaust ventilation (dust collector) is essential, along with wearing an appropriate dust mask."
  },
  {
    q: "When performing a manicure, the nail technician finds she has run out of fresh disinfectant solution. The CORRECT action is to:",
    opts: [
      "Continue using the existing solution since it is only slightly depleted",
      "Use rubbing alcohol as a substitute",
      "Stop nail services until fresh, properly mixed disinfectant is prepared",
      "Wipe implements with soap and water as a temporary measure"
    ],
    ans: 2,
    exp: "Nail services must not be performed without properly prepared, EPA-registered disinfectant. An insufficient or depleted solution does not meet infection control requirements. Rubbing alcohol and soap/water do not meet the bactericidal/virucidal/fungicidal standard required by California regulations."
  },
  {
    q: "A nail technician notices a client has a wart (verruca) on her finger. What is the appropriate response?",
    opts: [
      "Apply nail enhancement products over the wart to protect it",
      "Pop the wart with a lancet and sanitize the area before proceeding",
      "Avoid the affected area entirely during the service and refer the client to a physician",
      "Use high-frequency current to treat the wart"
    ],
    ans: 2,
    exp: "Warts (verrucae) are caused by the human papillomavirus (HPV) and are contagious. Nail technicians cannot treat warts. The affected area should be avoided during service to prevent spread. The client must be referred to a physician for treatment."
  },
  {
    q: "Porous implements (files, buffers, orangewood sticks) used on a client must be:",
    opts: [
      "Disinfected in EPA-registered solution and reused",
      "Washed with soap and water and stored for the same client's next visit",
      "Discarded after each client, as they cannot be properly disinfected",
      "Sterilized in an autoclave before reuse"
    ],
    ans: 2,
    exp: "Porous implements such as nail files, buffers, and orangewood sticks cannot be properly disinfected because their porous surface traps organic material and pathogens. They must be discarded after each use. Non-porous metal implements may be cleaned and disinfected."
  },
  {
    q: "What is the purpose of wearing a properly fitted mask during nail services?",
    opts: [
      "To protect the client from the technician's exhaled breath",
      "To meet state licensing requirements only",
      "To reduce inhalation of nail dust and chemical vapors that can cause respiratory harm",
      "To prevent product taste when working near the client's hands"
    ],
    ans: 2,
    exp: "Nail dust (from filing acrylics, gels, or natural nails) and chemical vapors (from monomers and removers) are respiratory hazards. Wearing a fitted dust mask or respirator — not a surgical mask, which does not filter fine particles — reduces inhalation exposure."
  },
  {
    q: "The term 'Standard Precautions' in the nail salon context means:",
    opts: [
      "Using gloves only when a client discloses a bloodborne illness",
      "Treating all blood and body fluids from every client as potentially infectious, regardless of known health status",
      "Wearing gloves exclusively during chemical services",
      "Sanitizing hands after each service only"
    ],
    ans: 1,
    exp: "Standard Precautions require treating ALL human blood and body fluids as potentially infectious at all times. This applies whether or not a client discloses any health condition — you cannot assume safety based on appearance or client disclosure."
  },
  {
    q: "If a client's skin is accidentally nicked during a cuticle service and bleeding occurs, the nail technician should FIRST:",
    opts: [
      "Apply nail oil to the wound and continue the service",
      "Ask the client to apply pressure while the technician continues on other nails",
      "Stop the service, put on gloves if not already wearing them, apply pressure with sterile gauze, and then apply antiseptic",
      "Rinse the wound with acetone to disinfect the area"
    ],
    ans: 2,
    exp: "When blood is present, Standard Precautions apply. The technician must don gloves before touching the wound, apply pressure to stop bleeding, apply antiseptic, and properly dispose of all contaminated materials. Continuing the service violates infection control protocol."
  },
  {
    q: "Foot spas with jets or pipes are particularly prone to contamination because:",
    opts: [
      "The heat of the water accelerates chemical breakdown of disinfectants",
      "Bacteria form biofilms in the internal tubing that resist standard disinfection unless specific cleaning protocols are followed",
      "Foot baths are made of porous plastic that absorbs bacteria permanently",
      "Clients' feet introduce antibiotics that kill beneficial bacteria"
    ],
    ans: 1,
    exp: "Piped and jet foot spas harbor biofilms in internal components and tubing. Biofilms are colonies of microorganisms protected by a sticky matrix that resists disinfectants. California requires specific, stringent cleaning and disinfection protocols for these systems after every client."
  },
  {
    q: "Ventilation in a nail salon is important PRIMARILY because:",
    opts: [
      "It helps products dry faster on clients' nails",
      "It prevents chemical fumes and nail dust from accumulating to harmful concentration levels",
      "Clients feel more comfortable when air circulates",
      "It prevents the UV lamps from overheating"
    ],
    ans: 1,
    exp: "Nail salons use chemicals that produce vapors (acetone, monomers, gel primers) and generate fine dust during filing. Without adequate ventilation, these accumulate to levels that can cause eye and respiratory irritation, sensitization, and long-term health problems for both the technician and client."
  },
  {
    q: "A nail technician should NEVER perform nail services on a client if the client has:",
    opts: [
      "Mild ridging of the nail plate",
      "Pale pink nail coloring",
      "Signs of nail infection such as redness, swelling, pus, or broken skin around the nail",
      "Slightly dry cuticles"
    ],
    ans: 2,
    exp: "Signs of infection (redness, swelling, pus, broken skin, tenderness) indicate a condition requiring medical treatment. Performing any nail service over an active infection risks spreading the infection and causing additional harm. The client must be referred to a physician."
  },
  {
    q: "Which of the following is a bloodborne pathogen of greatest concern in the nail salon?",
    opts: [
      "Tinea unguium (nail fungus)",
      "Hepatitis B virus (HBV) and Human Immunodeficiency Virus (HIV)",
      "Staphylococcus epidermidis",
      "Candida albicans"
    ],
    ans: 1,
    exp: "HBV and HIV are bloodborne pathogens transmitted through blood contact — a realistic risk in nail services where skin may be nicked. HBV can survive on surfaces for up to 7 days. Tinea and Candida are fungal infections; Staphylococcus is a bacterial skin pathogen, but the bloodborne pathogens pose the most serious systemic risk."
  },
  {
    q: "OSHA requires that salon employees have access to Safety Data Sheets (SDS) for all hazardous chemicals. Which section of the SDS details proper storage of a product?",
    opts: [
      "Section 2 — Hazard Identification",
      "Section 7 — Handling and Storage",
      "Section 11 — Toxicological Information",
      "Section 14 — Transport Information"
    ],
    ans: 1,
    exp: "The 16-section OSHA SDS format places handling and storage instructions in Section 7. Section 2 covers hazard identification, Section 11 covers toxicological data, and Section 14 covers transport information."
  },
  {
    q: "The correct procedure for disinfecting a glass fingerbowl between clients is to:",
    opts: [
      "Rinse with hot water only, as glass is self-sanitizing",
      "Wipe with a paper towel dampened with quaternary ammonium solution",
      "Wash with soap and water, immerse in or wipe down with EPA-registered disinfectant for the required contact time, then rinse and dry",
      "Spray disinfectant inside the bowl, wait 10 seconds, then rinse"
    ],
    ans: 2,
    exp: "Non-porous salon equipment must be cleaned (remove all debris) first, then disinfected with EPA-registered disinfectant for the full contact time specified on the label, then rinsed and dried. Shortcuts — including brief spraying or hot water alone — do not achieve the required level of disinfection."
  },
  {
    q: "Which chemical safety rule is MOST critical when working with UV/LED gel systems?",
    opts: [
      "Always apply gel in direct sunlight for maximum curing speed",
      "Avoid getting uncured gel on skin, as repeated skin contact with uncured product causes sensitization and allergic reactions",
      "Use any UV lamp regardless of the manufacturer's gel recommendation",
      "Wash hands with gel cleanser immediately after each coat application"
    ],
    ans: 1,
    exp: "Uncured gel monomer (oligomers/acrylates) is the primary sensitizer in gel nail systems. Skin contact with uncured product can lead to occupational allergic contact dermatitis. Using gloves, avoiding flooding cuticles, and ensuring complete curing minimizes this risk."
  },
  {
    q: "A nail technician is about to begin a pedicure when she notices the client has several small open sores on her lower leg. She should:",
    opts: [
      "Proceed if the sores are above the ankle and won't contact the foot basin",
      "Cover the sores with waterproof bandages and proceed",
      "Decline the pedicure service and refer the client to a physician",
      "Perform only the foot massage portion and skip the soak"
    ],
    ans: 2,
    exp: "Open sores on the lower leg or foot represent an infection risk for both the client (risk of introducing pathogens into a wound) and future clients (contamination of equipment). The service should be declined and the client referred to a physician for evaluation."
  },
  {
    q: "Which of the following correctly describes the difference between cleaning and disinfecting?",
    opts: [
      "Cleaning destroys pathogens; disinfecting removes visible debris",
      "Cleaning removes visible dirt and debris; disinfecting uses chemicals to destroy most pathogens (but not bacterial spores) on surfaces",
      "Cleaning and disinfecting are identical processes that can be done in any order",
      "Disinfecting removes debris; cleaning destroys viruses only"
    ],
    ans: 1,
    exp: "Cleaning is the mechanical removal of visible dirt and debris using soap/water or detergent. Disinfecting uses specific EPA-registered chemicals to destroy most pathogens on surfaces. Cleaning MUST occur before disinfecting because disinfectants cannot penetrate organic matter."
  },
  {
    q: "The 'scope of practice' for a California-licensed manicurist includes services on:",
    opts: [
      "All areas from the knees down and all areas of the hands and forearms",
      "Hands, nails, forearms up to the elbow, and feet, ankles, and lower legs up to the knee",
      "Hands and nails only — no leg or foot massage",
      "Any area of the body that involves nail care"
    ],
    ans: 1,
    exp: "California-licensed manicurists are authorized to perform services on hands, nails, and forearms (up to the elbow) and on feet, ankles, and lower legs (up to the knee), including nail services, massage, and related treatments within those areas."
  },
  {
    q: "Antifungal nail products marketed to consumers are classified by the FDA as:",
    opts: [
      "Cosmetics",
      "Medical devices",
      "OTC drugs, because they claim to affect the structure or function of the body",
      "Professional use only cosmetics"
    ],
    ans: 2,
    exp: "Products that claim to treat or prevent nail fungus are making drug claims (affecting bodily function/structure) and are regulated as OTC drugs by the FDA. Nail technicians cannot prescribe or apply drug products to treat nail disease — only physicians can."
  },
  {
    q: "Which of the following is the BEST practice to prevent cross-contamination when using nail polish?",
    opts: [
      "Dip the brush directly into the bottle and wipe off excess before application",
      "Pour small amounts of polish onto a disposable palette for each client; never return used polish to the bottle",
      "Use the same bottle for all clients and clean the bottle opening with alcohol between uses",
      "Cap the bottle tightly between coats to prevent contamination"
    ],
    ans: 1,
    exp: "Direct application from the bottle, where the brush contacts the nail plate, can contaminate the entire bottle. Dispensing small amounts to a disposable palette eliminates this risk. Returning contaminated polish to the bottle can spread infection."
  },
  {
    q: "A client asks whether the nail salon sterilizes its metal implements. The MOST accurate response is:",
    opts: [
      "'Yes, we use an autoclave to sterilize all implements between clients'",
      "'We use EPA-registered disinfectants, which destroy most pathogens on non-porous implements'",
      "'Our implements are single-use and discarded after each client'",
      "'We use UV light boxes to sterilize our tools'"
    ],
    ans: 1,
    exp: "Most nail salons use EPA-registered hospital-grade disinfectants on non-porous metal implements — this is disinfection, not sterilization. UV light boxes do not sterilize. True sterilization (autoclave) destroys all microbial life but is typically used for implements that penetrate skin, not standard manicure tools."
  },
  {
    q: "Hepatitis C (HCV) is a bloodborne pathogen that is MOST commonly transmitted in nail salons through:",
    opts: [
      "Sharing nail polish between clients",
      "Inhalation of nail dust during filing",
      "Contact with blood from contaminated implements or client skin that has been nicked",
      "Skin-to-skin contact during hand massage"
    ],
    ans: 2,
    exp: "HCV is transmitted through direct blood-to-blood contact. In nail salons, nicks from cuticle nippers, files, or other implements that were not properly cleaned and disinfected are the primary transmission risk. Proper implement disinfection between clients is the critical preventive measure."
  },
  {
    q: "A California state board inspector finds implement disinfectant that is visibly cloudy and full of debris. The LIKELY result is:",
    opts: [
      "A written warning only, as debris does not affect disinfectant chemistry",
      "A citation and possible fine, as contaminated solution is not considered active disinfectant",
      "No action, as the solution was prepared correctly that morning",
      "Immediate license revocation"
    ],
    ans: 1,
    exp: "Contaminated, cloudy disinfectant solution cannot be relied upon to achieve the required kill. California regulations require clean, properly maintained disinfectant. An inspector finding degraded solution will cite the salon for an infection control violation."
  },
  {
    q: "When using an electric nail file (e-file), which safety practice is MOST critical?",
    opts: [
      "Using the highest RPM setting for efficiency",
      "Using appropriate bit speed, avoiding skin contact, and wearing a mask to prevent inhaling nail dust",
      "Applying the bit perpendicular to the nail for maximum material removal",
      "Only performing e-file services on gel enhancements, not natural nails"
    ],
    ans: 1,
    exp: "E-files generate significant heat (risk of nail plate burns), vibration (nerve and tissue damage), and fine dust (respiratory hazard). Correct bit speed, angle, and technique are essential to avoid injury. A dust mask or respirator protects against inhalation of fine particulate matter."
  },

  // ─── SAFETY & INFECTION CONTROL (continued — additional questions) ─────────

  {
    q: "Which section of the Safety Data Sheet (SDS) lists the first aid measures a worker should take if exposed to a hazardous chemical?",
    opts: [
      "Section 2 — Hazard Identification",
      "Section 4 — First Aid Measures",
      "Section 8 — Exposure Controls/Personal Protection",
      "Section 10 — Reactivity and Stability"
    ],
    ans: 1,
    exp: "Section 4 of the standardized 16-section SDS covers First Aid Measures — what to do if someone is exposed by inhalation, skin contact, eye contact, or ingestion. OSHA requires all 16 sections to be present on compliant SDS documents."
  },
  {
    q: "Which of the following is a TRUE statement about quaternary ammonium compounds (quats) used in nail salons?",
    opts: [
      "Quats are effective against all pathogens including mycobacteria and spores at standard concentrations",
      "Quats are EPA-registered disinfectants effective against most bacteria, viruses, and fungi, but are not sporicidal",
      "Quats must always be used undiluted to be effective",
      "Quats are not approved for use on metal implements"
    ],
    ans: 1,
    exp: "Quaternary ammonium compounds are widely used EPA-registered disinfectants effective against bacteria, viruses, and fungi at proper dilutions — but they do not destroy bacterial spores. They are appropriate for use on non-porous salon implements when mixed to manufacturer specifications."
  },
  {
    q: "When a nail technician handles flammable products (acetone, monomers), what is the MOST important fire safety precaution?",
    opts: [
      "Store them in open containers to prevent pressure buildup",
      "Keep them away from open flames, pilot lights, hot tools, and sparks; store in tightly sealed, clearly labeled containers in a cool, ventilated area",
      "Refrigerate all flammable chemicals between services",
      "Allow vapors to dissipate naturally by leaving containers open"
    ],
    ans: 1,
    exp: "Acetone and acrylic monomers are highly flammable. Their vapors can travel to ignition sources and cause fires or explosions. Safe practices include storing in sealed, labeled containers away from heat sources, sparks, and open flames, and ensuring adequate ventilation."
  },
  {
    q: "A client who is known to be HIV-positive arrives for a manicure. What is the CORRECT response?",
    opts: [
      "Politely decline the service because of the infection risk",
      "Provide service while using gloves and following Standard Precautions — the same protocols used with every client",
      "Request a physician's clearance letter before proceeding",
      "Provide service but use only disposable implements"
    ],
    ans: 1,
    exp: "HIV-positive clients cannot be refused service — this is both illegal discrimination and unnecessary because Standard Precautions, applied consistently to ALL clients, adequately protect against bloodborne pathogen transmission. The same protocols that apply to any client apply here."
  },
  {
    q: "How should a nail technician dispose of a bloody cotton ball or gauze used to treat a skin nick during a service?",
    opts: [
      "Place it in the regular trash bin at the workstation",
      "Seal it in a plastic bag or use a lined, covered container before placing it in the trash; clean and disinfect the work area",
      "Flush it down the salon sink",
      "Place it in a sharps container"
    ],
    ans: 1,
    exp: "Contaminated items bearing blood must be placed in a sealed plastic bag or a lined, covered container before disposal in regular trash — they do not require sharps or medical waste containers unless actual sharps are involved. The work area and any contaminated surfaces must then be cleaned and disinfected."
  },
  {
    q: "Tuberculocidal disinfectants are sometimes required in salon settings because:",
    opts: [
      "Tuberculosis is commonly spread through nail services",
      "Tuberculocidal kill-claim indicates the disinfectant is effective against a broader, harder-to-kill class of pathogens, providing a higher level of protection",
      "The CBBC requires tuberculocidal disinfectants on all California salons by law",
      "They are cheaper than bactericidal products"
    ],
    ans: 1,
    exp: "Mycobacterium tuberculosis is among the hardest non-spore pathogens to kill. A tuberculocidal rating on an EPA-registered disinfectant indicates a high enough potency to kill this organism — effectively guaranteeing it will also destroy less resistant pathogens. Some regulatory bodies and infection control standards recommend tuberculocidal-rated products."
  },
  {
    q: "The term 'contact time' for a disinfectant refers to:",
    opts: [
      "How long the technician should wear gloves after application",
      "The minimum time the surface must remain visibly wet with disinfectant for the product to achieve its labeled kill claim",
      "How often to change the disinfectant solution",
      "The maximum time an implement can stay in solution before being damaged"
    ],
    ans: 1,
    exp: "Disinfectants must remain in contact with a surface for a specified time (labeled by the manufacturer) to achieve their kill claim. Wiping the surface dry too quickly or rinsing prematurely renders the disinfection incomplete. Contact time is typically 1–10 minutes depending on the product and intended microorganism."
  },
  {
    q: "What does an EPA registration number on a disinfectant product indicate?",
    opts: [
      "The product is environmentally safe and biodegradable",
      "The EPA has reviewed and registered the product's efficacy claims, and the product is legally marketed as a disinfectant",
      "The product has been approved by the California Board of Barbering and Cosmetology",
      "The product is safe for use on skin as an antiseptic"
    ],
    ans: 1,
    exp: "An EPA registration number (Reg. No. on the label) means the Environmental Protection Agency has evaluated the product's safety and effectiveness claims. It is a legal requirement for any product sold as a disinfectant in the United States. Look for this number when selecting salon disinfectants."
  },
  {
    q: "Under California regulations, what must a manicurist do with a multi-use file that was used on a client but was not properly disinfected between clients?",
    opts: [
      "Re-use it after sanitizing with alcohol spray",
      "Disinfect it immediately before the next use",
      "Discard it immediately — it cannot be used again on any client until properly processed, and if it's porous it must be discarded permanently",
      "Store it in a UV sterilizer until the next client"
    ],
    ans: 2,
    exp: "A porous file used on one client cannot be properly disinfected and must be discarded. Non-porous implements that were used without proper disinfection between clients must be fully processed (cleaned and disinfected) before being used again. Using improperly processed implements is a violation."
  },
  {
    q: "Which personal protective equipment (PPE) is MOST important for a nail technician performing acrylic application?",
    opts: [
      "Face shield only",
      "Nitrile or vinyl gloves, a fitted dust/particle mask or respirator, and eye protection",
      "Safety goggles and a lab coat",
      "A surgical mask is sufficient"
    ],
    ans: 1,
    exp: "Acrylic application exposes the technician to liquid monomer (skin sensitizer), fine acrylic dust during filing (respiratory hazard), and occasional product splatter (eye hazard). Nitrile gloves (latex is porous to some chemicals), a fitted particle mask/respirator (not a surgical mask), and eye protection provide comprehensive protection."
  },
  {
    q: "A client's acrylic nail breaks and the natural nail is torn back to the quick with active bleeding. The technician should:",
    opts: [
      "Apply cyanoacrylate glue to seal the tear and continue the service",
      "Immediately apply pressure with clean gauze while wearing gloves, apply antiseptic, bandage the finger, and refer the client for medical evaluation if needed",
      "Apply acetone to disinfect the wound and reapply the enhancement",
      "Ignore the bleeding and apply a new nail tip to cover the damage"
    ],
    ans: 1,
    exp: "Applying cyanoacrylate or acetone to an open wound is harmful. Standard Precautions require gloves whenever blood is present. First aid — pressure, antiseptic, bandaging — takes priority. If the injury is severe, the client should be advised to seek medical evaluation. Never continue enhancement services over an open wound."
  },
  {
    q: "To reduce chemical exposure to nail salon workers, which workplace modification is MOST effective?",
    opts: [
      "Requiring clients to wash their hands before services",
      "Installing a local exhaust ventilation (LEV) system or vent table that draws fumes away from the technician's breathing zone",
      "Using only water-based nail products exclusively",
      "Increasing the ambient temperature of the salon to speed product evaporation"
    ],
    ans: 1,
    exp: "Local exhaust ventilation (LEV), also called a ventilated work table or vent table, captures chemical vapors at the source — directly at the workstation — before they reach the technician's breathing zone. This is far more effective than general room ventilation or open windows alone."
  },
  {
    q: "When is it permissible to reuse a cuticle pusher without disinfecting it?",
    opts: [
      "If the same client returns the same day for a second service",
      "If the cuticle pusher was rinsed with hot water after the first use",
      "It is never permissible — implements must be properly cleaned and disinfected between every use, even for the same client",
      "Only if the client has no visible skin conditions"
    ],
    ans: 2,
    exp: "California regulations require implements to be cleaned and disinfected after each use. This applies even between appointments for the same client. The reason is that pathogens may have been deposited on the implement and can be reintroduced or transmitted to other clients."
  },
  {
    q: "Acrylic monomers that have polymerized inside a bottle (the liquid has become thick or gel-like) should be:",
    opts: [
      "Thinned with additional acetone and used normally",
      "Heated gently to restore liquid consistency",
      "Discarded as hazardous waste according to local regulations — never used",
      "Filtered to remove the polymerized portion and reused"
    ],
    ans: 2,
    exp: "Partially polymerized monomer has changed chemically. Using degraded monomer produces poor-quality enhancements and can increase sensitization risk due to higher levels of uncured components. It cannot be restored and should be disposed of properly as hazardous chemical waste."
  },
  {
    q: "Which of the following is NOT an acceptable method for hand hygiene before a nail service?",
    opts: [
      "Washing hands with soap and water for at least 20 seconds",
      "Using an alcohol-based hand sanitizer containing at least 60% alcohol",
      "Wiping hands with a dry paper towel only",
      "Using a waterless hand cleanser with antimicrobial ingredients"
    ],
    ans: 2,
    exp: "Wiping hands with a dry paper towel removes visible debris but does not reduce pathogen counts and is not considered proper hand hygiene. Soap and water or alcohol-based sanitizer (≥60% alcohol) are the accepted methods for hand hygiene before and after client contact."
  },
  {
    q: "OSHA's Hazard Communication Standard (HazCom) requires nail salons to maintain a Safety Data Sheet for:",
    opts: [
      "Only products listed as 'toxic' by the manufacturer",
      "All hazardous chemicals present in the workplace",
      "Only chemicals that require special storage",
      "Products purchased in quantities greater than one gallon"
    ],
    ans: 1,
    exp: "OSHA's HazCom standard (29 CFR 1910.1200) requires employers to have an SDS for every hazardous chemical in the workplace — including nail polish, acrylic liquids, primers, and disinfectants. Employees must be trained on the hazards and have ready access to all SDS documents."
  },
  {
    q: "Which scenario represents an exposure incident requiring documentation and follow-up under bloodborne pathogen standards?",
    opts: [
      "Spilling nail polish on the client's fingers",
      "A nail technician being stuck by a sharp implement contaminated with client blood",
      "Touching the client's hand during a hand massage without gloves",
      "Inhaling product fumes due to inadequate ventilation"
    ],
    ans: 1,
    exp: "An exposure incident is defined as specific eye, mouth, mucous membrane, non-intact skin, or parenteral (needle/sharp) contact with blood or other potentially infectious materials. A skin puncture from a contaminated sharp is a classic exposure incident requiring immediate first aid, incident documentation, and medical follow-up."
  },
  {
    q: "When removing gel product with acetone wraps, what safety precaution is MOST important regarding the acetone?",
    opts: [
      "Warm the acetone in a microwave to speed up removal",
      "Never heat acetone in a microwave or near open flames — it is highly flammable; use only an electric heating pad or warm water bowl",
      "Cover the client's eyes to prevent irritation from fumes",
      "Mix acetone with hydrogen peroxide to boost effectiveness"
    ],
    ans: 1,
    exp: "Acetone is highly flammable. Heating it in a microwave or near open flames creates a fire and explosion hazard. Gentle warming in warm water or a purpose-built electric heating tool is acceptable and speeds removal, but microwave heating is dangerous and must never be done."
  },
  {
    q: "Which of the following statements about Staphylococcus aureus (staph) in the nail salon is CORRECT?",
    opts: [
      "Staph is only a concern if a client is immunocompromised",
      "Staph can be spread through contaminated tools and cause paronychia (nail fold infections), making proper disinfection essential",
      "Staph is a virus and cannot be killed by disinfectants",
      "Staph can only be transmitted through blood, not direct skin contact"
    ],
    ans: 1,
    exp: "Staphylococcus aureus is a common bacteria present on skin surfaces. In nail salons, contaminated implements, work surfaces, or direct contact can transfer staph and cause paronychia (nail fold infections) or worse (MRSA) in susceptible individuals. Proper implement disinfection and surface sanitation significantly reduce this risk."
  },
  {
    q: "A client who regularly receives nail services tells the technician she recently started a medication for chemotherapy. The technician should be MOST aware that:",
    opts: [
      "Chemotherapy has no effects on nails and does not change service protocols",
      "Chemotherapy can cause immunosuppression and nail changes (brittle nails, onycholysis, pigmentation), requiring gentler technique and medical guidance before services",
      "Chemotherapy clients should receive extra thick enhancements to protect fragile nails",
      "Only the physician's written clearance is needed; no changes to service are required"
    ],
    ans: 1,
    exp: "Chemotherapy often causes immunosuppression, increased infection susceptibility, and nail changes including brittleness, beau's lines, and onycholysis. Services should be modified to be gentler, and the technician should recommend the client confirm with their oncologist that nail services are appropriate during treatment."
  },
  {
    q: "After disinfecting metal implements, the CORRECT method of storage is:",
    opts: [
      "In an open container on the workstation to allow air circulation",
      "In a clean, covered container or a UV storage cabinet (for additional protection, though not sterilization)",
      "Wrapped in paper towels in a drawer",
      "Submerged in disinfectant solution between uses"
    ],
    ans: 1,
    exp: "After disinfecting and drying, implements must be stored in a clean, covered container to prevent recontamination. UV cabinets can be used for additional protection but are not a substitute for disinfection. Leaving implements in solution between uses can corrode them and may reduce disinfectant effectiveness."
  },
  {
    q: "A salon that fails to maintain clean, properly functioning pedicure basin equipment in California may face which consequences?",
    opts: [
      "Only a verbal warning on first inspection",
      "Citations, fines, and potentially temporary closure of the salon",
      "The inspector will clean the basins on behalf of the salon",
      "No penalty, as long as no clients have been harmed"
    ],
    ans: 1,
    exp: "The CBBC can issue citations, impose fines, and order corrective action. Repeat violations or immediate danger to public health can result in suspension of operations. California's pedicure basin sanitation regulations are strictly enforced because multiple infection outbreaks have been linked to unsanitary foot basins."
  },

  // ─── CLIENT CONSULTATION & NAIL ANALYSIS (20%) ──────────────────────────

  {
    q: "What is the technical name for the natural nail?",
    opts: [
      "Onychium",
      "Onyx",
      "Hyponychium",
      "Lunula"
    ],
    ans: 1,
    exp: "The technical (medical) term for the natural nail is onyx (from the Greek word for nail or claw). Understanding nail terminology is essential for accurately describing nail conditions and disorders in a professional setting."
  },
  {
    q: "The nail MATRIX is significant because:",
    opts: [
      "It is the hard, visible portion of the nail that extends beyond the fingertip",
      "It is the area of living cells responsible for nail plate growth and contains nerves, lymph, and blood vessels",
      "It is the fold of skin that covers the base of the nail",
      "It forms the white crescent-shaped lunula visible at the base of some nails"
    ],
    ans: 1,
    exp: "The nail matrix is the growth zone of the nail. It contains nerves, lymph vessels, and blood vessels, and produces the nail plate cells. Any damage to the matrix (trauma, injury) can permanently affect nail shape and growth. The lunula is the visible portion of the matrix."
  },
  {
    q: "A client presents with a nail that has separated from the nail bed, beginning at the free edge, with no sign of infection. This condition is called:",
    opts: [
      "Onychomycosis",
      "Onycholysis",
      "Pterygium",
      "Leukonychia"
    ],
    ans: 1,
    exp: "Onycholysis is the painless separation of the nail plate from the nail bed, beginning at the free edge. Common causes include trauma, psoriasis, allergic reactions, and exposure to harsh chemicals. It is not an infection but creates a space where bacteria and fungus can colonize."
  },
  {
    q: "The main difference between the cuticle and the eponychium is:",
    opts: [
      "The cuticle is living tissue; the eponychium is not",
      "The eponychium is living skin at the base of the nail; the cuticle is dead tissue that adheres to the nail plate",
      "They are the same structure with different names",
      "The cuticle covers the nail plate; the eponychium is under the free edge"
    ],
    ans: 1,
    exp: "The eponychium is living skin — the fold of skin overlapping the nail plate at the base. The cuticle is the non-living tissue (dead cells) that the eponychium sheds onto the nail plate surface. Cutting living eponychium tissue can cause infection."
  },
  {
    q: "Leukonychia refers to:",
    opts: [
      "Abnormal thickening of the nail plate",
      "White spots or streaks on the nail plate",
      "A black pigmented band running vertically through the nail",
      "Separation of the nail plate from the nail bed"
    ],
    ans: 1,
    exp: "Leukonychia refers to white discoloration of the nail plate, appearing as white spots or streaks. It is commonly caused by minor nail matrix trauma, not by calcium deficiency as commonly believed. It grows out with the nail and is generally harmless."
  },
  {
    q: "Onychomycosis is CORRECTLY described as:",
    opts: [
      "A bacterial nail infection caused by Pseudomonas aeruginosa",
      "A fungal nail infection that can cause thickening, discoloration, and crumbling of the nail plate",
      "A viral infection of the nail unit requiring antiviral medication",
      "A benign nail disorder caused by trauma and over-filing"
    ],
    ans: 1,
    exp: "Onychomycosis is a fungal infection (most commonly caused by dermatophytes) that infects the nail plate and nail bed. It presents with thickening, yellowing, crumbling, and separation of the nail. It is contagious, requires physician-prescribed antifungal treatment, and is a contraindication to nail services on affected nails."
  },
  {
    q: "A vertical pigmented band running from the base to the free edge of the nail in a dark-skinned client is MOST likely:",
    opts: [
      "Nail fungus requiring immediate referral",
      "Melanonychia, a common benign finding in darker-skinned individuals caused by melanocyte activation",
      "A sign of anemia requiring blood work",
      "Onycholysis beginning at the lunula"
    ],
    ans: 1,
    exp: "Melanonychia (longitudinal melanonychia) — dark pigmented bands running from the matrix to the free edge — is common and usually benign in individuals with Fitzpatrick Types V and VI skin due to normal melanocyte activation. However, any sudden change in appearance, width, or dark spots at the base (Hutchinson's sign) warrants physician referral to rule out subungual melanoma."
  },
  {
    q: "What is the HYPONYCHIUM, and why is it significant in nail services?",
    opts: [
      "The visible white crescent at the nail base; significant because it indicates matrix health",
      "The pocket of skin under the free edge of the nail plate; it seals the nail bed and is easily compromised if the free edge is cut too short",
      "The fold of skin at the nail's sides; it protects against ingrown nails",
      "The dead tissue on the nail plate surface; it should be removed during manicure"
    ],
    ans: 1,
    exp: "The hyponychium is the protective skin barrier under the free edge where the nail plate separates from the nail bed. It seals out bacteria and fungus. If the free edge is cut too short, this seal is broken, increasing infection risk. Nail technicians should avoid disturbing this area."
  },
  {
    q: "Which nail condition appears as pitting, surface roughness, and onycholysis and is often associated with an autoimmune condition?",
    opts: [
      "Onychomycosis",
      "Beau's lines",
      "Nail psoriasis",
      "Paronychia"
    ],
    ans: 2,
    exp: "Nail psoriasis affects 50–80% of individuals with psoriasis and presents as nail pitting, onycholysis, oil spots, and surface irregularities. It is an autoimmune condition that cannot be treated in the nail salon. Services should be modified to avoid aggravating the affected nails."
  },
  {
    q: "The nail is primarily composed of which protein?",
    opts: [
      "Collagen",
      "Elastin",
      "Keratin",
      "Melanin"
    ],
    ans: 2,
    exp: "The nail plate is composed primarily of hardened keratin — the same protein that makes up hair and the outer layer of skin. In the nail, keratin is highly cross-linked with sulfur bonds, giving the nail its hardness. Understanding keratin helps explain why nails can become brittle and how products affect the nail plate."
  },
  {
    q: "Beau's lines are horizontal ridges or grooves across the nail plate that indicate:",
    opts: [
      "A fungal infection of the nail matrix",
      "A temporary interruption of nail matrix activity, often caused by illness, high fever, severe stress, or chemotherapy",
      "Calcium deficiency leading to weakened nail structure",
      "Repeated trauma from tight-fitting shoes"
    ],
    ans: 1,
    exp: "Beau's lines are transverse (horizontal) depressions or ridges across the nail plate. They represent a temporary slowdown or stop in matrix cell production, often following a severe systemic illness, high fever, surgery, or significant physiological stress. They grow out over time and are not a condition the technician treats."
  },
  {
    q: "Nail growth rate is MOST influenced by which of the following factors?",
    opts: [
      "Nail polish color — lighter colors grow faster due to light reflection",
      "Age, nutrition, health status, medication use, and dominant hand (dominant-hand nails grow faster)",
      "The type of nail file used — metal files stimulate faster growth",
      "Frequency of manicure services — more services accelerate growth"
    ],
    ans: 1,
    exp: "Nail growth averages about 3–4mm per month but varies by age (slows with age), nutrition (protein deficiency slows growth), health status, medications (some drugs slow or alter growth), and dominant-hand activity (increased circulation promotes faster growth on the dominant hand)."
  },
  {
    q: "A hangnail is CORRECTLY described as:",
    opts: [
      "A nail that has grown into the skin at the side of the finger",
      "A small torn piece of living skin at the side or base of the nail plate caused by dryness or improper cuticle care",
      "A condition where the nail plate doubles back on itself",
      "Dead cuticle tissue attached to the nail plate surface"
    ],
    ans: 1,
    exp: "A hangnail (agnail) is a small, torn strip of living skin attached near the nail fold — not the nail itself. It is caused by dryness or improper cutting/tearing of the skin. Hangnails can cause pain and create an entry point for infection if pulled or torn further. Moisturizing and gentle cuticle care prevent them."
  },
  {
    q: "Paronychia is BEST described as:",
    opts: [
      "A fungal infection of the nail plate causing yellowing and thickening",
      "An inflammation or infection of the skin around the nail fold (nail fold tissue), which can be bacterial or fungal",
      "Separation of the nail from the nail bed beginning at the tip",
      "Ingrowth of the nail edge into the lateral nail fold"
    ],
    ans: 1,
    exp: "Paronychia is inflammation of the skin surrounding the nail fold — the paronychium. Acute paronychia is usually bacterial (often staph), presenting with redness, swelling, pain, and pus. Chronic paronychia is often fungal (Candida) and associated with repeated water exposure. Both require physician treatment. Services should not be performed on actively infected nail folds."
  },
  {
    q: "Which structure produces the cells that form the nail plate?",
    opts: [
      "The nail bed",
      "The hyponychium",
      "The nail matrix",
      "The lunula"
    ],
    ans: 2,
    exp: "The nail matrix contains the germinative cells (onychoblasts) that divide and differentiate to form the nail plate. The nail bed provides the surface on which the growing plate slides. The lunula is the visible, lighter portion of the matrix beneath the proximal nail fold."
  },
  {
    q: "Koilonychia (spoon nails) — where the nail plate is concave and spoon-shaped — can be a sign of:",
    opts: [
      "A purely cosmetic issue caused by over-buffing",
      "Iron-deficiency anemia or other systemic health issues",
      "Excessive use of base coat",
      "Normal nail aging after age 50"
    ],
    ans: 1,
    exp: "Koilonychia (spoon nails) — where the nail plate develops a concave, upward-curling shape — can be a sign of iron-deficiency anemia (especially in severe cases) or other systemic conditions. Nail technicians cannot diagnose or treat this. Clients with spoon nails should be encouraged to see their physician."
  },
  {
    q: "The nails are considered part of which body system?",
    opts: [
      "Skeletal system",
      "Circulatory system",
      "Integumentary system",
      "Muscular system"
    ],
    ans: 2,
    exp: "The nails, along with the skin, hair, sebaceous glands, and sweat glands, are part of the integumentary system — the body's external covering. The nail is an appendage of the skin, derived from keratinocytes in the nail matrix."
  },
  {
    q: "Age-related changes to nails typically include:",
    opts: [
      "Faster nail growth and increased thickness in all cases",
      "Slower growth rate, increased ridging, greater brittleness, and sometimes yellowing",
      "Nails become softer and more pliable with age",
      "Increased moisture retention leading to thicker, stronger nails"
    ],
    ans: 1,
    exp: "As the body ages, nail growth slows, longitudinal ridges become more prominent (a normal finding), nails may become more brittle, and some discoloration can occur. These are normal aging changes. Technicians should use extra gentleness with older clients and recommend good nail care practices."
  },

  // ─── NAIL CARE: Manicuring & Pedicuring ─────────────────────────────────

  {
    q: "When performing a manicure, cuticle softener is applied to:",
    opts: [
      "The nail plate to enhance polish adhesion",
      "The cuticle and surrounding skin to soften the tissue and make removal easier",
      "The entire hand to moisturize before massage",
      "The nail plate before applying base coat"
    ],
    ans: 1,
    exp: "Cuticle softener (also called cuticle remover) contains alkaline chemicals (such as sodium or potassium hydroxide) that soften the dead cuticle tissue on the nail plate so it can be gently pushed back or removed. It should not be applied to the nail plate itself, as it can weaken the plate with prolonged contact."
  },
  {
    q: "A nail technician should use a metal pusher to push back the eponychium at what angle to the nail plate?",
    opts: [
      "90-degree angle (perpendicular to the nail plate)",
      "A low, flat angle (approximately 20–30 degrees) to avoid damaging the nail matrix",
      "45-degree angle, pushing firmly into the cuticle groove",
      "Angle does not matter as long as firm pressure is applied"
    ],
    ans: 1,
    exp: "Using a metal pusher at too steep an angle can damage the nail matrix. The correct technique uses a flat, low angle and gentle circular motion to push back the cuticle without trauma to the underlying matrix. Damaging the matrix can permanently affect nail growth."
  },
  {
    q: "Which nail shape is generally considered SAFEST and least prone to breaking for clients who work with their hands?",
    opts: [
      "Stiletto (pointed)",
      "Coffin (ballerina)",
      "Oval or round",
      "Square with very sharp corners"
    ],
    ans: 2,
    exp: "Oval and round nail shapes are structurally more resistant to breaking because there are no sharp corners that catch on objects. Pointed (stiletto) and coffin shapes concentrate stress at the narrowest point and are more prone to breaking. For active clients who use their hands, oval/round is the safest recommendation."
  },
  {
    q: "During a pedicure, the nail technician should NEVER use a credo blade or callus razor to remove foot calluses because:",
    opts: [
      "These tools require a medical license to use in California",
      "They remove too little callus to be effective",
      "They can cut too deeply into the skin, creating open wounds that risk infection — this is prohibited by California regulations",
      "They are only designed for acrylic nail preparation"
    ],
    ans: 2,
    exp: "Credo blades and callus razors are prohibited for use by cosmetologists and manicurists in California (and most states) because they cut into the skin and create open wounds, which pose a serious infection risk. Acceptable alternatives include foot files, abrasive boards, and callus softeners."
  },
  {
    q: "The correct sequence for polishing nails is:",
    opts: [
      "Color coat → Base coat → Top coat",
      "Base coat → Color coat (1–2 coats) → Top coat",
      "Top coat → Color coat → Base coat",
      "Color coat → Top coat (skip base coat for stronger adhesion)"
    ],
    ans: 1,
    exp: "The correct polish sequence is: (1) Base coat — creates adhesion and prevents staining; (2) Color coat — 1 to 2 thin coats for coverage; (3) Top coat — seals color, adds shine, and extends wear. Skipping the base coat reduces adhesion and allows pigments to stain the nail plate."
  },
  {
    q: "During a pedicure, a client with diabetes requests that the nail technician cut back her thick toenails. The technician should:",
    opts: [
      "Proceed normally, as cutting nails is within scope of practice",
      "Use a Dremel drill to file down the thickness",
      "Trim carefully, avoiding the skin, and strongly recommend the client see a podiatrist for nail care given the elevated risk of wound complications in diabetics",
      "Decline all nail services on diabetic clients"
    ],
    ans: 2,
    exp: "Diabetic clients have impaired wound healing, reduced sensation, and increased infection risk. Nail technicians should be extremely careful to avoid any skin nicks. Routine care is generally acceptable, but clients should be encouraged to see a podiatrist regularly — particularly for thickened nails (which can indicate fungal infection) and any skin concerns."
  },
  {
    q: "Nail files should be used on the free edge of the nail in which motion to prevent splitting?",
    opts: [
      "A back-and-forth sawing motion for efficiency",
      "Only in one direction, filing from the corner toward the center (avoiding back-and-forth sawing)",
      "Circular motions to create a smooth edge",
      "Vertical filing from tip to base to prevent fraying"
    ],
    ans: 1,
    exp: "Sawing back and forth causes friction and heat that frays the nail layers and can cause splitting and peeling. Filing in one direction only — from corner to center — creates a clean, smooth edge and preserves nail integrity."
  },
  {
    q: "What is the PRIMARY purpose of applying a base coat before nail color?",
    opts: [
      "To speed up the drying time of subsequent coats",
      "To prevent nail polish pigments from staining the nail plate and to improve color adhesion",
      "To provide an extra layer of protection against nail breakage",
      "To hydrate the nail plate before product application"
    ],
    ans: 1,
    exp: "Base coat primarily serves two functions: (1) preventing nail plate staining from pigmented polishes, and (2) providing a slightly tacky surface that improves color adhesion. Some base coats also contain strengtheners or ridge fillers."
  },
  {
    q: "When performing a hot oil manicure, the purpose of the warm oil soak is to:",
    opts: [
      "Sterilize the nails before the service",
      "Soften and hydrate the cuticles, skin, and nail plate for easier cuticle work and better polish adhesion",
      "Remove polish from the previous service",
      "Disinfect the fingertips before enhancement application"
    ],
    ans: 1,
    exp: "Warm oil (often sweet almond, olive, or jojoba oil) moisturizes and softens the cuticles and surrounding skin, making cuticle care easier and less traumatic. It also temporarily hydrates the nail plate. However, any oil residue should be removed before polish application as it inhibits adhesion."
  },
  {
    q: "A paraffin wax treatment during a manicure is primarily used to:",
    opts: [
      "Disinfect the hands prior to service",
      "Provide deep moisturizing, increased circulation, and temporary relief of joint stiffness",
      "Remove calluses from the fingertips",
      "Create a protective coating on nails before polish application"
    ],
    ans: 1,
    exp: "Paraffin wax treatments use heated paraffin to seal warmth and moisture into the skin, promoting circulation and deeply hydrating dry skin. The warmth can also temporarily soothe joint discomfort. Paraffin should not be used if the client has cuts, open sores, recent laser treatment, or certain circulatory conditions."
  },
  {
    q: "When performing a pedicure, the foot soak temperature should be:",
    opts: [
      "As hot as possible to increase circulation and soften calluses",
      "Comfortably warm — approximately 98–105°F (37–40°C) — not hot enough to scald or burn",
      "Room temperature to avoid any risk of burns",
      "At least 110°F to ensure sanitation of the foot"
    ],
    ans: 1,
    exp: "Foot soak water should be comfortably warm — approximately 98–105°F — warm enough to soften skin and relax the client, but not hot enough to cause burns, particularly in clients with reduced foot sensation (such as diabetics or elderly clients). Always test temperature before the client places their foot in the basin."
  },
  {
    q: "What is the CORRECT way to remove polish from nails before a manicure?",
    opts: [
      "Scrub the nail with a nail brush soaked in acetone",
      "Use an acetone or non-acetone remover with a cotton ball or pad, pressing onto the nail and sliding toward the free edge — do not rub back and forth excessively",
      "File off the polish with a coarse grit nail file",
      "Soak nails in acetone for 10 minutes to dissolve all polish"
    ],
    ans: 1,
    exp: "Press a soaked cotton ball onto the nail for a few seconds to dissolve the polish, then slide toward the free edge. This technique lifts the polish off efficiently. Excessive scrubbing can dehydrate the nail plate and surrounding skin."
  },
  {
    q: "Nail wraps (fabric wraps — silk, linen, fiberglass) are used to:",
    opts: [
      "Permanently seal damaged nails to prevent nail plate growth",
      "Repair broken nails or add thin overlays that strengthen the natural nail, with removal requiring acetone or filing",
      "Apply nail art directly to the nail surface",
      "Prevent oil from interfering with gel adhesion"
    ],
    ans: 1,
    exp: "Nail wraps are thin fabric overlays (silk, fiberglass, or linen) adhered to the nail with resin to strengthen, repair breaks, or create light overlays. They are a lower-chemical alternative to acrylic enhancements. Removal requires acetone soaking or gentle filing."
  },

  // ─── NAIL CARE: Nail Enhancements ───────────────────────────────────────

  {
    q: "The PRIMARY chemical in acrylic nail enhancements that poses the greatest risk of causing allergic sensitization is:",
    opts: [
      "Polymer powder",
      "Uncured ethyl methacrylate (EMA) monomer liquid in contact with skin",
      "Acetone used for removal",
      "UV-cured gel oligomer after complete polymerization"
    ],
    ans: 1,
    exp: "Uncured EMA monomer is the sensitizing agent in acrylic systems. Skin contact with liquid monomer — especially repeated exposure — is the primary cause of occupational allergic contact dermatitis in nail technicians. Once fully cured, the polymer is relatively inert. Minimizing skin contact is essential."
  },
  {
    q: "A photoinitiator in UV/LED gel nail systems is activated by:",
    opts: [
      "Mixing with acrylic monomer liquid",
      "Exposure to UV or visible light wavelengths specific to the photoinitiator",
      "Contact with oxygen in the air",
      "The heat generated by the nail plate"
    ],
    ans: 1,
    exp: "Photoinitiators are molecules embedded in gel formulations that absorb specific UV or visible light wavelengths and initiate polymerization (curing). This is why gel products are not activated until placed under a UV or LED lamp — they are stable in the absence of the activating wavelength."
  },
  {
    q: "The 'inhibition layer' (sticky, tacky surface) found on a gel nail after curing is caused by:",
    opts: [
      "Incomplete mixing of gel ingredients",
      "Oxygen in the air preventing full surface polymerization",
      "Too much gel product applied in one coat",
      "A manufacturer defect in the gel formula"
    ],
    ans: 1,
    exp: "The inhibition layer (also called the dispersion layer or sticky layer) forms because oxygen present in the air prevents the outermost molecules of the gel from fully curing. This layer is wiped off with isopropyl alcohol or a gel cleanser before the next coat or final use of the nail."
  },
  {
    q: "Which product is CORRECTLY matched with its primary function in an L&P (liquid and powder) nail enhancement?",
    opts: [
      "Primer — adds color to the enhancement",
      "Polymer powder — acts as the liquid activator",
      "Primer — improves adhesion between the nail plate and the enhancement product",
      "Monomer liquid — provides the color pigment for the enhancement"
    ],
    ans: 2,
    exp: "Nail primer improves adhesion between the natural nail plate and the acrylic enhancement. Monomer liquid (ethyl methacrylate) and polymer powder are the two main components that combine to form the acrylic enhancement. Primer is applied before the acrylic, not mixed with it."
  },
  {
    q: "The ratio of monomer liquid to polymer powder in an L&P application is important because:",
    opts: [
      "More powder creates a stronger, more durable enhancement regardless of ratio",
      "An incorrect ratio (too wet or too dry) can lead to lifting, poor adhesion, excessive heat, or under-cured product",
      "The ratio only affects the color of the finished enhancement",
      "Technicians should always use more liquid than powder for a smoother finish"
    ],
    ans: 1,
    exp: "The bead consistency (monomer-to-polymer ratio) directly affects the quality of the enhancement. A bead that is too wet (excess monomer) cures slowly, can cause heat spikes, and produces weaker enhancements. Too dry (excess powder) leads to lifting and difficult application. Correct ratio produces medium consistency."
  },
  {
    q: "Hard gels differ from soft (soak-off) gels in that hard gels:",
    opts: [
      "Can be removed by soaking in acetone for 10–15 minutes",
      "Must be filed off the nail because they do not dissolve in acetone",
      "Require a UV lamp to cure and are therefore more toxic",
      "Are formulated without acrylate compounds"
    ],
    ans: 1,
    exp: "Hard gels are highly cross-linked polymers that create strong, extension-capable enhancements but cannot be dissolved by acetone. They must be filed off, which requires skill to avoid damaging the natural nail. Soft (soak-off) gels have a lower cross-link density and dissolve in acetone."
  },
  {
    q: "Nail primer designed for use with UV/LED gel systems works by:",
    opts: [
      "Etching the nail plate with acid to create a rough surface",
      "Using either an acid-based or acid-free formulation to improve gel adhesion to the nail plate",
      "Providing a colored base coat",
      "Curing under UV light to form a bonding layer"
    ],
    ans: 1,
    exp: "Gel primers come in acid-based and acid-free (non-acid) formulations. Acid-based primers dehydrate the nail plate and create stronger bonds by etching the surface slightly. Acid-free primers work by creating surface bonds without etching. Both improve gel adhesion but must be used according to manufacturer instructions."
  },
  {
    q: "When applying nail tips, the tip should be sized to fit:",
    opts: [
      "Slightly smaller than the nail plate to ensure a tight fit",
      "Cover the entire nail plate surface including the lunula",
      "Match the width of the nail plate at the point of contact without overlapping the skin",
      "Extend approximately 1/4 inch beyond the free edge of the natural nail"
    ],
    ans: 2,
    exp: "Nail tips must be sized to fit the width of the nail plate precisely at the contact area — the well of the tip — without overlapping the lateral (side) skin folds. An incorrectly sized tip creates lifting, pressure, and discomfort."
  },
  {
    q: "The exothermic reaction (heat spike) that occurs during acrylic application is caused by:",
    opts: [
      "The UV lamp overheating the product",
      "The chemical polymerization reaction between monomer and polymer that releases heat",
      "Applying acrylic too close to the cuticle",
      "Using too little primer before acrylic application"
    ],
    ans: 1,
    exp: "The chemical combination of monomer and polymer (polymerization) is exothermic — it releases heat. Thin nail plates and thicker product applications over the natural nail bed can cause pain or burning sensations during curing. Placing the hand on a cool surface can help reduce discomfort."
  },
  {
    q: "Which of the following BEST describes the dip powder (SNS/acrylic powder dip) system?",
    opts: [
      "A UV-cured gel system that requires lamp curing after each coat",
      "An acrylic system where the nail is dipped into polymer powder and sealed with cyanoacrylate-based resin rather than liquid monomer",
      "A wrap system using silk fabric and UV-cured adhesive",
      "A traditional L&P system where monomer and polymer are mixed before application"
    ],
    ans: 1,
    exp: "Dip powder systems use a cyanoacrylate-based activator/resin instead of EMA monomer liquid. The nail is coated with base resin, dipped into polymer powder, and sealed — no liquid monomer or UV lamp is required. These systems carry sensitization risks from cyanoacrylate and the powder, similar to other enhancement systems."
  },
  {
    q: "LED lamps cure gel products FASTER than traditional UV lamps primarily because:",
    opts: [
      "LED lamps emit higher temperatures, accelerating the chemical reaction",
      "LED lamps emit targeted wavelengths specifically matched to the photoinitiators in LED-compatible gels, initiating curing more efficiently",
      "LED lamps use higher wattage across all wavelengths",
      "LED gels contain more photoinitiators than UV gels"
    ],
    ans: 1,
    exp: "LED lamps emit specific narrow wavelengths targeted to match the photoinitiators in LED-compatible gel formulations. This efficiency means less lamp time is needed compared to broad-spectrum UV lamps. However, not all gel products are LED-compatible — always check the gel manufacturer's requirements."
  },
  {
    q: "Nail forms (paper or foil forms placed under the free edge) are used in nail enhancements to:",
    opts: [
      "Support the natural nail plate during filing",
      "Act as a temporary scaffold to extend the nail tip with L&P or gel without applying a plastic tip",
      "Hold the nail plate in place while primer dries",
      "Prevent acrylic from touching the nail bed"
    ],
    ans: 1,
    exp: "Nail forms are placed under the free edge of the natural nail to guide the extension of acrylic or gel beyond the fingertip without a pre-made plastic tip. Once the product cures, the form is removed. Forms allow for custom shape and length control and eliminate the bulk of a plastic tip."
  },
  {
    q: "When a client's gel overlay begins to lift at the cuticle area, the MOST likely cause is:",
    opts: [
      "Gel product that was applied too thin",
      "Inadequate nail preparation — oil, moisture, or cuticle tissue left on the nail plate before gel application",
      "Using an LED lamp instead of a UV lamp",
      "The gel was applied in too many thin coats"
    ],
    ans: 1,
    exp: "Lifting at the cuticle is most commonly due to inadequate nail plate preparation. Oil, moisture, dead cuticle tissue, or residue on the nail plate prevents gel adhesion. Proper prep includes dehydrating the plate with alcohol or a nail dehydrator and ensuring no cuticle tissue extends onto the nail plate."
  },

  // (see Client Consultation & Nail Analysis section above)

  {
    q: "A new client arrives for a full set of acrylic nails. Before beginning the service, the nail technician should ALWAYS:",
    opts: [
      "Proceed immediately to maximize time efficiency",
      "Complete a client intake form to document health history, allergies, medications, and nail condition before beginning any service",
      "Only ask about allergies if the client appears to have sensitive skin",
      "Check the client's ID to confirm their age before gel services"
    ],
    ans: 1,
    exp: "A thorough client intake form is essential before any nail service. It identifies contraindications (allergies, medications that affect nails, health conditions), establishes informed consent, and creates a service record. This protects both the client and the technician legally and professionally."
  },
  {
    q: "During a client consultation, a client mentions she recently started taking a blood thinner (anticoagulant). The nail technician should be MOST concerned about:",
    opts: [
      "Using acetone-based products near the medication site",
      "The increased risk of bleeding if the skin is nicked during cuticle work, which could be harder to stop",
      "Chemical interactions between the medication and nail polish",
      "The client's nails growing unusually fast due to the medication"
    ],
    ans: 1,
    exp: "Blood thinners (anticoagulants like warfarin or aspirin therapy) prevent normal blood clotting. Even a minor skin nick during cuticle work could lead to prolonged bleeding. The technician should use extreme care during cuticle services and have first aid readily available."
  },
  {
    q: "A client who has had a mastectomy on her right side requests a manicure and pedicure. What should the nail technician be aware of?",
    opts: [
      "No special considerations are needed for nail services",
      "Avoid taking blood pressure or performing massage on the affected (right) arm, as lymph node removal increases the risk of lymphedema",
      "Only perform services on the left hand and both feet",
      "Request a doctor's note before performing any service"
    ],
    ans: 1,
    exp: "Following mastectomy, especially if lymph nodes were removed, the affected arm may be at risk for lymphedema (swelling due to impaired lymph drainage). Nail technicians should avoid massage, pressure, or anything that could restrict circulation on the affected limb. Clients should be advised of this risk."
  },
  {
    q: "Why is it important to document the condition of a client's nails before beginning a service?",
    opts: [
      "It is required only by federal OSHA regulations, not California state rules",
      "It protects the technician from liability if a client claims damage occurred during the service and establishes a baseline record of the nail's pre-service condition",
      "Documentation is only needed for enhancement services, not natural nail manicures",
      "It is optional unless the client has a history of nail problems"
    ],
    ans: 1,
    exp: "Pre-service documentation creates a legal and professional record of the nail's condition before the technician touched it. If a client later claims a nail was broken or damaged during the service, the documentation provides evidence of the nail's pre-existing condition. It is good professional practice for all services."
  },
  {
    q: "A client returns complaining her gel manicure from last week is already lifting. During the consultation, she mentions she uses hand sanitizer dozens of times per day for work. The MOST likely explanation is:",
    opts: [
      "The gel product was defective",
      "The UV lamp was not powerful enough to fully cure the gel",
      "Frequent alcohol-based hand sanitizer use dehydrates the nail plate and breaks down the gel-nail interface, causing premature lifting",
      "The technician applied too many gel coats"
    ],
    ans: 2,
    exp: "Frequent alcohol exposure (from hand sanitizers or chemical exposure at work) dehydrates the nail plate, causes it to contract and expand differently than the gel overlay, and degrades the adhesion between the gel and the nail plate over time — leading to lifting. Clients with high alcohol/chemical exposure may have shorter gel wear."
  },
  {
    q: "A client informs you she is 7 months pregnant. Which of the following is the MOST important adjustment during the service?",
    opts: [
      "No adjustment needed — nail services are always safe during pregnancy",
      "Ensure good ventilation, use lower-odor or '3-free' products, avoid prolonged exposure to strong chemical fumes, and ensure the client is positioned comfortably",
      "Decline all chemical enhancement services for pregnant clients",
      "Use only UV-cured products as they are FDA-approved for use during pregnancy"
    ],
    ans: 1,
    exp: "While nail services are generally considered low-risk in pregnancy, good ventilation and minimizing exposure to strong chemical fumes (monomers, primers) are prudent. No enhancement system has been specifically cleared for pregnancy by the FDA. Client comfort is also important — a large abdomen affects positioning, and the client should be seated comfortably without prolonged bending or pressure on the abdomen."
  },

  // ─── SKIN CARE (10%) — new April 2026 category ───────────────────────────
  // Covers basic hand/foot skin care within the manicurist scope of practice:
  // skin anatomy relevant to nail services, moisturizing, exfoliation, massage,
  // and recognizing conditions outside scope.

  {
    q: "The epidermis layer of the skin that a manicurist most directly works on during a hand treatment is the:",
    opts: [
      "Stratum basale (basal layer) — the deepest living layer",
      "Stratum corneum — the outermost layer of dead, keratinized cells that is softened during soaking and removed during exfoliation",
      "Dermis — the layer containing collagen and elastin",
      "Hypodermis — the subcutaneous fat layer"
    ],
    ans: 1,
    exp: "The stratum corneum is the outermost epidermal layer composed of flat, dead, keratinized cells (corneocytes). Soaking in warm water softens this layer; exfoliation (scrubs, files, abrasive boards) removes its thickened or roughened areas. Manicurists work on this surface layer. The deeper layers (stratum basale, dermis) are not accessible through standard nail services."
  },
  {
    q: "Calluses that form on the palms and fingertips are a direct result of:",
    opts: [
      "Bacterial infection in the stratum corneum",
      "Chronic friction or pressure causing the skin to produce extra layers of stratum corneum as a protective response",
      "Excessive use of hand sanitizer drying the skin",
      "A deficiency in vitamin E"
    ],
    ans: 1,
    exp: "A callus (tyloma) is a diffuse thickening of the stratum corneum in response to repeated friction or pressure. It is the skin's natural protective response. Unlike a corn (heloma), which has a central core and appears over bony prominences, a callus is flat and widespread. Manicurists may gently soften or reduce calluses using exfoliants or files, but cannot aggressively debride them."
  },
  {
    q: "A client's hands show signs of contact dermatitis — red, itchy, scaling patches on the dorsum of the hands. The correct action is:",
    opts: [
      "Apply a thick moisturizer and proceed with the manicure",
      "Recognize that contact dermatitis may be aggravated by chemicals used in nail services; ask about known allergens, and if the area is inflamed or broken, postpone the service and recommend a dermatologist",
      "Perform the manicure using only acetone-free products, which are safe on irritated skin",
      "Apply a warm wax treatment to soothe the inflammation"
    ],
    ans: 1,
    exp: "Contact dermatitis is an inflammatory skin condition caused by irritants or allergens. Nail service chemicals (acetone, monomers, UV gel ingredients) can be irritants or allergens themselves. Performing a service on inflamed or broken skin risks worsening the condition. If the dermatitis is active and involves the service area, the manicurist should defer the service and recommend physician evaluation."
  },
  {
    q: "An exfoliating scrub used during a hand treatment primarily benefits the skin by:",
    opts: [
      "Tightening pores by increasing collagen production",
      "Removing dead stratum corneum cells to reveal smoother skin underneath, improving product absorption and texture",
      "Increasing the rate of melanin production for a more even skin tone",
      "Disinfecting the skin surface to prevent bacterial growth"
    ],
    ans: 1,
    exp: "Exfoliation (physical or chemical) removes accumulated dead cells from the stratum corneum. This smooths the skin surface, improves the absorption of subsequently applied moisturizers and treatments, and stimulates mild circulation. Manicurists use physical exfoliants (sugar/salt scrubs, abrasive boards) or enzyme-based gentle chemical exfoliants. Over-exfoliation can damage the skin barrier."
  },
  {
    q: "During a paraffin wax treatment for the hands, the primary benefit is:",
    opts: [
      "Permanent removal of dead skin cells",
      "Occlusive heat that opens pores, softens the stratum corneum, and drives moisturizer into the skin — leaving hands softer and more hydrated",
      "Disinfection of the skin surface at high temperatures",
      "Stimulation of collagen production in the dermis"
    ],
    ans: 1,
    exp: "Paraffin wax creates an occlusive barrier around the hand. The retained heat softens and hydrates the stratum corneum, opens follicles, and improves absorption of any lotion applied before dipping. The warmth also relaxes muscles and increases circulation. Paraffin treatments are contraindicated on broken skin, open wounds, heat-sensitive conditions, or areas with impaired sensation (e.g., diabetic neuropathy)."
  },
  {
    q: "A client with diabetes asks for a pedicure. Which precaution is MOST important?",
    opts: [
      "Use a higher-alkaline foot soak to better soften the skin",
      "Perform a very thorough assessment of the feet for any cuts, sores, reduced sensation, or poor circulation — and proceed with extreme gentleness; if wounds or compromised circulation are found, refer to a physician",
      "Skip the massage step to avoid disturbing blood flow",
      "Avoid all nail filing — diabetes makes nails too fragile to file"
    ],
    ans: 1,
    exp: "Clients with diabetes may have peripheral neuropathy (reduced sensation — so they cannot feel pain from cuts) and impaired circulation (slowing wound healing). Even a minor nick during a pedicure can lead to serious infection. Manicurists must inspect carefully, avoid cutting the skin, use very gentle tools, and decline the service if open sores, active infection, or clearly compromised circulation is present."
  },
  {
    q: "Effleurage massage strokes performed during a hand and arm massage are characterized by:",
    opts: [
      "Deep, kneading movements that compress and release the muscle",
      "Light, gliding, flowing strokes that warm and relax the soft tissue, and are typically used to begin and end the massage",
      "Rapid percussion movements that stimulate circulation",
      "Deep friction applied in small circular motions over a specific area"
    ],
    ans: 1,
    exp: "Effleurage (from the French 'to touch lightly') consists of smooth, gliding strokes applied with light to medium pressure following the direction of the muscle fibers or venous return. It is used to begin the massage (warming the tissue), transition between techniques, and end the massage (signaling completion). It is the most commonly used massage movement in basic hand and arm massage included in a manicure service."
  },
  {
    q: "A client's feet show thick, yellowish, crumbling toenails. The manicurist should:",
    opts: [
      "File and buff the nails aggressively to thin them down",
      "Recognize the signs of onychomycosis (nail fungus) — a condition outside scope of practice — decline the service on affected nails, and refer the client to a physician for treatment",
      "Apply a nail hardener to strengthen the infected nails",
      "Soak the nails in an antifungal foot bath product and proceed with the pedicure"
    ],
    ans: 1,
    exp: "Thick, discolored (yellow, brown, or white), brittle, crumbling nails that separate from the nail bed are classic signs of onychomycosis (tinea unguium — nail fungus). This is a medical condition. Manicurists cannot diagnose or treat it. Performing a service risks spreading the infection to other nails or clients through implements. The client must be referred to a physician and the service declined on affected nails."
  },
  {
    q: "Moisturizers applied to the hands after a manicure service primarily work by:",
    opts: [
      "Generating new collagen in the dermis to plump the skin",
      "Either preventing transepidermal water loss (occlusives/emollients) or drawing moisture into the stratum corneum (humectants), or both — maintaining the skin's water content and barrier function",
      "Removing dead skin cells through enzymatic action",
      "Increasing melanin production for a more uniform skin tone"
    ],
    ans: 1,
    exp: "Hand moisturizers typically contain occlusives (petrolatum, dimethicone — form a physical barrier to reduce water evaporation), emollients (oils, fatty acids — fill gaps between corneocytes to smooth texture), and/or humectants (glycerin, hyaluronic acid — attract water from the environment or lower skin layers into the stratum corneum). Understanding ingredients allows manicurists to recommend products for different skin types (e.g., very dry skin benefits more from occlusives; normal skin from lighter emollients)."
  },
  {
    q: "A client has a small wart (verruca) on her finger. The manicurist's correct action is:",
    opts: [
      "Apply a salicylic acid solution to help dissolve the wart over time",
      "File or cut around the wart to avoid the area and complete the service",
      "Decline to perform the service on the affected area and refer the client to a physician — warts are caused by HPV, are contagious, and treating them is outside scope of practice",
      "Cover the wart with a bandage and proceed with the full manicure"
    ],
    ans: 2,
    exp: "Warts (verrucae) are caused by the human papillomavirus (HPV). They are contagious through direct contact and through contaminated implements. Manicurists cannot diagnose or treat warts. Filing or cutting around a wart risks spreading the virus to other areas of the client's skin or to the manicurist. The client should be referred to a physician. The service should not be performed on the affected area."
  },
  {
    q: "'Transepidermal water loss' (TEWL) is a concept relevant to manicurists because:",
    opts: [
      "It refers to water added to the skin during a paraffin treatment",
      "When the skin's barrier is compromised (by over-filing, excessive soaking, or chemical exposure), moisture evaporates more rapidly from the skin — leading to dryness, cracking, and increased skin sensitivity",
      "It only affects people with eczema or psoriasis",
      "It describes how acetone removes moisture only from the nail plate, not the surrounding skin"
    ],
    ans: 1,
    exp: "TEWL is the passive loss of water through the skin's epidermal barrier. A healthy stratum corneum minimizes TEWL by forming a lipid barrier between corneocytes. Over-soaking, harsh detergents, acetone, and excessive filing damage this barrier, increasing TEWL and causing dryness, tightness, and cracking. Manicurists should avoid over-soaking and always apply moisturizer after chemical exposure to support barrier recovery."
  },
  {
    q: "When a client's cuticle area shows redness, swelling, and warmth — but no visible pus — and the client reports it is tender to the touch, the MOST likely condition is:",
    opts: [
      "Onychomycosis",
      "Paronychia in its early inflammatory stage — an infection of the soft tissue around the nail",
      "Normal skin response to the previous manicure",
      "Leukonychia"
    ],
    ans: 1,
    exp: "Paronychia is an infection of the skin adjacent to the nail plate, typically at the cuticle or lateral nail fold. Acute paronychia (often bacterial, commonly Staphylococcus aureus) presents with redness, warmth, swelling, and tenderness. Without pus it is in the early inflammatory stage; with pus it may require incision and drainage. It is outside scope of practice — the manicurist must decline the service and refer the client to a physician."
  }

];
