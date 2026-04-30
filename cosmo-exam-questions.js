// Cosmetology State Board Practice Exam — Question Bank
// April 1, 2026 PSI Content Outline — 10 Categories
// Safety & Infection Control 30% | Client Consultation & Analysis 19%
// Chemical Texture Services 12% | Haircoloring 10% | Hair Removal 8%
// Nail Care 8% | Eyelash & Eyebrow 4% | Skin Care 4% | Haircutting 3% | Hairstyling 2%
// Target: 200 questions (2× the 100-question exam)

window.EXAM_QUESTIONS = [

  // ─── SAFETY & INFECTION CONTROL (30%) — target 60 questions ─────────────

  {
    q: "A cosmetologist is about to perform a color service when she notices the client has several small open lesions on the scalp. She should:",
    opts: [
      "Proceed with the color service after applying a barrier cream to the lesions",
      "Decline the color service on the affected areas, reschedule if needed, and refer the client to a physician",
      "Proceed only if the client confirms the lesions are not infected",
      "Apply the color to undamaged areas only and document the lesion locations"
    ],
    ans: 1,
    exp: "Open scalp lesions are a contraindication to chemical services. Chemical colorants can enter broken skin, cause pain, exacerbate the condition, and pose cross-contamination risks. The service should be declined and the client referred to a physician before proceeding."
  },
  {
    q: "Under California law, which agency is responsible for licensing cosmetologists and inspecting salons?",
    opts: [
      "The California Department of Industrial Relations",
      "The California Board of Barbering and Cosmetology (CBBC)",
      "The California Department of Consumer Affairs only",
      "The California Environmental Protection Agency"
    ],
    ans: 1,
    exp: "The California Board of Barbering and Cosmetology (CBBC) issues licenses, conducts inspections, enforces regulations, and disciplines licensees. It operates under the California Department of Consumer Affairs."
  },
  {
    q: "The DIFFERENCE between a cosmetic and a drug, as defined by the FDA, is:",
    opts: [
      "Cosmetics require a prescription; drugs can be purchased over the counter",
      "Cosmetics are intended to affect the appearance without altering structure or function; drugs are intended to cause physiological changes in the body",
      "Cosmetics are regulated by OSHA; drugs are regulated by the FDA",
      "There is no meaningful FDA distinction between cosmetics and drugs"
    ],
    ans: 1,
    exp: "By FDA definition, cosmetics affect appearance without altering the structure or function of the body. Drugs are intended to diagnose, cure, treat, prevent, or affect the structure/function of the body. Shampoo = cosmetic; dandruff shampoo with pyrithione zinc = drug because it treats a condition."
  },
  {
    q: "Which type of infection can spread from cosmetologist to client through contaminated combs and brushes?",
    opts: [
      "Influenza virus",
      "Tinea capitis (scalp ringworm)",
      "Hepatitis C (bloodborne)",
      "MRSA (only spreads via blood)"
    ],
    ans: 1,
    exp: "Tinea capitis is a highly contagious fungal infection of the scalp that can spread via contaminated combs, brushes, clippers, and direct contact. All tools must be disinfected between clients. A client with tinea capitis must be referred to a physician — no hair services should be performed."
  },
  {
    q: "Head lice (pediculosis capitis) are classified as which type of pathogen?",
    opts: [
      "Bacteria",
      "Fungi",
      "Parasites",
      "Viruses"
    ],
    ans: 2,
    exp: "Head lice are parasites — organisms that live on a host and contribute nothing to the host's survival. They spread through direct head-to-head contact and shared personal items (combs, caps). A client with active lice must be refused service and referred for treatment."
  },
  {
    q: "A cosmetologist accidentally cuts a client's skin while trimming hair. Blood is present. The FIRST action should be to:",
    opts: [
      "Apply styptic powder and continue the haircut",
      "Ask the client to hold a tissue while you finish",
      "Don gloves immediately before touching the wound, stop the service, and apply antiseptic",
      "Rinse the area with hot water and apply a bandage, then continue"
    ],
    ans: 2,
    exp: "Standard Precautions require treating all blood as potentially infectious. The cosmetologist must put on gloves before touching the wound, stop the service, apply appropriate first aid (antiseptic), and properly dispose of contaminated materials. The service may resume only when bleeding is controlled and the wound is protected."
  },
  {
    q: "To properly disinfect shears, the CORRECT sequence is:",
    opts: [
      "Spray with disinfectant, wipe dry, and store in a drawer",
      "Wipe clean of all hair and debris, apply EPA-registered disinfectant, allow full contact time, then rinse and dry",
      "Submerge in boiling water for 10 minutes",
      "Apply barbicide directly to blades without prior cleaning"
    ],
    ans: 1,
    exp: "Non-porous implements must be cleaned (removing all hair and debris) BEFORE disinfection. Apply EPA-registered disinfectant and allow the full contact time per label instructions. Disinfectant cannot penetrate organic matter."
  },
  {
    q: "A cosmetologist performing a chemical service has a known latex allergy. What is the safest option?",
    opts: [
      "Use latex gloves lined with cotton to prevent skin contact",
      "Work without gloves since chemical gloves are optional",
      "Use nitrile or vinyl gloves, which are effective chemical barriers and latex-free",
      "Wear double latex gloves for extra protection"
    ],
    ans: 2,
    exp: "Nitrile gloves provide an effective chemical barrier, are durable against many salon chemicals (including hydrogen peroxide and thioglycolate), and contain no latex. Vinyl gloves are also latex-free but offer less chemical resistance than nitrile. Never work without gloves during chemical services."
  },
  {
    q: "OSHA's Hazard Communication Standard requires cosmetologists to understand the contents of a Safety Data Sheet (SDS). The section addressing PPE requirements is:",
    opts: [
      "Section 4 — First-Aid Measures",
      "Section 8 — Exposure Controls / Personal Protection",
      "Section 11 — Toxicological Information",
      "Section 2 — Hazard Identification"
    ],
    ans: 1,
    exp: "SDS Section 8 covers exposure controls and personal protective equipment (PPE), including recommended glove types, eye protection, and respiratory protection. Section 4 covers first aid; Section 11 covers toxicology; Section 2 identifies hazards."
  },
  {
    q: "Linens and capes used on clients must be:",
    opts: [
      "Reused for multiple clients as long as they appear clean",
      "Laundered with hot water and detergent at least weekly",
      "Clean for each client — freshly laundered or single-use disposable",
      "Disinfected with EPA-registered disinfectant spray between clients"
    ],
    ans: 2,
    exp: "California requires fresh, clean linens (towels, capes) for each client. Reusing linens that have contacted one client on another is a sanitation violation. Soiled linens must be stored in a covered laundry receptacle separate from clean supplies."
  },
  {
    q: "Which of the following correctly describes the difference between bactericidal and virucidal disinfectants?",
    opts: [
      "Bactericidal agents destroy viruses; virucidal agents destroy bacteria",
      "Bactericidal agents destroy bacteria; virucidal agents destroy viruses",
      "Both terms refer to the same type of disinfectant activity",
      "Bactericidal kills all microbial life; virucidal only kills bloodborne viruses"
    ],
    ans: 1,
    exp: "Bactericidal means capable of killing bacteria. Virucidal means capable of killing viruses. Fungicidal means capable of killing fungi/molds. California-approved salon disinfectants must be all three AND carry an EPA registration number."
  },
  {
    q: "An important reason to require clients to complete a health history intake form before chemical services is to:",
    opts: [
      "Meet state board record-keeping quotas",
      "Identify contraindications such as scalp conditions, medications, and allergies that could affect service safety",
      "Help the cosmetologist remember the client's preferred style",
      "Collect client contact information for marketing purposes"
    ],
    ans: 1,
    exp: "Health history forms capture contraindications — active scalp conditions, recent medications (e.g., blood thinners affecting skin sensitivity, chemo affecting hair), allergies, and previous chemical history. These directly affect whether a chemical service can safely proceed."
  },
  {
    q: "The EPA registration number on a salon disinfectant label indicates:",
    opts: [
      "The product meets FDA safety standards for cosmetics",
      "The product has been tested and registered by the EPA as effective against listed pathogens",
      "The product is safe for use on human skin",
      "The product meets OSHA's chemical storage requirements"
    ],
    ans: 1,
    exp: "The EPA registers disinfectants and verifies their effectiveness against the pathogens listed on the label. The EPA registration number is required on all salon disinfectants and confirms the product has met federal efficacy standards."
  },
  {
    q: "A cosmetologist who performs a service outside of their licensed scope of practice risks:",
    opts: [
      "Only a minor warning from the state board",
      "License suspension or revocation and personal legal liability if a client is harmed",
      "A temporary increase in service prices",
      "No consequences if the client is satisfied with the results"
    ],
    ans: 1,
    exp: "Performing services outside your licensed scope of practice in California can result in license suspension or revocation, civil liability, and criminal penalties if harm occurs."
  },
  {
    q: "When handling a chemical relaxer, which personal protective equipment is MOST critical?",
    opts: [
      "Eye protection only",
      "Chemical-resistant gloves, eye protection, and ideally a protective apron",
      "A face mask to prevent inhalation of fumes",
      "No PPE is required if the product is diluted per manufacturer instructions"
    ],
    ans: 1,
    exp: "Hydroxide relaxers are highly alkaline (pH 12–14) and cause severe chemical burns on contact with skin and eyes. Chemical-resistant gloves, safety glasses/goggles, and an apron provide comprehensive protection."
  },
  {
    q: "Which of the following is the CORRECT action when a disinfectant container label is no longer readable?",
    opts: [
      "Continue using the product since you remember what it is",
      "Discard or relabel the container immediately — using unlabeled chemical containers is a regulatory violation",
      "Mark it with a marker as 'disinfectant'",
      "Store it separately until you can verify the contents"
    ],
    ans: 1,
    exp: "OSHA requires all hazardous chemical containers to be properly labeled. An unreadable label means you cannot verify safety instructions or the product's efficacy. The container must be replaced or relabeled immediately."
  },
  {
    q: "The PRIMARY reason hair cutting implements must be disinfected between every client is to:",
    opts: [
      "Maintain the sharpness of the blade",
      "Prevent transmission of pathogens — including scalp fungi, bacteria, and bloodborne viruses — between clients",
      "Comply with manufacturer warranty requirements",
      "Satisfy clients who prefer freshly cleaned tools"
    ],
    ans: 1,
    exp: "Shears and clippers contact the scalp and can nick skin. Contaminated tools can transmit tinea capitis, MRSA, and bloodborne pathogens. EPA-registered disinfection between clients is required by California regulations."
  },
  {
    q: "A hair dryer at the salon station shows frayed wiring. The CORRECT action is to:",
    opts: [
      "Wrap the frayed area with electrical tape and continue using it",
      "Continue using it if it still functions but order a replacement",
      "Remove it from service immediately and report it for repair or replacement",
      "Use it only on low settings to prevent further damage"
    ],
    ans: 2,
    exp: "Frayed wiring on electrical tools poses an electrocution and fire risk. The tool must be removed from service immediately, violating OSHA safety standards and California health and safety codes."
  },
  {
    q: "Standard Precautions require treating ALL of the following as potentially infectious EXCEPT:",
    opts: [
      "Blood from a visible cut",
      "Body fluids without visible blood",
      "Non-intact client skin",
      "Clean, intact skin with no visible break"
    ],
    ans: 3,
    exp: "Standard Precautions apply to blood, all body fluids (regardless of visible blood), non-intact skin, and mucous membranes. Clean, intact skin without any visible break is not treated as an exposure risk under Standard Precautions."
  },
  {
    q: "Which item in a cosmetology salon CANNOT be disinfected and must be discarded after single use?",
    opts: [
      "Metal tail comb",
      "Glass mixing bowl",
      "Neck strip",
      "Stainless steel spatula"
    ],
    ans: 2,
    exp: "Neck strips are paper/fabric single-use items that cannot be disinfected. They must be used on one client only and discarded. Non-porous implements (metal combs, glass bowls, stainless spatulas) can be cleaned and disinfected for reuse."
  },
  {
    q: "Tinea capitis is a contraindication to hair services because:",
    opts: [
      "The fungal spores clog salon drains",
      "It is a highly contagious fungal infection of the scalp that spreads through contaminated tools and direct contact",
      "Salon chemicals kill the fungus and worsen the client's condition",
      "It only affects the client's immune system, not the scalp surface"
    ],
    ans: 1,
    exp: "Tinea capitis (ringworm of the scalp) is caused by dermatophyte fungi and spreads readily through contaminated combs, brushes, clippers, and towels. The client must be refused service and referred to a physician for treatment."
  },
  {
    q: "When diluting a concentrated disinfectant, the cosmetologist should:",
    opts: [
      "Estimate the dilution ratio by appearance and scent",
      "Follow the exact manufacturer dilution instructions and use measuring tools for accuracy",
      "Add more concentrate than recommended to ensure stronger protection",
      "Dilute once per week and reuse the solution"
    ],
    ans: 1,
    exp: "Disinfectant efficacy depends on proper concentration. Manufacturer dilution instructions have been validated by EPA testing — deviating from them invalidates the product's registered efficacy."
  },
  {
    q: "Psoriasis on the scalp is classified as which type of condition?",
    opts: [
      "A bacterial infection requiring antibiotic treatment",
      "A contagious fungal condition",
      "A non-contagious autoimmune condition",
      "A viral infection requiring antiviral medication"
    ],
    ans: 2,
    exp: "Psoriasis is a chronic autoimmune condition causing rapid skin cell turnover. It is NOT contagious. Cosmetologists can generally service clients with scalp psoriasis as long as there is no broken skin, open lesions, or active infection present."
  },
  {
    q: "The disposal of used single-use items (neck strips, cotton pads, disposable gloves) should be:",
    opts: [
      "Placed in an open-top trash bin at the workstation",
      "Stored in a dedicated basket for end-of-day disposal",
      "Placed immediately in a covered trash receptacle at the workstation",
      "Kept separately from regular trash in a labeled biohazard bag"
    ],
    ans: 2,
    exp: "California requires covered trash receptacles at workstations for proper disposal of single-use items. Covered receptacles prevent contamination of surrounding surfaces. Biohazard bags are reserved for items contaminated with blood or body fluids."
  },
  {
    q: "Hepatitis B virus (HBV) can survive outside the body on surfaces for up to:",
    opts: [
      "2 hours",
      "24 hours",
      "7 days",
      "30 days"
    ],
    ans: 2,
    exp: "HBV is a hardy bloodborne pathogen that can survive on dried surfaces at room temperature for up to 7 days. This makes surface disinfection between clients especially critical in salons where skin nicking is possible."
  },
  {
    q: "Which SDS section provides first-aid instructions for chemical exposure?",
    opts: [
      "Section 2 — Hazard Identification",
      "Section 4 — First Aid Measures",
      "Section 7 — Handling and Storage",
      "Section 8 — Exposure Controls"
    ],
    ans: 1,
    exp: "Section 4 of the standardized 16-section SDS covers First Aid Measures — what to do if someone is exposed by inhalation, skin contact, eye contact, or ingestion."
  },
  {
    q: "Impetigo, caused by Staphylococcus or Streptococcus bacteria, appears on the face as:",
    opts: [
      "Dry, scaly patches",
      "Honey-colored crusted sores that are highly contagious",
      "Deep cystic nodules under the skin",
      "Raised, wart-like growths"
    ],
    ans: 1,
    exp: "Impetigo is a highly contagious bacterial skin infection presenting as weeping sores with characteristic honey-colored crusts, most commonly around the mouth and nose. Any cosmetology service in the affected area is contraindicated — the client must be referred to a physician."
  },
  {
    q: "When storing flammable salon chemicals (acetone, monomers), the CORRECT practice is to:",
    opts: [
      "Store near the heating vent for easy access",
      "Keep in open containers to prevent pressure buildup",
      "Store in tightly sealed, clearly labeled containers away from heat sources, sparks, and open flames",
      "Refrigerate to preserve potency"
    ],
    ans: 2,
    exp: "Flammable chemicals pose fire and explosion risks. Their vapors are heavier than air and can travel to ignition sources. Sealed containers prevent vapor accumulation; cool, ventilated storage away from heat sources and open flames is essential."
  },
  {
    q: "A client arrives with an active cold sore (herpes simplex labialis) near her lips. The cosmetologist should:",
    opts: [
      "Proceed if the client has been using antiviral cream",
      "Avoid the facial area entirely, but proceed with a shampoo and style",
      "Perform all services normally as herpes simplex is only contagious through kissing",
      "Decline all services — herpes simplex lesions are actively infectious and can spread to the cosmetologist"
    ],
    ans: 1,
    exp: "An active cold sore (herpes simplex) is an open, infectious viral lesion. Direct contact risk can be minimized by avoiding services around the face/mouth area. Services not involving contact near the lesion (shampoo, style) are generally acceptable. If the client requires facial services, they should reschedule until the lesion is fully healed."
  },
  {
    q: "A cosmetologist's license renewal in California requires:",
    opts: [
      "Passing the state board exam again",
      "Completing required continuing education hours and paying the renewal fee before expiration",
      "Completing 60 hours of additional training and a skills assessment",
      "No action — licenses renew automatically"
    ],
    ans: 1,
    exp: "California cosmetology licenses must be renewed with the required fee and any mandated continuing education. Operating with an expired license is a violation that can result in fines and the inability to legally perform services."
  },
  {
    q: "The MOST important reason for thorough hand hygiene before every salon service is:",
    opts: [
      "To soften the cosmetologist's hands",
      "To comply with client expectations of cleanliness",
      "To reduce transient microorganisms on the hands that could be transmitted to the client",
      "To activate glove adhesion"
    ],
    ans: 2,
    exp: "Hand hygiene removes transient microorganisms picked up from surfaces and previous clients. It is the single most important infection control habit for preventing disease transmission from practitioner to client."
  },
  {
    q: "Which of the following chemicals used in cosmetology is classified as a known carcinogen and respiratory sensitizer by OSHA?",
    opts: [
      "Ethyl methacrylate",
      "Formaldehyde (found in some keratin treatments and nail hardeners)",
      "Isopropyl alcohol",
      "Acetone"
    ],
    ans: 1,
    exp: "OSHA classifies formaldehyde as a probable/known carcinogen and a respiratory sensitizer. Keratin smoothing treatments that contain formaldehyde or formaldehyde-releasing compounds release vapors during heat activation that can cause eye, nose, and respiratory irritation and long-term sensitization."
  },
  {
    q: "When a state board inspector arrives for an unannounced inspection, the cosmetologist must:",
    opts: [
      "Ask the inspector to schedule a future appointment",
      "Refuse entry until a manager is present",
      "Allow immediate access to the entire salon, implements, supplies, and license documents",
      "Complete all services in progress before allowing inspection to begin"
    ],
    ans: 2,
    exp: "State board inspectors have the legal authority to conduct unannounced inspections of all licensed salons. Refusing entry or delaying access is a violation that can result in additional citations or license suspension."
  },
  {
    q: "When a chemical relaxer accidentally gets into a client's eye, the FIRST action is to:",
    opts: [
      "Apply a neutralizing rinse specifically formulated for the relaxer brand",
      "Pat the eye dry with a clean towel and monitor for irritation",
      "Immediately flush the eye with copious amounts of cool water for at least 15–20 minutes and refer to emergency care",
      "Apply an eye drop formulated for chemical irritation"
    ],
    ans: 2,
    exp: "Hydroxide relaxers are highly alkaline (pH 12–14) and can cause severe chemical burns to the eye. Immediate and prolonged flushing with cool water (15–20 minutes) is the universal first aid for chemical eye exposure. The client must be referred to emergency medical care."
  },
  {
    q: "A client who identifies as HIV-positive arrives for a shampoo and style. The cosmetologist should:",
    opts: [
      "Politely decline the service due to infection risk",
      "Request a physician clearance letter before proceeding",
      "Provide the service using Standard Precautions — the same protocol applied to every client",
      "Use only disposable tools for this client"
    ],
    ans: 2,
    exp: "Refusing service to an HIV-positive client is illegal discrimination. Standard Precautions, applied consistently to all clients, adequately protect against bloodborne transmission. No client may be denied service based on HIV status."
  },
  {
    q: "Disinfected implements must be stored in which manner?",
    opts: [
      "On an open countertop near the station for quick access",
      "In the same container as soiled implements",
      "In a clean, covered container or sealed bag to prevent recontamination",
      "In an actively running UV cabinet indefinitely"
    ],
    ans: 2,
    exp: "Disinfected implements must be stored in a clean, covered container or sealed bag to prevent recontamination from airborne particles, other implements, or contact. Leaving disinfected implements on open countertops defeats the purpose of disinfection."
  },
  {
    q: "Which of the following BEST describes the difference between sanitation and disinfection?",
    opts: [
      "Sanitation destroys all pathogens; disinfection only removes visible debris",
      "Sanitation reduces microbial counts to a safe public-health level; disinfection destroys most pathogens using EPA-registered chemical agents",
      "Sanitation and disinfection are interchangeable terms",
      "Disinfection removes visible debris; sanitation destroys viruses only"
    ],
    ans: 1,
    exp: "Sanitation reduces (but does not eliminate) microbial levels. Disinfection goes further, using EPA-registered chemicals to destroy most pathogens on non-porous surfaces. Neither achieves sterilization (complete elimination of all microbial life)."
  },
  {
    q: "An OSHA SDS is required in the salon for:",
    opts: [
      "Only products labeled 'toxic' by the manufacturer",
      "All hazardous chemicals present in the workplace",
      "Only chemicals purchased in quantities greater than one gallon",
      "Products with a pH above 10 only"
    ],
    ans: 1,
    exp: "OSHA's HazCom Standard requires an SDS for every hazardous chemical in the workplace — nail polish, acrylic liquids, relaxers, bleach, disinfectants, and more. Employees must have ready access to all SDS documents at all times during their shift."
  },
  {
    q: "Thermolysis (heat-based electrolysis) differs from galvanic (lye-based) electrolysis in that thermolysis:",
    opts: [
      "Is a permanent hair removal method",
      "Destroys the hair follicle with heat from high-frequency current rather than a chemical reaction",
      "Can be performed by cosmetologists in California",
      "Requires no specialized training"
    ],
    ans: 1,
    exp: "Thermolysis uses high-frequency alternating current to generate heat that destroys the hair follicle. Galvanic electrolysis uses direct current to produce sodium hydroxide (lye) at the follicle. Both are permanent methods. In California, electrolysis requires its own separate license — it is outside cosmetology scope."
  },
  {
    q: "When performing a service on a client whose scalp has experienced a recent chemical burn, the cosmetologist should:",
    opts: [
      "Proceed as normal if the burn appears healed",
      "Proceed only with conditioning services, not chemical services",
      "Decline all chemical services on the affected area until the scalp is fully healed and consult a physician for severe burns",
      "Apply a neutralizer to the burned area before proceeding"
    ],
    ans: 2,
    exp: "A scalp that has recently experienced a chemical burn is damaged, compromised, and more vulnerable to further injury. Chemical services must not be performed on burned skin. The client should be referred to a physician if the burn was severe, and no service should proceed until the area is fully healed."
  },
  {
    q: "The contact time specified on an EPA-registered disinfectant label refers to:",
    opts: [
      "How long gloves should be worn after application",
      "The minimum time the surface must remain visibly wet with disinfectant to achieve the labeled kill claim",
      "The maximum shelf life of the prepared solution",
      "How often the solution must be replaced"
    ],
    ans: 1,
    exp: "Contact time is the minimum amount of time a surface must remain wet with the disinfectant for the product to achieve its listed efficacy. Wiping or rinsing before the contact time is complete renders the disinfection incomplete."
  },
  {
    q: "Which of the following correctly matches a pathogen with its classification?",
    opts: [
      "Tinea capitis — virus",
      "Hepatitis B — bacteria",
      "Staphylococcus aureus — bacteria",
      "Head lice — fungi"
    ],
    ans: 2,
    exp: "Staphylococcus aureus is a bacterium. Tinea capitis is a fungus (dermatophyte). Hepatitis B is a virus. Head lice are parasites. Understanding classification helps select appropriate infection control measures."
  },
  {
    q: "A salon work surface that has been contaminated with blood must be:",
    opts: [
      "Wiped with a dry paper towel immediately",
      "Cleaned with soap and water, then disinfected with an EPA-registered disinfectant and allowed full contact time",
      "Sprayed with bleach at any available concentration",
      "Left to air-dry naturally as blood desiccates quickly"
    ],
    ans: 1,
    exp: "Blood-contaminated surfaces must first be cleaned to remove organic material, then disinfected with an EPA-registered product (which may include a diluted bleach solution at 1:100) for the required contact time. Dry paper towels alone do not disinfect."
  },
  {
    q: "A cosmetology student practicing in the school clinic must follow infection control protocols:",
    opts: [
      "Only when a licensed instructor is watching",
      "Only during formal graded assessments",
      "At all times — all state board sanitation regulations apply in school clinics exactly as in licensed salons",
      "Only after they have completed 500 hours of training"
    ],
    ans: 2,
    exp: "California state board sanitation regulations apply fully to cosmetology school clinics. Students must follow all cleaning, disinfecting, and infection control protocols during all supervised practice from day one."
  },
  {
    q: "Which of the following statements about the use of bleach as a salon disinfectant is TRUE?",
    opts: [
      "Household bleach at any concentration is appropriate for all salon surfaces",
      "A 1:100 dilution of household bleach (sodium hypochlorite) can be used as a surface disinfectant but must be freshly prepared and changed regularly as it degrades",
      "Bleach should never be used in a salon environment",
      "Concentrated bleach (undiluted) is safer because it is more effective"
    ],
    ans: 1,
    exp: "A fresh 1:100 dilution of household sodium hypochlorite bleach is an EPA-registered disinfectant effective against blood and most pathogens on salon surfaces. However, bleach degrades quickly, is corrosive at high concentrations, and must be used at proper dilution and changed when it loses potency."
  },
  {
    q: "Ringworm (tinea) on the body is caused by:",
    opts: [
      "A parasitic worm that lives under the skin",
      "Staphylococcus bacteria",
      "A dermatophyte fungus that infects the outer layers of skin, hair, and nails",
      "A viral infection similar to herpes zoster"
    ],
    ans: 2,
    exp: "Despite the name, ringworm has nothing to do with worms. It is a fungal infection caused by dermatophytes (tinea). Different species affect different areas: tinea capitis (scalp), tinea corporis (body), tinea pedis (feet — athlete's foot), tinea unguium (nails — onychomycosis)."
  },
  {
    q: "When a cosmetologist notices the client's scalp has patchy areas of hair loss with short, broken hairs and mild scaling, the MOST likely cause is:",
    opts: [
      "Male-pattern androgenetic alopecia",
      "Tinea capitis — no service should be performed and client must be referred to a physician",
      "A normal reaction to a previous relaxer",
      "Telogen effluvium from stress"
    ],
    ans: 1,
    exp: "Patchy hair loss with short broken hairs ('black dot' pattern) and scalp scaling is classic for tinea capitis, a fungal infection. This is a contagious condition requiring physician treatment. Performing any service could spread the infection and contaminate implements."
  },
  {
    q: "Wig and hairpiece sanitation between client uses requires:",
    opts: [
      "A light spray with perfume to deodorize",
      "Submerging in hot water for 30 minutes",
      "Cleaning to remove product buildup, then disinfecting or sanitizing the cap/base according to manufacturer instructions and California guidelines",
      "No special treatment — wigs are the client's personal property"
    ],
    ans: 2,
    exp: "Wigs and hairpieces used in a salon setting must be properly sanitized between clients. The cap/base (which contacts the scalp) must be cleaned and treated to prevent transfer of scalp conditions, lice, and other pathogens. Follow both manufacturer and California CBBC guidelines."
  },
  {
    q: "A cosmetologist using a flat iron that causes a client to complain of a burning smell and smoke from the hair is experiencing:",
    opts: [
      "A normal chemical reaction from the heat-activated styling product",
      "Thermal (heat) damage to the hair from a tool that is too hot or held too long in one position",
      "An allergic reaction to the heat protectant spray",
      "Oxidation of the natural melanin"
    ],
    ans: 1,
    exp: "A burning smell from hair during flat iron use indicates thermal (heat) damage — the iron is either too hot or being held in place too long, burning the cortex. The service must be stopped immediately. This is avoidable through proper temperature settings, heat protectant use, and keeping the iron moving."
  },
  {
    q: "OSHA's bloodborne pathogens standard requires that cosmetology workers exposed to blood receive:",
    opts: [
      "An annual HIV test",
      "Documentation and access to a confidential post-exposure medical evaluation",
      "A 30-day suspension from client services",
      "Mandatory vaccination for all bloodborne diseases"
    ],
    ans: 1,
    exp: "Following a bloodborne pathogen exposure incident (e.g., a needle stick or cut from a contaminated implement), OSHA requires that the employer provide the worker with a confidential post-exposure evaluation and follow-up, including discussion of relevant vaccinations such as hepatitis B. This is a worker protection right."
  },
  {
    q: "California cosmetology law requires that a cosmetologist's license be:",
    opts: [
      "Kept in the cosmetologist's wallet and shown only upon request",
      "Framed and displayed in the salon waiting area",
      "Posted in a prominent place visible to clients at the workstation",
      "Submitted to the salon owner who maintains all employee licenses"
    ],
    ans: 2,
    exp: "California law requires cosmetology licenses to be prominently displayed at the licensee's workstation or in a location clearly visible to clients. Failure to display is a violation that can result in a citation."
  },
  {
    q: "Which of the following is an example of cross-contamination in the salon?",
    opts: [
      "Using the same towel on the same client during a single service",
      "Applying a fresh cape for each client",
      "Using a comb that was cleaned but not disinfected on a new client",
      "Storing clean implements in a closed container"
    ],
    ans: 2,
    exp: "Cross-contamination occurs when pathogens are transferred from one person or surface to another. A comb that was only cleaned (debris removed) but not properly disinfected may still carry pathogens from the previous client. Using it on a new client creates a cross-contamination risk."
  },
  {
    q: "Photosensitivity reactions from salon chemicals are MOST likely to occur when a client:",
    opts: [
      "Uses too much hairspray after a color service",
      "Receives a chemical service and then has sun exposure, causing an accelerated sunburn or skin reaction in chemically treated areas",
      "Applies conditioner before sun exposure",
      "Uses heat tools within 24 hours of a shampoo"
    ],
    ans: 1,
    exp: "Some chemicals used in chemical services (certain colorants, lighteners, photosensitizing compounds) can make the skin and scalp more sensitive to UV radiation. Clients should be advised to avoid direct sun exposure and use SPF protection after chemical services."
  },
  {
    q: "Which of the following actions requires the cosmetologist to immediately stop the service and refer the client for medical attention?",
    opts: [
      "The client's hair is slightly drier than during the last visit",
      "The client's scalp becomes severely red, blistered, or burned during a chemical service",
      "The relaxer takes slightly longer than usual to process",
      "The client's hair appears to have grown faster than expected since the last visit"
    ],
    ans: 1,
    exp: "Severe redness, blistering, or burns indicate a serious chemical injury. The service must be stopped immediately, the chemical must be rinsed off with cool water, and the client must be advised to seek medical attention. Continuing the service could worsen the injury significantly."
  },
  {
    q: "What is the PRIMARY purpose of using a cape (cutting or chemical) during salon services?",
    opts: [
      "To keep the client warm during the service",
      "To protect the client's clothing from chemical contact and product while also preventing cross-contamination between clients via a freshly laundered cape",
      "To hold tools securely during the service",
      "To signal to other staff that a client is currently in service"
    ],
    ans: 1,
    exp: "Capes protect the client's clothing and body from chemicals, hair clippings, and product. Using a fresh, clean (laundered or disposable) cape for each client also prevents cross-contamination of skin conditions, head lice, or other communicable conditions between clients."
  },
  {
    q: "Which type of bacterium can form endospores that are highly resistant to disinfectants and heat?",
    opts: [
      "Staphylococcus aureus",
      "Propionibacterium acnes",
      "Bacillus anthracis (and other spore-forming bacilli)",
      "Pseudomonas aeruginosa"
    ],
    ans: 2,
    exp: "Spore-forming bacteria such as Bacillus and Clostridium species can produce endospores — dormant forms that resist heat, drying, and many disinfectants. This is why standard disinfectants are not sporicidal and sterilization (autoclave) is needed for true spore destruction."
  },
  {
    q: "The California Board of Barbering and Cosmetology can take which of the following actions against a licensee for repeated violations?",
    opts: [
      "Issue a verbal warning only",
      "Suspend or revoke the license, impose fines, and require retraining",
      "Close the entire salon permanently without a hearing",
      "No action — violations are handled by local health departments only"
    ],
    ans: 1,
    exp: "The CBBC has the authority to issue citations and fines, suspend licenses, revoke licenses, and require corrective action for violations of the California Barbering and Cosmetology Act. Licensees are entitled to a hearing before most severe actions."
  },
  {
    q: "A sanitizer is DIFFERENT from a disinfectant in that a sanitizer:",
    opts: [
      "Destroys all microbial life including spores",
      "Reduces microbial counts on surfaces to a safe level, but does not necessarily kill all pathogens — it is not sufficient for most salon implement processing",
      "Is used specifically for wound care",
      "Is more effective than a disinfectant on porous surfaces"
    ],
    ans: 1,
    exp: "A sanitizer reduces (but does not eliminate) microbial counts on surfaces. For salon implements, California requires disinfection — not just sanitizing — using EPA-registered, bactericidal, virucidal, and fungicidal products."
  },

  // ─── CLIENT CONSULTATION & HAIR/SKIN/NAIL ANALYSIS (19%) ─────────────────

  {
    q: "The three layers of the hair shaft from outside to inside are:",
    opts: [
      "Cortex → Cuticle → Medulla",
      "Cuticle → Cortex → Medulla",
      "Medulla → Cortex → Cuticle",
      "Cuticle → Medulla → Cortex"
    ],
    ans: 1,
    exp: "The hair shaft has three layers: (1) Cuticle — the outermost protective layer of overlapping scales; (2) Cortex — the middle layer providing strength, elasticity, and color (where melanin resides); (3) Medulla — the innermost layer, present mainly in coarse and beard hair."
  },
  {
    q: "Hair POROSITY refers to the hair's ability to:",
    opts: [
      "Stretch when wet and return to its original length",
      "Reflect light from the cuticle surface",
      "Absorb and retain moisture and chemicals",
      "Resist breakage under tension"
    ],
    ans: 2,
    exp: "Porosity is determined by the condition of the cuticle. Low-porosity hair has tight cuticles that resist moisture and chemical absorption. High-porosity hair has raised, damaged cuticles that absorb quickly but also lose moisture fast. Porosity significantly impacts chemical service results."
  },
  {
    q: "Hair ELASTICITY is MOST important to assess before a chemical service because:",
    opts: [
      "It determines the natural hair color",
      "Low elasticity (hair breaks easily when stretched) indicates cortex damage and signals that the hair may not tolerate chemical processing",
      "It determines how long a perm will hold",
      "High elasticity means hair is too resistant for color penetration"
    ],
    ans: 1,
    exp: "Elasticity reflects cortex integrity. Healthy wet hair can stretch up to 50% of its length and return without breaking. Hair with poor elasticity is already damaged — chemical services can cause severe breakage. Always conduct an elasticity test before chemical services."
  },
  {
    q: "The part of the hair follicle that supplies nutrients and blood for hair growth is the:",
    opts: [
      "Arrector pili muscle",
      "Sebaceous gland",
      "Dermal papilla",
      "Outer root sheath"
    ],
    ans: 2,
    exp: "The dermal papilla at the base of the hair follicle contains the blood vessels supplying nutrients to the matrix cells. Any damage to the dermal papilla can permanently stop hair growth in that follicle."
  },
  {
    q: "Eumelanin and pheomelanin are the two types of melanin in hair. Pheomelanin produces:",
    opts: [
      "Dark brown to black pigment",
      "Red to yellow tones",
      "Gray when production slows",
      "White hair when absent"
    ],
    ans: 1,
    exp: "Pheomelanin produces red to yellow pigment tones. Eumelanin produces dark brown to black tones. Natural hair color is determined by the ratio and distribution of these two pigments. Gray/white hair results from reduced melanin production in the follicle."
  },
  {
    q: "During a client consultation for a perm, the cosmetologist tests the hair by stretching a wet strand. It barely stretches and breaks almost immediately. This indicates:",
    opts: [
      "The hair has excellent porosity and will absorb the waving lotion quickly",
      "The hair has poor elasticity — the cortex is damaged and the hair cannot safely undergo a perm",
      "The hair is coarse and resistant — a stronger solution is needed",
      "The hair is in a resting (telogen) growth phase"
    ],
    ans: 1,
    exp: "An elasticity test showing minimal stretch and immediate breaking indicates significant cortex damage. Such hair cannot withstand the chemical stress of permanent waving and would likely break. The service must be declined or conditioned extensively before reconsidering."
  },
  {
    q: "The hair growth cycle consists of three phases. The ANAGEN phase is when:",
    opts: [
      "Hair growth has stopped and the follicle is resting",
      "The hair is actively growing — this phase can last 2–7 years on the scalp",
      "The old hair sheds and the follicle rests",
      "The follicle shrinks and hair detaches from the dermal papilla"
    ],
    ans: 1,
    exp: "Anagen is the active growth phase, lasting 2–7 years on the scalp. Approximately 85–90% of scalp hairs are in anagen at any time. The length of the anagen phase determines maximum possible hair length."
  },
  {
    q: "Hair DENSITY refers to:",
    opts: [
      "The diameter of individual hair strands",
      "The number of hair strands per square inch on the scalp",
      "How much moisture the hair can absorb",
      "The degree of curl or wave in the hair"
    ],
    ans: 1,
    exp: "Density is the number of individual hairs per square inch of the scalp. High density hair requires more product and longer processing time. It is distinct from texture (strand diameter) and porosity (cuticle condition)."
  },
  {
    q: "When consulting with a client who has a strong cowlick at the crown, the cosmetologist should:",
    opts: [
      "Ignore it since it disappears after cutting",
      "Account for it in the cut plan — cutting too short at a cowlick causes the hair to stand up more prominently",
      "Always cut against the direction of the cowlick to neutralize it",
      "Recommend a permanent wave to reshape the growth pattern"
    ],
    ans: 1,
    exp: "Cowlicks are opposing growth patterns. Cutting too short at a cowlick will cause hair to protrude or stand up. The cut must work with the natural growth direction — generally leaving more length in the cowlick area."
  },
  {
    q: "Before performing a relaxer on a new client, a thorough consultation should include:",
    opts: [
      "Checking only the client's desired end result",
      "Asking only about the last shampoo",
      "Assessing hair texture, porosity, elasticity, previous chemical history, scalp health, and recent medications",
      "Only a quick visual inspection"
    ],
    ans: 2,
    exp: "A complete pre-relaxer consultation assesses hair condition (texture, porosity, elasticity), chemical service history (prior relaxers, color, or perms that affect compatibility), scalp condition (contraindications), and medications. Overlooking any factor can result in breakage, burns, or chemical incompatibility."
  },
  {
    q: "The arrector pili muscle in the hair follicle is an involuntary muscle that:",
    opts: [
      "Produces sebum that moisturizes the scalp",
      "Contracts in response to cold or fear, causing hair to stand upright (goosebumps) and pushing sebum from the sebaceous gland",
      "Controls the direction of hair growth",
      "Pulls the follicle deeper during the anagen phase"
    ],
    ans: 1,
    exp: "The arrector pili is the involuntary muscle attached to the hair follicle. When it contracts (cold, fear), hair stands erect (goosebumps) and sebum is pushed from the gland onto the skin surface."
  },
  {
    q: "A client with alopecia areata (patchy hair loss) asks what caused it. The MOST accurate response is:",
    opts: [
      "Overuse of hair products has clogged the follicles",
      "It is an autoimmune condition in which the immune system attacks the hair follicles — medical treatment is available",
      "It is always caused by stress or trauma",
      "It is contagious and requires the client to avoid public spaces"
    ],
    ans: 1,
    exp: "Alopecia areata is an autoimmune condition — the immune system incorrectly targets hair follicles. It is not contagious, not caused solely by stress (though stress may trigger flare-ups), and is not related to product use. Medical treatment (corticosteroids, minoxidil) is available through a physician."
  },
  {
    q: "When a client mentions they are currently taking blood-thinning medication (e.g., warfarin), the cosmetologist should be most aware of:",
    opts: [
      "Chemical interactions between the medication and hair products",
      "Increased risk of prolonged bleeding if the scalp is nicked during a cut or chemical service",
      "The medication causing hair to process faster during chemical services",
      "No special considerations are needed"
    ],
    ans: 1,
    exp: "Blood-thinning (anticoagulant) medications prevent normal clotting, so even minor scalp nicks can lead to prolonged bleeding. Extreme care must be used during all services involving scalp contact, and the client should be informed."
  },
  {
    q: "Trichorrhexis nodosa appears as:",
    opts: [
      "A fungal infection causing the hair to fall out at the root",
      "Small bead-like nodes along the hair shaft where the cortex has frayed, causing the hair to break easily",
      "Rapid root-to-tip oil accumulation",
      "Excessive melanin deposits"
    ],
    ans: 1,
    exp: "Trichorrhexis nodosa presents as tiny beaded nodes along the shaft where cortex fibers have fractured and frayed. It is caused by physical, chemical, or thermal damage. Affected hair breaks very easily. Services that cause further damage must be avoided."
  },
  {
    q: "The Fitzpatrick scale in a cosmetology consultation context is used to:",
    opts: [
      "Classify the type of permanent wave needed",
      "Assess the client's skin sensitivity to UV light, guiding SPF recommendations and caution with heat services near the face",
      "Determine natural hair color level",
      "Select the appropriate relaxer strength"
    ],
    ans: 1,
    exp: "The Fitzpatrick scale classifies skin by UV response (I = very fair/burns easily to VI = very dark/never burns). In cosmetology, it guides sun protection recommendations, sensitivity considerations for facial chemical services, and risk of post-inflammatory hyperpigmentation."
  },
  {
    q: "A client's record card is important for chemical services because:",
    opts: [
      "It is required only for first-time color clients",
      "It documents formulas, developer volumes, processing times, results, and adverse reactions — providing a reproducible record for future services",
      "It serves only as a billing document",
      "It is optional unless the client requests documentation"
    ],
    ans: 1,
    exp: "Client record cards (consultation records) capture chemical formulas, processing times, strand test results, any reactions, and correction history. Without records, reproducing a successful result or avoiding a repeat problem becomes impossible."
  },
  {
    q: "When a client requests a color service for which she is NOT a good candidate (severely damaged hair, requesting platinum blonde), the MOST ethical response is:",
    opts: [
      "Perform the service if the client signs a waiver",
      "Proceed immediately to avoid losing the client",
      "Honestly explain the risks and contraindications, offer safer alternatives, and decline if the service would cause harm",
      "Perform the service halfway and stop"
    ],
    ans: 2,
    exp: "Professional ethics require prioritizing the client's hair health over revenue. A waiver does not protect a cosmetologist from liability for knowingly performing an unsafe service. Honest communication, alternatives, and refusal when necessary demonstrates the highest professional integrity."
  },
  {
    q: "The sebaceous gland's primary function in the hair follicle is to:",
    opts: [
      "Stimulate matrix cells to produce new hair growth",
      "Secrete sebum that lubricates and moisturizes the hair shaft and provides the skin's acid mantle",
      "Produce the melanin responsible for hair color",
      "Attach the hair follicle to the epidermis"
    ],
    ans: 1,
    exp: "Sebum is the oily secretion of the sebaceous gland that lubricates the hair and skin, helping retain moisture and providing the slightly acidic protective barrier (acid mantle, pH 4.5–5.5). Overproduction creates oily hair; underproduction causes dryness."
  },
  {
    q: "The primary skin type classification recognizes four main types. A client with visible shine in the T-zone but normal to dry cheeks has:",
    opts: [
      "Oily skin",
      "Combination skin",
      "Sensitive skin",
      "Dry skin"
    ],
    ans: 1,
    exp: "Combination skin features an oily T-zone (forehead, nose, chin — where sebaceous glands are densest) and drier or normal cheeks. It is the most common skin type and requires zone-specific product recommendations."
  },
  {
    q: "Hair texture is defined as:",
    opts: [
      "The wave pattern of the hair strand",
      "The diameter of an individual hair strand — fine, medium, or coarse",
      "The condition of the cuticle layer",
      "The density of hair per square inch"
    ],
    ans: 1,
    exp: "Texture refers to individual strand diameter: fine (small diameter), medium, or coarse (large diameter). Texture affects how hair responds to products, heat, and chemicals — fine hair processes faster, coarse hair may need more time."
  },
  {
    q: "Which of the following is a normal finding in the TELOGEN phase of the hair growth cycle?",
    opts: [
      "Rapid cell division at the matrix",
      "Increasing hair length",
      "The hair resting in the follicle for 2–4 months before shedding",
      "The dermal papilla forming new blood vessels"
    ],
    ans: 2,
    exp: "Telogen is the resting phase. The mature hair remains in the follicle without growing for 2–4 months, then sheds as a new anagen-phase hair begins to grow. About 10–15% of scalp hairs are in telogen at any given time, accounting for the normal loss of 50–100 hairs per day."
  },

  // ─── CHEMICAL TEXTURE SERVICES (12%) ─────────────────────────────────────

  {
    q: "The natural pH of healthy hair is approximately:",
    opts: [
      "7.0 (neutral)",
      "8.5–9.5 (alkaline)",
      "4.5–5.5 (slightly acidic)",
      "2.0–3.0 (strongly acidic)"
    ],
    ans: 2,
    exp: "Healthy hair has an acid mantle at approximately pH 4.5–5.5. Alkaline chemicals swell the cuticle and penetrate the cortex to alter bonds. After processing, acidic rinses close the cuticle and help restore some of the acid mantle."
  },
  {
    q: "A hydroxide relaxer PERMANENTLY straightens hair by:",
    opts: [
      "Breaking and reforming disulfide bonds in a new position",
      "Converting disulfide bonds to lanthionine bonds through lanthionization — a one-way, irreversible chemical reaction",
      "Temporarily relaxing hydrogen bonds with water",
      "Depositing a smoothing polymer coating over the cortex"
    ],
    ans: 1,
    exp: "Hydroxide relaxers (sodium, potassium, lithium, guanidine) permanently straighten through lanthionization: they break a disulfide bond and remove one sulfur atom, forming a lanthionine bond with only one sulfur atom. This CANNOT be reversed or permed over with a thio product."
  },
  {
    q: "A client with a sodium hydroxide relaxer wants a new thio permanent wave. The cosmetologist should:",
    opts: [
      "Proceed with a mild formula",
      "Do a strand test first",
      "Decline — lanthionine bonds cannot be permed with thio, and attempting it will cause severe breakage",
      "Apply a protein filler before perming to make the hair more receptive"
    ],
    ans: 2,
    exp: "Hair processed with a hydroxide relaxer contains lanthionine bonds. Thio waving lotion cannot properly break these bonds, the hair will not curl, and severe breakage will result. Mixing hydroxide-relaxed hair with thio services is a major contraindication."
  },
  {
    q: "In a permanent wave, the neutralizer's function is to:",
    opts: [
      "Break disulfide bonds to allow restructuring around rods",
      "Add moisture back to the cortex after waving lotion damage",
      "Rebond the broken disulfide bonds in the hair's new curled position, making the curl permanent",
      "Lower the pH to balance the alkaline waving lotion"
    ],
    ans: 2,
    exp: "Permanent waving uses: (1) waving lotion (thio) to break disulfide bonds; (2) neutralizer (usually hydrogen peroxide or sodium bromate) to oxidize and reform those bonds in the curled position. Without complete neutralization, the curl is not permanent."
  },
  {
    q: "A client who had a thio relaxer 8 months ago wants a thio permanent wave on new growth only. The cosmetologist should:",
    opts: [
      "Decline the service — thio chemistry cannot be used twice on the same hair",
      "Apply the perm solution only to the new growth, keeping it off the previously relaxed hair which may over-process",
      "Apply the perm solution from roots to ends for even processing",
      "Neutralize the relaxed ends first before applying waving lotion to the new growth"
    ],
    ans: 1,
    exp: "Thio-relaxed hair CAN be permed with thio chemistry, but only the new growth needs the waving lotion. The previously relaxed hair is already chemically altered and will process faster — or over-process — if re-treated. Using a barrier on the ends or overlapping to previously treated hair must be avoided."
  },
  {
    q: "Acid-balanced perms differ from alkaline (cold wave) perms in that acid perms:",
    opts: [
      "Process at room temperature without heat",
      "Use glyceryl monothioglycolate at a lower pH (6.5–7.0) and require heat to activate, processing more slowly and gently",
      "Use a stronger waving lotion suitable for resistant hair",
      "Cannot be used on previously color-treated hair"
    ],
    ans: 1,
    exp: "Acid-balanced perms use glyceryl monothioglycolate at pH 6.5–7.0. They require added heat (hood dryer or body heat) to activate and process more slowly and gently than alkaline (ammonium thioglycolate, pH 8.2–9.6) cold waves. They are preferred for fine, fragile, or color-treated hair."
  },
  {
    q: "The 'base' application technique in hydroxide relaxer services refers to:",
    opts: [
      "Applying the relaxer to the base (root area) first",
      "Applying a protective base cream to the scalp before relaxer application to prevent burns",
      "Using a base concentration formula for the entire head",
      "Starting the application at the nape of the neck"
    ],
    ans: 1,
    exp: "In relaxer services, 'basing' means applying a protective petroleum-based cream to the scalp and skin before applying the highly alkaline relaxer. The cream creates a barrier between the chemical and the scalp, reducing the risk of chemical burns."
  },
  {
    q: "When performing a relaxer retouch, the relaxer should be applied:",
    opts: [
      "To the entire hair length from roots to ends",
      "Only to the new growth, keeping the product off previously relaxed hair to prevent over-processing",
      "To the ends first, then to the new growth",
      "Applied all at once and rinsed after 5 minutes regardless of hair length"
    ],
    ans: 1,
    exp: "For retouch services, relaxer is applied only to the new growth. Overlapping onto previously relaxed hair causes over-processing, extreme breakage, and damage because the previously processed bonds are already modified."
  },
  {
    q: "Thio (ammonium thioglycolate) CAN be used after a thio relaxer because:",
    opts: [
      "The bonds were permanently lanthionized, making them inert",
      "Thio chemistry reformulates the disulfide bonds — they were reformed after the relaxer, so they can be broken and reformed again by a perm",
      "Thio products neutralize each other chemically",
      "California allows combination services regardless of chemistry"
    ],
    ans: 1,
    exp: "Thio relaxers break then REFORM disulfide bonds. The reformed bonds can be broken and reformed again — meaning a thio permanent wave CAN be performed on thio-relaxed hair (unlike hydroxide-relaxed hair where bonds are permanently lanthionized and cannot be re-broken for perming)."
  },
  {
    q: "A Strand Test before a chemical service is performed to:",
    opts: [
      "Assess the client's scalp health only",
      "Check processing time, color or texture results, and hair integrity before full application",
      "Determine the client's natural hair texture for the record",
      "Test whether the stylist's technique is correct"
    ],
    ans: 1,
    exp: "A strand test is performed on a small, hidden section to assess: processing speed, desired results, and whether the hair can withstand the service. It is essential for new clients, damaged hair, and any service where results are uncertain."
  },
  {
    q: "A client's hair feels sticky and gummy when stretched during a relaxer service. This indicates:",
    opts: [
      "Optimal relaxation — the service is complete",
      "The hair is beginning to over-process and the relaxer must be removed immediately",
      "Normal processing — gummy texture means the bonds are reforming",
      "The client's hair has high porosity and needs more product"
    ],
    ans: 1,
    exp: "A gummy, sticky, or limp texture during a relaxer service signals over-processing — the protein bonds of the cortex are degrading. If not immediately rinsed, the hair will break. The relaxer must be removed with cool water and a neutralizing shampoo at once."
  },
  {
    q: "Keratin smoothing treatments that release formaldehyde vapors require which safety precaution ABOVE ALL OTHERS?",
    opts: [
      "Client must wear a face shield",
      "Adequate ventilation and respiratory protection for both the cosmetologist and client during application and heat activation",
      "A special license beyond cosmetology",
      "Application to dry hair only"
    ],
    ans: 1,
    exp: "Formaldehyde is an OSHA-classified probable carcinogen and respiratory sensitizer. Heat-activating keratin treatments releases concentrated vapors. Adequate ventilation (open windows, exhaust fans) and an appropriate respirator — not just a surgical mask — are essential to reduce inhalation exposure."
  },
  {
    q: "Virgin hair processes chemical services differently than previously treated hair because:",
    opts: [
      "Virgin hair always has low porosity and resists chemicals",
      "Virgin hair has an intact, uniform cuticle and cortex with consistent porosity from root to end, making processing more predictable",
      "Virgin hair is always resistant to color deposit",
      "Virgin hair cannot tolerate any chemical services"
    ],
    ans: 1,
    exp: "Virgin hair (never chemically processed) has an intact cuticle and uniform porosity from root to end. This creates predictable, even results. Previously processed hair has variable porosity — more porous in damaged areas — which creates uneven uptake and requires modified formulation."
  },
  {
    q: "When a client experiences excessive scalp tingling that worsens during a relaxer service, the cosmetologist should:",
    opts: [
      "Reassure the client that tingling is normal and continue processing",
      "Add more base cream to the scalp and continue processing",
      "Rinse the relaxer off immediately with cool water and apply a neutralizing shampoo",
      "Blow-dry the scalp to speed the reaction and reduce processing time"
    ],
    ans: 2,
    exp: "Excessive or worsening tingling during a relaxer indicates chemical irritation progressing toward a burn. The service must be stopped immediately. Cool water rinse followed by a neutralizing shampoo removes the alkaline chemical before a serious scalp burn develops."
  },
  {
    q: "What is the PRIMARY risk of over-lapping (applying fresh relaxer on top of previously relaxed hair)?",
    opts: [
      "The color in the hair will fade faster",
      "Severe breakage at the line of demarcation due to double chemical processing of the same bonds",
      "The hair will become resistant to future relaxer services",
      "The scalp will become dry due to over-conditioning"
    ],
    ans: 1,
    exp: "The line of demarcation — where new growth meets previously relaxed hair — is the most vulnerable point. Over-lapping applies relaxer twice to already-processed hair, destroying the remaining disulfide bonds and causing breakage at that junction. Precise application technique prevents this."
  },

  // ─── HAIRCOLORING (10%) ───────────────────────────────────────────────────

  {
    q: "The level system in haircoloring describes:",
    opts: [
      "The warmth or coolness of a hair color (its tone)",
      "The lightness or darkness of a color (1 = darkest/black, 10 = lightest/pale yellow)",
      "The saturation or vibrancy of the color",
      "The pH scale used to measure the developer"
    ],
    ans: 1,
    exp: "The level system (1–10) measures depth — how light or dark a color is: Level 1 = black, Level 10 = lightest blonde. It is independent of tone (ash, gold, red). Understanding level is fundamental to formulating correct color and predicting lift."
  },
  {
    q: "Hydrogen peroxide developer volume refers to:",
    opts: [
      "The percentage of water in the developer",
      "The oxidizing strength — 20 vol. provides 1–2 levels of lift; 30 vol. provides 2–3 levels; 40 vol. provides maximum lift of 3+ levels",
      "The alkalinity of the developer",
      "How quickly color molecules oxidize at a given temperature"
    ],
    ans: 1,
    exp: "Volume indicates oxidizing strength: 10 vol. = deposit only/minimal lift; 20 vol. = 1–2 levels; 30 vol. = 2–3 levels; 40 vol. = 3+ levels (maximum lift, maximum damage risk). Most single-process color uses 20 vol. developer."
  },
  {
    q: "The term 'contributing pigment' (natural underlying pigment) refers to:",
    opts: [
      "The pigment deposited by the haircolor product",
      "The warm pigment tones revealed when melanin is lightened (e.g., red-orange at Level 5, pale yellow at Level 9)",
      "The pigment in the cuticle layer",
      "The tone of the formula as printed on the color chart"
    ],
    ans: 1,
    exp: "Contributing pigment (NUP) is the warm color revealed as melanin breaks down during lightening. Understanding it is critical for predicting outcomes: Level 5 reveals red-orange, Level 7 reveals orange-gold, Level 9 reveals pale yellow. Toners counteract contributing pigment to achieve the desired final shade."
  },
  {
    q: "For a virgin permanent haircolor application, color is applied:",
    opts: [
      "From roots to ends all at once",
      "From ends first, then roots last",
      "To the roots first (body heat accelerates processing), then extended to the ends later",
      "From midshaft outward"
    ],
    ans: 2,
    exp: "On virgin hair, body heat at the scalp accelerates processing. Apply color to the roots first, then extend to the ends during the last 15–20 minutes. Reversing this results in darker roots than ends due to over-processing at the scalp."
  },
  {
    q: "For gray hair coverage, a pure ash formula may produce an undesirable result because:",
    opts: [
      "Gray hair is too porous to hold ash tones",
      "Gray hair has no natural melanin, so ash tones can appear flat, greenish, or chalky without a warm tone to balance them",
      "Ash formulas require higher developer for gray coverage",
      "Gray hair always requires 30-volume developer, which warms the tone"
    ],
    ans: 1,
    exp: "White/gray hair has no melanin to interact with. Pure ash formulas lack warmth and can produce flat, greenish, or chalky results. Adding a small amount of warm tone to the formula creates more natural, dimensional gray coverage."
  },
  {
    q: "When performing a retouch of permanent color, the color is applied only to:",
    opts: [
      "The entire hair length as in a virgin application",
      "The new growth (roots) — the previously colored hair is already processed",
      "The ends first since they are more porous",
      "The midshaft first for even color"
    ],
    ans: 1,
    exp: "Retouch applications target only the uncolored new growth. Applying fresh permanent color to previously processed hair causes over-processing, uneven color, and product buildup. An exception is a targeted tonal refresh, which uses a separate timing protocol."
  },
  {
    q: "The chemical reaction that produces permanent hair color involves:",
    opts: [
      "Melanin being bleached out and replaced with synthetic pigment",
      "Small colorless dye precursors penetrating the cortex, oxidizing with hydrogen peroxide, and coupling into larger, trapped color molecules",
      "Direct dyes coating the outside of the cuticle scale",
      "Heat activating premixed pigment within the cortex"
    ],
    ans: 1,
    exp: "Permanent oxidative hair color uses small aniline-derivative dye precursors (colorless until oxidized) that penetrate the swollen cuticle into the cortex. In the cortex, they oxidize with hydrogen peroxide and couple into large color molecules too big to escape through the cuticle — this is why permanent color cannot be shampooed out."
  },
  {
    q: "Demipermanent hair color differs from permanent color in that demipermanent color:",
    opts: [
      "Requires higher-volume developer for color deposit",
      "Does not lift natural pigment — it deposits only and fades gradually over time",
      "Uses the same chemistry as permanent color but processes faster",
      "Permanently alters the cortex structure"
    ],
    ans: 1,
    exp: "Demipermanent color is a deposit-only oxidative color using a low-volume developer (6–10 vol.) with no significant ammonia. It cannot lighten hair, blends gray softly, refreshes tone, and fades gradually over 24–28 shampoos as the molecules are not permanently bonded in the cortex."
  },
  {
    q: "A predisposition (patch/allergy) test for aniline derivative haircolor must be performed:",
    opts: [
      "Only for first-time color clients",
      "24–48 hours before each color service involving aniline derivative dyes, regardless of prior use",
      "Once a year for regular color clients",
      "Only if the client has a history of chemical sensitivities"
    ],
    ans: 1,
    exp: "Aniline derivative dyes (PPD, PTD) can cause serious allergic reactions that can develop at any time — even in clients who have used the product before. California and manufacturer protocols require a predisposition test 24–48 hours before every service."
  },
  {
    q: "Hair lightening (bleach) works by:",
    opts: [
      "Depositing a white pigment to dilute dark color",
      "Dispersing and dissolving (decolorizing) natural melanin through an oxidation reaction",
      "Coating the cuticle scale to reflect light and appear lighter",
      "Permanently removing the hair follicle's ability to produce melanin"
    ],
    ans: 1,
    exp: "Hair bleach (on-scalp or off-scalp) lightens hair by dispersing and dissolving natural melanin in the cortex through oxidation. As melanin is progressively decolorized, hair passes through stages: dark brown → red → orange → gold → yellow → pale yellow."
  },
  {
    q: "On the color wheel, which color neutralizes unwanted orange/brassy tones in bleached hair?",
    opts: [
      "Red",
      "Blue (or blue-based ash toner)",
      "Violet",
      "Gold"
    ],
    ans: 1,
    exp: "Orange and blue are complementary colors — they cancel each other on the color wheel. Applying a blue-based or ash toner neutralizes orange/brassy contributing pigment. Violet neutralizes yellow; red would intensify brassiness."
  },
  {
    q: "Double-process haircoloring requires two steps because:",
    opts: [
      "State board regulations require two-step processing for all blonde services",
      "The hair must first be pre-lightened (bleached) to remove natural pigment, then toned to the desired shade — permanent color alone cannot reach very light or platinum results",
      "Two developer volumes must be applied for very dark natural hair",
      "Double processing provides better gray coverage than single-process"
    ],
    ans: 1,
    exp: "Double process: (1) pre-lighten with bleach to the appropriate underlying pigment level (usually pale yellow for platinum); (2) tone to the desired final shade. This is necessary because permanent color cannot lift hair to very pale levels without pre-lightening."
  },
  {
    q: "A client comes in with unwanted greenish tones after an ash color application. The MOST likely cause is:",
    opts: [
      "The developer was not mixed properly",
      "Too much red in the formula",
      "The ash/blue tones overcorrected against the underlying gold, creating a greenish cast — especially if gray or porous hair was present",
      "The color processed too quickly"
    ],
    ans: 2,
    exp: "Ash tones contain blue-green pigments. On hair with no warmth (gray hair) or on very porous hair that grabs tone heavily, ash formulas can over-deposit and produce a greenish or steely result. Balancing with a small amount of warm tone in the formula prevents this."
  },
  {
    q: "A client wants to go from her natural Level 4 dark brown to a Level 9 pale blonde in one appointment. The cosmetologist should advise her that:",
    opts: [
      "This can be achieved in one session with 40 vol. and permanent color",
      "Lifting 5 levels in one session typically causes severe breakage and may require multiple lightening sessions",
      "Using bleach and 40 vol., this is a routine one-visit service",
      "High-lift color with 30 vol. can achieve this safely in one session"
    ],
    ans: 1,
    exp: "Lifting 5+ levels from dark brown to pale blonde in a single session with bleach causes significant cortex damage, risk of breakage, and uneven porosity. Multiple sessions with conditioning treatments between are standard professional practice for healthy results."
  },
  {
    q: "Balayage differs from traditional foil highlights because:",
    opts: [
      "Balayage uses a stronger bleach formula applied with a brush in foils",
      "Balayage is a freehand painting technique applied directly to the hair surface without foils, creating softer, more natural-looking highlights with gradual fade",
      "Balayage uses low-volume developer to prevent damage",
      "Balayage only works on previously colored hair"
    ],
    ans: 1,
    exp: "Balayage (French for 'sweeping') is a freehand technique where bleach or color is painted directly onto sections of hair without foils. This creates softer transitions, natural-looking dimension, and a more gradual grow-out compared to traditional foil highlights."
  },
  {
    q: "Semi-permanent hair color does NOT require a developer because:",
    opts: [
      "It requires a neutralizer instead",
      "It uses direct dye molecules that coat the outside of the cuticle without oxidation — no developer needed, and it fades within 6–12 shampoos",
      "It uses heat to activate without a chemical developer",
      "Semi-permanent and permanent color use identical chemistry"
    ],
    ans: 1,
    exp: "Semi-permanent color uses pre-formed direct dye molecules that are large enough to coat (not penetrate) the cuticle without an oxidation reaction. Because there is no oxidative chemistry, no developer is required. It fades gradually with shampooing as surface deposits wash away."
  },
  {
    q: "When applying foil highlights, a cosmetologist should account for the fact that very porous or previously bleached hair will:",
    opts: [
      "Process more slowly than virgin hair",
      "Process faster and may over-lighten quickly, requiring shorter processing time and close monitoring",
      "Require stronger bleach than virgin hair",
      "Always produce more even results than less-processed hair"
    ],
    ans: 1,
    exp: "Porous or previously bleached hair has a raised, damaged cuticle that allows chemicals to penetrate very quickly. Without close monitoring, this hair can over-process to white or break. Shorter processing times, gentler formulas, and frequent checks are essential."
  },
  {
    q: "Which color result requires the use of a toner?",
    opts: [
      "Covering 100% gray to medium brown",
      "Adding temporary color for a special event",
      "Achieving a platinum or ash blonde after pre-lightening, where contributing pigment must be neutralized",
      "Refreshing a faded red color"
    ],
    ans: 2,
    exp: "After pre-lightening (bleaching), contributing pigment (yellow, gold, or orange) remains in the hair. A toner — typically a demipermanent or permanent color in a cool or neutral shade — neutralizes that contributing pigment to achieve the desired final tone, such as platinum ash or beige blonde."
  },
  {
    q: "The mixing ratio for most permanent haircolor products is:",
    opts: [
      "1 part color to 1 part developer",
      "1 part color to 2 parts developer",
      "2 parts color to 1 part developer",
      "Ratios vary but must always follow the manufacturer's specific instructions"
    ],
    ans: 3,
    exp: "While a 1:1 ratio is common for many permanent colors, mixing ratios vary by product — some high-lift colors use 1:2 (one part color to two parts developer). Always follow the manufacturer's instructions to ensure proper chemistry, color accuracy, and safety."
  },
  {
    q: "A client returns one week after a permanent color service complaining the color has faded significantly. The MOST likely cause is:",
    opts: [
      "The color formula was too dark",
      "The developer volume was too high",
      "High-porosity, damaged hair that absorbed color quickly but cannot retain the color molecules",
      "Normal color fading that occurs in all permanent colors within one week"
    ],
    ans: 2,
    exp: "Highly porous hair has a compromised cuticle that absorbs color rapidly but cannot retain it — the color fades quickly. Protein and moisture fillers used before color can help equalize porosity. Permanent color fading within one week is NOT normal and indicates a hair condition issue."
  },

  // ─── HAIR REMOVAL (8%) ───────────────────────────────────────────────────

  {
    q: "Hard wax differs from soft (strip) wax in that hard wax:",
    opts: [
      "Must be applied with a muslin strip and removed immediately",
      "Adheres to the hair rather than the skin, hardens to a pliable consistency, and is removed without a strip — making it gentler on sensitive skin",
      "Is only used on the scalp and hairline",
      "Requires a much higher temperature than soft wax"
    ],
    ans: 1,
    exp: "Hard wax adheres to the hair fibers rather than the skin surface, then hardens to a pliable state and is pulled off without a strip. This causes less skin trauma and is preferred for sensitive areas (bikini, underarm, face). Strip wax adheres to skin and hair and is removed with a cloth/paper strip."
  },
  {
    q: "A client who is taking isotretinoin (Accutane) for severe acne requests eyebrow waxing. The cosmetologist should:",
    opts: [
      "Proceed with waxing, using a sensitive-skin formula",
      "Decline waxing services — isotretinoin causes extreme skin thinning, making waxing highly likely to lift or tear the skin",
      "Wax only the brow area and avoid the surrounding skin",
      "Use a lower wax temperature as the only precaution"
    ],
    ans: 1,
    exp: "Isotretinoin (Accutane) and topical retinoids (Retin-A) dramatically thin the skin. Waxing on retinoid-treated skin almost always results in skin lifting (the skin tears away with the wax), causing open wounds and scarring. Waxing is absolutely contraindicated while a client is on these medications."
  },
  {
    q: "When removing strip wax from the skin, the CORRECT technique is to:",
    opts: [
      "Pull slowly in the direction of hair growth to avoid breaking hairs",
      "Pull slowly in the opposite direction of hair growth",
      "Pull quickly in the opposite direction of hair growth while holding skin taut with the other hand",
      "Pull straight up away from the skin at a 90-degree angle"
    ],
    ans: 2,
    exp: "Strip wax removal requires speed and correct direction: pull quickly (not slowly) against hair growth while the other hand holds the skin taut adjacent to the strip. Slow removal pulls the skin rather than the hair, increasing bruising and trauma."
  },
  {
    q: "The 'double-dipping' rule in waxing refers to:",
    opts: [
      "Applying two coats of wax for better coverage",
      "Never returning an applicator stick to the wax pot after it has touched a client's skin — doing so contaminates the entire wax supply",
      "Performing two wax passes on stubborn areas",
      "Using two different types of wax on the same client in one session"
    ],
    ans: 1,
    exp: "Double-dipping — inserting a used applicator back into the wax container — introduces bacteria and contaminants from the client's skin into the entire wax supply. This can spread skin conditions and infections to subsequent clients. Always use a fresh applicator for each application."
  },
  {
    q: "Which of the following is a TRUE contraindication to waxing an area?",
    opts: [
      "The client has light-colored, fine hair",
      "The client's skin is currently sunburned in the area to be waxed",
      "The client has never been waxed before",
      "The client has combination skin"
    ],
    ans: 1,
    exp: "Sunburned skin is fragile, inflamed, and compromised — waxing will cause further irritation, potential skin lifting, and pain. Other contraindications include: retinoid use, use of blood thinners, open sores, varicose veins in the area, and recent laser treatments."
  },
  {
    q: "When waxing the eyebrows, applying wax to the same area more than once in a single service risks:",
    opts: [
      "Over-removing hair from that section",
      "Skin lifting, bruising, and burns due to repeated trauma to the thin, delicate orbital skin",
      "Causing the hair to grow back thicker",
      "Cooling the wax too quickly in that area"
    ],
    ans: 1,
    exp: "The skin over the orbital rim (brow bone) is thin and delicate. Repeated wax application and removal in the same area strips the skin's surface layers, causing lifting, bruising, and potential scarring. Use tweezers for any stray hairs missed in the first pass."
  },
  {
    q: "Pre-wax skin preparation is important because:",
    opts: [
      "The skin must be wet for wax to adhere",
      "Clean, product-free, dry skin allows the wax to grip the hair more effectively and reduces contamination risk",
      "Oil-based products improve wax adhesion",
      "Pre-wax preparation is optional and has no effect on results"
    ],
    ans: 1,
    exp: "Clean, dry skin free of oils, lotions, and makeup allows wax to adhere properly to the hair rather than slipping on product residue. Pre-wax cleansers remove surface oils and reduce contamination. Extremely dry skin may benefit from a light dusting of powder to absorb excess moisture."
  },
  {
    q: "Ingrown hairs after waxing are MOST commonly caused by:",
    opts: [
      "Using the wrong wax formula",
      "Hair re-entering the follicle sideways or a new hair being unable to break through dead skin — prevented by regular exfoliation",
      "Wax that was applied too hot",
      "Removing wax in the wrong direction"
    ],
    ans: 1,
    exp: "Ingrown hairs occur when the hair curls back and re-enters the follicle or cannot break through dead skin cells to reach the surface. Regular exfoliation (2–3x per week post-waxing) removes the dead skin barrier that traps hairs. They are more common in coarser, curlier hair types."
  },
  {
    q: "After a waxing service, clients should be advised to avoid:",
    opts: [
      "Drinking water for the rest of the day",
      "Direct sun exposure, tanning beds, swimming in chlorinated water, and hot baths or saunas for at least 24 hours",
      "Using light, fragrance-free moisturizers on the waxed area",
      "Wearing loose-fitting clothing"
    ],
    ans: 1,
    exp: "Post-wax skin is temporarily more sensitive, vulnerable to UV damage, and prone to irritation from heat and chemicals. Sun exposure can cause hyperpigmentation. Hot water, chlorine, and saunas can irritate freshly opened follicles. Avoidance for at least 24 hours is standard post-care."
  },
  {
    q: "Threading as a method of hair removal differs from waxing in that it:",
    opts: [
      "Uses a heated thread to melt the hair",
      "Uses a twisted cotton thread to mechanically trap and pull hairs from the follicle without any chemicals or heat — no risk of skin lifting from retinoids",
      "Is permanently removes hair from the root with each service",
      "Requires a special threading license beyond cosmetology in California"
    ],
    ans: 1,
    exp: "Threading uses a twisted cotton thread that catches and pulls hairs from the follicle without touching the skin with a chemical or heat. It is safe for clients on retinoids or those with contraindications to waxing. It is precise and excellent for eyebrow shaping. In California, threading is within the cosmetology scope of practice."
  },
  {
    q: "Laser hair removal is:",
    opts: [
      "Within the cosmetology scope of practice when using consumer-grade laser devices",
      "A permanent hair reduction method that must be performed by a licensed medical professional or specifically licensed laser technician — outside the cosmetologist's scope of practice",
      "Available for cosmetologists who complete a 4-hour CE training",
      "Only allowed in medical spa settings with a physician present"
    ],
    ans: 1,
    exp: "Laser hair removal uses concentrated light to damage hair follicles and is regulated as a medical procedure in California. It must be performed by a licensed physician, nurse practitioner, physician assistant, or specifically licensed laser technician under medical supervision — it is NOT within the cosmetology scope of practice."
  },
  {
    q: "A client on blood-thinning medication (warfarin) requests a bikini wax. The MOST important consideration is:",
    opts: [
      "No special considerations — waxing does not involve the bloodstream",
      "Blood thinners increase bruising and risk of prolonged bleeding from follicle trauma — proceed with extreme caution and recommend consulting their physician",
      "Use a lower-temperature wax only",
      "Wax only smaller sections to reduce risk"
    ],
    ans: 1,
    exp: "Blood-thinning medications prevent normal clotting, making even minor follicle trauma more likely to cause significant bruising and prolonged bleeding. The cosmetologist should inform the client of the increased risk and recommend they consult their prescribing physician before waxing sensitive areas."
  },
  {
    q: "When consulting a first-time waxing client, the cosmetologist should gather which information?",
    opts: [
      "Only the area the client wants waxed",
      "Current medications (especially retinoids and blood thinners), recent cosmetic procedures, skin sensitivities, and any history of keloid scarring",
      "The client's natural hair color and texture only",
      "The client's shaving frequency"
    ],
    ans: 1,
    exp: "A thorough pre-wax consultation identifies contraindications: retinoid use (causes skin lifting), blood thinners (increases bruising/bleeding), recent resurfacing or laser treatments (compromised skin barrier), sunburn, open lesions, and keloid-prone skin (risk of scarring at follicle sites)."
  },
  {
    q: "Soft (strip) wax works differently from hard wax because strip wax:",
    opts: [
      "Adheres to both the hair AND the skin surface, which is why a strip is needed for removal and why skin lifting risk is higher",
      "Hardens completely and is removed without a strip",
      "Only adheres to the hair follicle for targeted removal",
      "Must be applied against the direction of hair growth"
    ],
    ans: 0,
    exp: "Strip wax adheres to both the hair and the skin surface. A cloth or paper strip pressed onto the wax helps remove it cleanly. Because the wax adheres to the skin, there is higher risk of skin irritation and lifting compared to hard wax, which wraps around the hair rather than the skin."
  },
  {
    q: "Electrolysis is the ONLY FDA-recognized method of PERMANENT hair removal because:",
    opts: [
      "It uses the highest heat levels of any hair removal method",
      "It directly destroys the individual hair follicle's germinative cells with an electrical current inserted into each follicle — preventing any future hair production from that follicle",
      "It uses a chemical reaction that permanently dissolves the hair root",
      "Laser hair removal cannot reach deep follicles"
    ],
    ans: 1,
    exp: "Electrolysis inserts a fine probe into each individual hair follicle and delivers an electrical current that destroys the follicle's papilla and germinative cells, permanently preventing regrowth. It is the only FDA-recognized permanent hair removal method. It requires a separate electrology license in California."
  },
  {
    q: "The direction to apply strip wax is:",
    opts: [
      "In any direction for efficiency",
      "In the direction of hair growth, then removed against the direction of hair growth",
      "Against the direction of hair growth for application, then against for removal",
      "In the direction of hair growth for both application and removal"
    ],
    ans: 1,
    exp: "Strip wax is applied in the direction of hair growth — this allows the wax to coat each hair properly. The strip is then pressed firmly and removed quickly in the OPPOSITE direction of hair growth to pull the hair from the root rather than breaking it at the surface."
  },
  {
    q: "Post-wax redness and minor folliculitis (small pustules at follicle openings) are BEST prevented by:",
    opts: [
      "Applying a thick layer of foundation immediately after waxing",
      "Applying a soothing antiseptic or calming post-wax product and advising the client to avoid heat, friction, and makeup in the area for 24 hours",
      "Re-waxing the area to close the follicles",
      "Applying a chemical exfoliant immediately post-wax"
    ],
    ans: 1,
    exp: "Waxing temporarily opens follicles, creating vulnerability to bacterial entry and inflammation. A post-wax antiseptic or soothing calming product (aloe, tea tree, azulene) reduces inflammation and bacterial colonization. Avoiding heat, sweat, and makeup prevents folliculitis development."
  },

  // ─── NAIL CARE (8%) ──────────────────────────────────────────────────────

  {
    q: "Under California law, a cosmetologist may legally perform which nail services?",
    opts: [
      "Advanced nail enhancements only, not basic manicures",
      "Manicure and pedicure services — nail care is within the cosmetologist's scope of practice",
      "Nail services only if they also hold a separate manicurist license",
      "Nail services only on clients without any nail conditions"
    ],
    ans: 1,
    exp: "California's cosmetology license includes authorization to perform nail care services (manicures and pedicures). A separate manicurist license is not required for a licensed cosmetologist."
  },
  {
    q: "When a cosmetologist notices green discoloration under a nail tip, the MOST appropriate action is:",
    opts: [
      "Apply acetone to clean the area and re-apply the tip",
      "Buff the nail plate to remove the discoloration",
      "Remove the tip, avoid service on the affected nail, and refer the client to a physician",
      "Apply an antifungal polish and reapply the tip"
    ],
    ans: 2,
    exp: "Green nail syndrome is caused by Pseudomonas bacteria — an infection requiring medical treatment. Remove the tip, avoid that nail, and refer to a physician. No nail service should be performed on an infected nail."
  },
  {
    q: "The eponychium is BEST described as:",
    opts: [
      "The non-living tissue on the surface of the nail plate",
      "The living skin tissue at the base of the nail that overlaps onto the nail plate",
      "The pocket of skin under the free edge of the nail",
      "The crescent-shaped pale area at the nail base"
    ],
    ans: 1,
    exp: "The eponychium is living skin — the fold of tissue at the base of the nail overlapping the plate. The cuticle is the non-living tissue shed from the undersurface of the eponychium onto the nail plate. Cutting living eponychium causes infection and breaks the nail's protective seal."
  },
  {
    q: "Porous nail implements (files, buffers) used during a manicure must be:",
    opts: [
      "Disinfected in EPA-registered solution and reused on the same client only",
      "Washed with antibacterial soap and reused",
      "Discarded after each client — porous items cannot be properly disinfected",
      "Sterilized in an autoclave then stored for reuse"
    ],
    ans: 2,
    exp: "Porous implements cannot be adequately disinfected because their surface traps organic material and pathogens. California regulations require porous implements to be used on one client only and discarded."
  },
  {
    q: "Which nail condition presents as horizontal grooves or depressions across the nail plate caused by a temporary interruption of nail matrix activity?",
    opts: [
      "Onychorrhexis (vertical ridges)",
      "Beau's lines",
      "Leukonychia (white spots)",
      "Onycholysis (separation)"
    ],
    ans: 1,
    exp: "Beau's lines are horizontal depressions across the nail plate caused by a temporary slowdown or cessation of matrix activity — typically from severe illness, high fever, chemotherapy, or major physical stress. They grow out over time and are not treatable in the salon."
  },
  {
    q: "When performing a basic pedicure on a client with heel calluses, the cosmetologist should use:",
    opts: [
      "A credo blade for fastest, most thorough callus removal",
      "A foot file or abrasive board to gently reduce callus thickness",
      "A razor blade designed for cosmetology use",
      "Chemical callus removers with phenol for deep callus removal"
    ],
    ans: 1,
    exp: "California regulations prohibit cosmetologists and manicurists from using credo blades, razors, or scalpels — cutting calluses constitutes the practice of medicine. Acceptable tools are foot files, abrasive boards, and OTC callus softeners."
  },
  {
    q: "Nail plate staining from prolonged dark polish wear can be prevented by:",
    opts: [
      "Applying cuticle oil daily before polish",
      "Always applying a base coat before dark nail polish",
      "Soaking nails in lemon juice weekly",
      "Using strengthening polish only"
    ],
    ans: 1,
    exp: "Dark polishes contain concentrated pigments that stain the nail plate yellow or orange. A base coat creates a barrier between the nail plate and the polish, preventing direct pigment contact and staining."
  },
  {
    q: "During a manicure, a cosmetologist should avoid cutting the living eponychium tissue because:",
    opts: [
      "It causes the cuticle to grow back faster",
      "It breaks the protective seal of the nail fold, creating an entry point for bacteria and increasing infection risk",
      "It is outside the scope of a cosmetology manicure",
      "Living tissue bleeds and stains the nail"
    ],
    ans: 1,
    exp: "The living eponychium forms a protective seal between the nail plate and fold, protecting the matrix from contamination. Cutting it breaks this barrier. Non-living cuticle tissue may be gently removed, but living skin must never be cut."
  },
  {
    q: "Which nail disorder requires immediate referral to a physician and refusal of service?",
    opts: [
      "Mild vertical ridging of the nail plate",
      "Onycholysis without signs of infection",
      "Paronychia with signs of redness, swelling, pus, and pain",
      "Slight yellowing of a single nail after dark polish wear"
    ],
    ans: 2,
    exp: "Paronychia with active infection signs (redness, swelling, pus, tenderness) requires physician treatment. Performing services on an actively infected nail fold risks spreading the infection, worsening the condition, and contaminating tools."
  },
  {
    q: "The correct direction to push back cuticle during a manicure is:",
    opts: [
      "Toward the free edge using the sharp point of an orangewood stick",
      "Toward the base of the nail using the flat end of a cuticle pusher at a low angle",
      "In a circular scrubbing motion with a nail brush",
      "Any direction — only pressure matters"
    ],
    ans: 1,
    exp: "The cuticle should be gently pushed toward the base of the nail (back toward the matrix) using the flat end of a metal or wood pusher at a low, flat angle to avoid pressure on the matrix. Pushing toward the free edge would push debris under the nail."
  },
  {
    q: "When a client with diabetes requests a pedicure with toenail trimming, the cosmetologist should:",
    opts: [
      "Proceed normally — nail services are always safe for diabetics",
      "Decline all services on diabetic clients",
      "Trim carefully, avoiding any skin contact, and strongly encourage regular podiatrist visits given the elevated infection and wound-healing risk",
      "Use a Dremel drill to file down thick nails instead of trimming"
    ],
    ans: 2,
    exp: "Diabetic clients have impaired wound healing, reduced sensation (neuropathy), and increased infection risk. Even minor nicks can lead to serious complications. Careful, conservative nail care is acceptable, but clients should be encouraged to see a podiatrist regularly."
  },
  {
    q: "Onychomycosis (nail fungus) is a contraindication to nail services because:",
    opts: [
      "Salon chemicals can destroy the fungus, worsening the infection",
      "It is a contagious fungal infection that can spread to other nails through contaminated tools, and nail technicians cannot treat it",
      "Polish cannot adhere to nails affected by fungus",
      "It is only a cosmetic concern with no real health risk"
    ],
    ans: 1,
    exp: "Onychomycosis is contagious and requires physician-prescribed antifungal treatment. Performing services on infected nails risks spreading the fungus to other nails and cross-contaminating tools. The client must be referred and services must be declined on affected nails."
  },
  {
    q: "The purpose of a top coat in nail polish application is to:",
    opts: [
      "Prevent the nail plate from staining",
      "Provide adhesion for the color coat",
      "Seal the color coat, add shine, and extend the longevity of the polish",
      "Hydrate the nail plate after color application"
    ],
    ans: 2,
    exp: "Top coat seals the color layers, adds a high-gloss finish, and extends wear by protecting the color from chipping and fading. A base coat (applied first) prevents staining and improves adhesion. Skipping either reduces manicure quality and longevity."
  },
  {
    q: "Koilonychia (spoon nails), in which the nail plate curves upward in a concave shape, can be a sign of:",
    opts: [
      "Over-buffing the nail plate",
      "Iron-deficiency anemia or other systemic health conditions",
      "Excessive use of base coat",
      "Normal nail aging"
    ],
    ans: 1,
    exp: "Koilonychia is a nail plate deformity where the edges lift and the center appears concave — like a spoon. It can indicate iron-deficiency anemia or other systemic conditions. Clients with koilonychia should be referred to a physician for evaluation."
  },
  {
    q: "Leukonychia — white spots or streaks on the nail plate — is MOST commonly caused by:",
    opts: [
      "Calcium or vitamin deficiency",
      "Minor trauma to the nail matrix during growth",
      "Fungal infection beneath the nail plate",
      "Excessive use of nail hardeners"
    ],
    ans: 1,
    exp: "Leukonychia is caused by minor trauma to the nail matrix — a bump or knock that temporarily disturbs the matrix cells. The white spot or streak grows out with the nail over time. It is harmless and has nothing to do with calcium or vitamin deficiency."
  },
  {
    q: "The nail is part of which body system?",
    opts: [
      "Skeletal system",
      "Circulatory system",
      "Integumentary system",
      "Muscular system"
    ],
    ans: 2,
    exp: "The nails, along with skin, hair, sebaceous glands, and sweat glands, are part of the integumentary system — the body's external covering. Nails are appendages of the skin, derived from specialized keratinocytes in the nail matrix."
  },

  // ─── EYELASH & EYEBROW (4%) ───────────────────────────────────────────────

  {
    q: "Before applying any eyelash or eyebrow tint, a predisposition (patch) test MUST be performed because:",
    opts: [
      "It is a suggested best practice but not required",
      "Lash and brow tints contain aniline derivative dyes that can cause severe allergic reactions, including anaphylaxis — testing 24–48 hours before is required",
      "The tint may stain the skin if the client's eyes tear",
      "The test helps predict how dark the final result will be"
    ],
    ans: 1,
    exp: "Eyelash and eyebrow tints contain oxidative dyes (aniline derivatives) that can cause serious allergic reactions, including severe eye irritation, swelling, or anaphylaxis. A patch/predisposition test must be performed 24–48 hours before every service, regardless of prior use."
  },
  {
    q: "The eyebrow shape that is generally considered most flattering for a ROUND facial shape is:",
    opts: [
      "A flat, horizontal brow with little arch",
      "A softly rounded brow following the natural brow line",
      "A higher-arched brow that creates the illusion of length and lifts the face",
      "A very thin, angled brow for a dramatic look"
    ],
    ans: 2,
    exp: "For round facial shapes, a higher arch creates the illusion of elongating and slimming the face. Flat brows emphasize the roundness. Brow design is always balanced against the client's bone structure, eye placement, and natural brow growth."
  },
  {
    q: "When performing eyebrow waxing, the wax strip should NEVER be applied more than once to the same area in one service because:",
    opts: [
      "The wax becomes ineffective after the first application",
      "Repeated applications on the same area cause skin lifting, bruising, and chemical burns on delicate orbital skin",
      "Re-applying wax in the same area causes the hairs to grow back thicker",
      "Multiple applications are cost-prohibitive"
    ],
    ans: 1,
    exp: "The thin, delicate skin over the orbital rim is easily traumatized. Repeated wax application and removal strips the skin surface layers, causing lifting, bruising, and potential scarring. Any stray hairs missed in the first pass should be removed with tweezers."
  },
  {
    q: "Contraindications to lash extension application include:",
    opts: [
      "Clients who wear contact lenses",
      "Clients with thick, dark natural lashes",
      "Clients with a history of allergic reactions to cyanoacrylate adhesives, or with conjunctivitis, styes, or active eye infections",
      "Clients with very straight natural lashes"
    ],
    ans: 2,
    exp: "Lash extension adhesives are cyanoacrylate-based. Clients with known adhesive allergies risk severe eye reactions. Active eye infections (conjunctivitis, blepharitis, styes) can be worsened by manipulation and adhesive contact. Services must be declined until the condition resolves."
  },
  {
    q: "A lash lift (also called a lash perm) works by:",
    opts: [
      "Applying individual synthetic lashes to natural lashes with adhesive",
      "Using a thioglycolate-based solution to break disulfide bonds in the natural lash and then rebonding them around a curved silicone shield to create a lifted curl",
      "Applying a heated tool to curl the natural lashes into shape",
      "Using a UV-cured adhesive to hold the natural lashes in an upward position"
    ],
    ans: 1,
    exp: "A lash lift uses the same chemistry as a permanent wave — a thioglycolate solution breaks the disulfide bonds of the natural lash's keratin, and a fixer/neutralizer reforms them in a new shape around a curved silicone shield, creating a lifted curl that lasts 6–8 weeks."
  },
  {
    q: "When tweezing eyebrow hairs, the CORRECT technique is to:",
    opts: [
      "Pull hairs upward at a 90-degree angle for maximum efficiency",
      "Grasp the hair as close to the root as possible and pull swiftly in the direction of hair growth",
      "Grasp multiple hairs at once to speed the service",
      "Pull against the direction of hair growth for cleaner removal"
    ],
    ans: 1,
    exp: "Tweezing should grasp the hair close to the root (to avoid breaking the shaft above the skin) and pull in the direction of hair growth. Pulling against growth increases follicle trauma and risk of ingrown hairs. One hair at a time (or a very small group) ensures precision."
  },
  {
    q: "Classic lash extensions differ from volume lash extensions in that classic extensions:",
    opts: [
      "Use pre-made fans of multiple lashes applied to each natural lash",
      "Apply a single synthetic lash to each natural lash for a natural, one-to-one result",
      "Are thicker and heavier than volume fans",
      "Last twice as long as volume lashes"
    ],
    ans: 1,
    exp: "Classic lash extensions apply one synthetic extension to each natural lash (1:1 ratio), creating a natural, defined look. Volume lashes apply handmade fans of 2–6+ ultra-fine extensions to each natural lash, creating a fuller, more dramatic result with lighter overall weight."
  },
  {
    q: "Eye irritation or redness during or after an eyelash tinting service could indicate:",
    opts: [
      "Normal expected redness that resolves within 10 minutes",
      "Tint or developer entering the eye — the service must be stopped immediately and the eye flushed thoroughly with cool water",
      "The tint is processing correctly",
      "The client's eyes are sensitive to the room lighting"
    ],
    ans: 1,
    exp: "Eyelash tint or developer in contact with the eye causes irritation and can cause serious eye injury. Any sign of eye irritation requires immediately stopping the service, removing all product carefully, and flushing the eye thoroughly with cool water. Severe reactions warrant medical attention."
  },

  // ─── SKIN CARE (4%) ──────────────────────────────────────────────────────

  {
    q: "As a cosmetologist, your scope of skin care practice includes:",
    opts: [
      "Diagnosing and treating acne and rosacea",
      "Performing superficial cleansing facials, eyebrow shaping, and basic hair removal — but NOT diagnosing or treating skin diseases",
      "Medium-depth chemical peels and microneedling",
      "Prescribing topical medications for acne"
    ],
    ans: 1,
    exp: "California cosmetologists may perform basic skin care services but cannot diagnose or treat skin diseases. Advanced esthetic procedures require an esthetics license. Clients with medical skin conditions must be referred to a physician."
  },
  {
    q: "Active acne pustules and cysts are a CONTRAINDICATION to facial massage because:",
    opts: [
      "Massage products will interfere with the acne treatment",
      "Pressure and manipulation spread bacteria to adjacent follicles, worsens breakouts, and can rupture cysts causing scarring",
      "Massage is contraindicated for all oily skin types",
      "Acne-prone skin cannot tolerate any physical contact"
    ],
    ans: 1,
    exp: "Facial massage over active pustules and cysts spreads bacteria, worsens the inflammatory response, and can rupture cysts below the skin surface, leading to deeper scarring. Basic cleansing (without massage) may be acceptable, but full manipulation over active acne is contraindicated."
  },
  {
    q: "Hot wax should NOT be used on clients who are taking retinoids (Retin-A, Accutane) because:",
    opts: [
      "Retinoids make hair removal less effective",
      "Retinoids thin the skin dramatically, making waxing likely to tear or lift the skin surface",
      "The wax will not adhere to retinoid-treated skin",
      "Retinoids must be applied after waxing, not before"
    ],
    ans: 1,
    exp: "Retinoids accelerate cell turnover and thin the outer layers of the skin. Waxing on retinoid-treated skin almost always results in skin lifting — the epidermis tears away with the wax — causing open wounds, pain, and potential scarring. Waxing is absolutely contraindicated while a client is using these medications."
  },
  {
    q: "When a client presents with a mole that has recently changed in color, border, or size, the cosmetologist should:",
    opts: [
      "Gently exfoliate the area to normalize skin tone",
      "Document the change in the client record and strongly recommend the client see a dermatologist — changing moles can be a sign of skin cancer",
      "Apply a concealing product and proceed with service",
      "Reassure the client that mole changes are normal with age"
    ],
    ans: 1,
    exp: "The ABCDE rule (Asymmetry, Border, Color, Diameter, Evolving) identifies suspicious moles that warrant medical evaluation. Any mole that is changing must be seen by a dermatologist. The cosmetologist must NOT attempt to diagnose, treat, or ignore the change — referral is essential."
  },
  {
    q: "The PRIMARY role of sunscreen in post-facial home care recommendations is:",
    opts: [
      "To lock in the moisture from the facial products",
      "To protect the freshly treated skin from UV damage — post-service skin is often more photosensitive",
      "To prevent skin from producing sebum",
      "To keep pores closed after extractions"
    ],
    ans: 1,
    exp: "Many facial services (exfoliation, steaming, extractions) increase skin photosensitivity. UV radiation causes premature aging, hyperpigmentation, and DNA damage. Daily SPF (minimum SPF 30) is the single most important post-facial home-care step for all skin types."
  },
  {
    q: "Facial steaming during a basic facial is beneficial primarily because:",
    opts: [
      "It sterilizes the skin surface before extractions",
      "It softens and hydrates the skin, loosens debris in pores, and increases receptivity to subsequent products",
      "It forces open blood vessels to increase facial flush",
      "It activates the chemical ingredients in facial serums"
    ],
    ans: 1,
    exp: "Steam softens the skin and cuticle layer, loosens sebum and debris in pores for easier cleansing, and temporarily hydrates the skin. It does NOT sterilize. Steaming time should be limited for sensitive, rosacea, or reactive skin types where heat can worsen conditions."
  },
  {
    q: "A sebaceous cyst is DIFFERENT from a comedone (blackhead/whitehead) in that:",
    opts: [
      "Sebaceous cysts are located within the follicle, while comedones are on the skin surface",
      "Sebaceous cysts are deeper, enclosed sacs of sebum and keratin beneath the skin surface — they are not safe to manipulate in a salon setting",
      "Comedones are larger and more painful than cysts",
      "There is no practical difference for salon purposes"
    ],
    ans: 1,
    exp: "Sebaceous cysts are encapsulated, deep-dermal sacs of keratin and sebum. Attempting to extract them in a salon risks rupture, infection, and scarring. They require medical treatment (drainage or surgical excision by a physician). Cosmetologists should not attempt to treat or extract any deep cystic lesion."
  },
  {
    q: "Telangiectasia (broken capillaries) on the face is MOST worsened by:",
    opts: [
      "Gentle cleansing routines",
      "High-pressure steaming, aggressive facial massage, and harsh exfoliation directly over the affected area",
      "Light moisturizer application",
      "Mild SPF products"
    ],
    ans: 1,
    exp: "Telangiectasia results from fragile, dilated capillaries near the skin surface. Heat, pressure, and aggressive friction directly over affected areas can rupture these vessels or worsen their dilation. Gentle services avoiding heat and pressure over the affected areas are appropriate."
  },

  // ─── HAIRCUTTING (3%) ────────────────────────────────────────────────────

  {
    q: "A blunt (one-length) haircut is created by:",
    opts: [
      "Cutting all sections at a 90-degree elevation from the head",
      "Cutting all sections at 0-degree elevation (natural fall), with no elevation or overdirection",
      "Using point-cutting throughout to create a textured perimeter",
      "Cutting each section at a 45-degree elevation"
    ],
    ans: 1,
    exp: "A blunt cut is made at 0-degree elevation — hair combs to its natural fall and is cut horizontally at the perimeter. This creates a clean, solid, weighted line at one length with no graduation or layering."
  },
  {
    q: "Overdirection in a haircut means:",
    opts: [
      "Cutting hair shorter than intended by lifting it too high",
      "Combing hair away from its natural fall position before cutting, which creates graduation or builds length in a specific area",
      "Directing the client to style their own hair",
      "Using excessive tension when holding a section"
    ],
    ans: 1,
    exp: "Overdirection involves combing hair away from its natural fall before cutting. Used in layered and graduated cuts to create weight or length differences between sections. The degree of overdirection controls the amount of graduation produced."
  },
  {
    q: "A graduated (wedge) haircut creates a stacked effect in the back because:",
    opts: [
      "Hair is cut at 0-degree elevation throughout the back",
      "Hair is elevated at 45 degrees and cut at an angle, creating shorter interior layers that stack over a longer, weighted perimeter",
      "Hair is elevated to 90 degrees and cut parallel to the head",
      "The nape section is left longer than the crown"
    ],
    ans: 1,
    exp: "A graduated cut elevates the hair at 45 degrees and cuts at an angle, creating progressively shorter hair layers in the interior that stack over the perimeter. This produces the signature wedge shape with volume and weight at the perimeter."
  },
  {
    q: "Point-cutting (chipping) is used to:",
    opts: [
      "Create a perfectly blunt, clean line at the perimeter",
      "Create texture and soften the perimeter by cutting small notches into the ends with the shear tips",
      "Add length through strategic sectioning",
      "Remove bulk from the interior of thick hair"
    ],
    ans: 1,
    exp: "Point-cutting directs the shear tips into the ends at an angle to remove small amounts of hair and create a diffused, textured edge rather than a solid blunt line. It adds movement and softens transitions."
  },
  {
    q: "Layered haircuts at 90-degree elevation create:",
    opts: [
      "A heavy, solid weight line at the perimeter",
      "Uniform layers throughout, distributing weight evenly and creating movement and texture",
      "Graduation and stacking in the nape area",
      "A one-length perimeter with interior lightness only"
    ],
    ans: 1,
    exp: "Elevating hair to 90 degrees (perpendicular to the head) and cutting parallel to the head shape creates uniform layers throughout. All sections cut to the same length at elevation produces even weight distribution and movement."
  },
  {
    q: "Thinning shears (notching shears or texturizing shears) are used to:",
    opts: [
      "Create a sharp, clean blunt cut",
      "Remove bulk from thick hair or blend layered sections, creating texture without visible lines",
      "Section the hair before chemical services",
      "Create extensions of length at the perimeter"
    ],
    ans: 1,
    exp: "Thinning shears have one or both blades serrated with teeth that cut some hairs while leaving others uncut. This thins bulk and blends layers without creating sharp lines. They should be used with care — overuse can create over-thinned, frizzy hair."
  },

  // ─── HAIRSTYLING (2%) ────────────────────────────────────────────────────

  {
    q: "When blow-drying curly hair to straighten it, the cosmetologist should:",
    opts: [
      "Use the highest heat setting for fastest straightening",
      "Use a concentrator nozzle, medium heat, and tension from a round or paddle brush — directing air down the hair shaft to smooth the cuticle",
      "Blow-dry without any brush to avoid stretching",
      "Saturate the hair with maximum heat-protectant product before drying"
    ],
    ans: 1,
    exp: "Blow-drying for straightening uses a concentrator nozzle to direct airflow, medium heat (not maximum, which damages), and a brush to smooth and tension the hair while directing the cuticle downward for smoothness. Heat protectant is important but should not be over-applied."
  },
  {
    q: "A flat iron (thermal straightening iron) should be used on hair that is:",
    opts: [
      "Damp or wet — the steam helps straighten more effectively",
      "Completely dry — using a flat iron on wet or damp hair causes steam burns to the cortex",
      "Slightly damp to prevent static",
      "Treated with maximum-hold hairspray before ironing"
    ],
    ans: 1,
    exp: "Using a flat iron on damp or wet hair causes steam to form within the cortex, damaging hair protein from the inside out. Hair must be completely dry before thermal flat-ironing. Always use a heat protectant spray before thermal tools."
  },
  {
    q: "The purpose of a diffuser attachment on a blow-dryer when styling naturally curly hair is to:",
    opts: [
      "Concentrate airflow to straighten the curl",
      "Disperse airflow evenly without disrupting the natural curl pattern, reducing frizz and maintaining curl definition",
      "Increase heat intensity for faster drying",
      "Create smooth, straight sections by stretching the curl"
    ],
    ans: 1,
    exp: "A diffuser disperses airflow over a wide area without directing concentrated heat at the curl. This dries the hair with minimal disruption to the curl pattern, reducing frizz and maintaining natural curl definition — the opposite goal of a concentrator nozzle."
  },
  {
    q: "Roller setting (wet sets) differs from thermal styling because:",
    opts: [
      "Roller sets use chemicals to reshape hair",
      "Roller sets reshape the hair while wet using hydrogen bonds, which form in the new shape as hair dries — temporary style that releases with humidity or re-wetting",
      "Roller sets require more heat than thermal tools",
      "Roller sets permanently alter the cortex structure"
    ],
    ans: 1,
    exp: "Wet setting works by placing damp hair on rollers; as the hair dries, hydrogen bonds (the weakest and most temporary bonds) reform in the roller-shaped pattern. The style is temporary — heat, moisture, or humidity will break these hydrogen bonds and return the hair to its natural form."
  },

  // ─── CLIENT CONSULTATION & ANALYSIS — additional questions ────────────────

  {
    q: "During a scalp analysis, you observe patches of silvery-white scales firmly attached to the scalp with redness beneath. This presentation is MOST consistent with:",
    opts: [
      "Pityriasis capitis (dandruff)",
      "Psoriasis",
      "Tinea capitis",
      "Seborrheic dermatitis"
    ],
    ans: 1,
    exp: "Psoriasis on the scalp presents as thick, silvery-white plaques on a red base. Unlike dandruff (loose white flakes) or seborrheic dermatitis (yellowish oily scales), psoriasis scales are tightly adherent. Tinea capitis causes patchy hair loss with scaling. A client with suspected psoriasis should be referred to a physician; cosmetologists cannot diagnose but must recognize when service is contraindicated."
  },
  {
    q: "A client's hair has a very high porosity level. Which service outcome should the cosmetologist anticipate?",
    opts: [
      "The hair will resist chemical services and take longer to process",
      "Color and chemical services will process quickly and the hair may over-absorb product, leading to damage or uneven results",
      "The hair will have a very shiny, smooth cuticle layer",
      "Permanent wave solution will not penetrate effectively"
    ],
    ans: 1,
    exp: "High-porosity hair has a raised, damaged, or open cuticle layer. It absorbs moisture and chemicals quickly — color can grab too fast (especially on ends), and perm solution processes faster than on low-porosity hair. Cosmetologists should use a lower-volume developer, apply color product to mid-lengths and ends last, and use a protein filler before color to equalize porosity."
  },
  {
    q: "Which of the following is the BEST example of a 'closed' consultation question?",
    opts: [
      "\"What styles have you been loving lately?\"",
      "\"Tell me about your morning routine.\"",
      "\"Have you had a chemical service in the last six months?\"",
      "\"How would you describe your hair at its worst?\""
    ],
    ans: 2,
    exp: "Closed questions elicit a yes/no or specific factual answer and are important for gathering safety-critical intake information (chemical history, medications, allergies). The other options are open-ended questions, which are better for understanding lifestyle, preferences, and expectations. Effective consultations use both."
  },
  {
    q: "A strand test performed before a chemical service primarily determines:",
    opts: [
      "The client's natural hair color level",
      "Whether the hair is in a condition to withstand the service and how the hair will respond to the formula",
      "The exact developer volume required",
      "The elasticity of the hair only"
    ],
    ans: 1,
    exp: "The strand test (test strand or preliminary strand test) exposes a small section of hair to the actual chemical formula for the planned processing time. It reveals porosity response, processing speed, color result, and whether the hair has sufficient strength to withstand the service without breakage. It is the most reliable pre-service safety check for any chemical service."
  },
  {
    q: "The Fitzpatrick Scale used in cosmetology classifies:",
    opts: [
      "Hair texture from fine to coarse",
      "Scalp conditions from mild to severe",
      "Skin phototypes based on melanin content and UV response — from very fair (Type I) to very dark (Type VI)",
      "Nail disorders by severity"
    ],
    ans: 2,
    exp: "The Fitzpatrick Phototype Scale categorizes skin into six types based on melanin concentration and the skin's response to sun exposure. Type I is very fair skin that always burns and never tans; Type VI is very dark skin that never burns. This classification guides laser, light-based treatments, and chemical peel selection, as darker skin types are more prone to post-inflammatory hyperpigmentation."
  },
  {
    q: "During hair analysis, a cosmetologist performs the wet-stretch test by stretching a strand of wet hair. A strand that stretches noticeably then DOES NOT return to its original length indicates:",
    opts: [
      "Normal, healthy elasticity",
      "Low porosity",
      "Poor elasticity — the disulfide bonds in the cortex are weakened, and the hair is at risk of breakage under chemical service",
      "Very high cuticle density"
    ],
    ans: 2,
    exp: "Healthy wet hair can stretch about 50% of its length and return. Hair with compromised elasticity (over-processed, damaged cortex) will overstretch and not spring back, indicating weakened disulfide bonds. Performing chemical services on hair with poor elasticity risks breakage. Treatments to rebuild protein structure should precede any chemical service."
  },
  {
    q: "Which hair texture is MOST susceptible to breakage from chemical over-processing?",
    opts: [
      "Coarse hair with high porosity",
      "Fine hair — because the cortex is smaller in diameter and there are fewer disulfide bonds to withstand chemical action",
      "Medium texture hair",
      "Coarse hair with low porosity"
    ],
    ans: 1,
    exp: "Fine hair has a smaller-diameter cortex with fewer disulfide bonds relative to surface area. Chemical services reduce those bonds further; fine hair reaches the point of breakage faster than coarse hair. Cosmetologists should use milder formulas, shorter processing times, and extra strand-testing when working on fine hair."
  },
  {
    q: "A client consultation form should document all of the following EXCEPT:",
    opts: [
      "Current medications that may affect hair, scalp, or skin",
      "Allergies and past reactions to salon services",
      "The client's annual household income",
      "Recent chemical services and the products used"
    ],
    ans: 2,
    exp: "Intake forms capture medically relevant information — medications (chemotherapy, retinoids, blood thinners), allergy history, recent chemical history — that directly affect service safety and results. Financial information is not a safety consideration and does not belong on a professional intake form."
  },
  {
    q: "Alopecia areata appears clinically as:",
    opts: [
      "Gradual thinning along the top of the scalp in a diffuse pattern",
      "One or more smooth, round patches of hair loss with no visible scalp scaling or inflammation",
      "Circular patches of hair loss with broken stubs and grey scaling — a sign of fungal infection",
      "Complete loss of body and scalp hair following chemotherapy"
    ],
    ans: 1,
    exp: "Alopecia areata is an autoimmune condition causing sudden, round or oval patches of smooth hair loss. The scalp skin in the patch appears normal — no scaling, no redness. It differs from tinea capitis (ringworm — scaling, broken hairs) and androgenetic alopecia (gradual diffuse thinning). Cosmetologists cannot treat the condition; clients should be referred to a dermatologist."
  },
  {
    q: "The cosmetologist's role when a client presents with a suspicious mole or skin lesion on the scalp is to:",
    opts: [
      "Apply a chemical relaxer over the area as usual — this does not affect skin conditions",
      "Describe the lesion to the client and recommend they see a physician before proceeding with the service",
      "Remove the lesion using a lancet during the service",
      "Diagnose the lesion as benign and document it on the service record"
    ],
    ans: 1,
    exp: "Cosmetologists are not licensed to diagnose or treat skin conditions. If an unusual mole, lesion, or growth is observed, the professional obligation is to note it to the client and recommend a physician evaluation. Chemical services should not be applied over suspicious lesions. Attempting to remove or diagnose lesions is outside scope of practice and illegal in California."
  },
  {
    q: "When performing a scalp analysis before a relaxer service, pressing lightly with fingertips on the scalp reveals abrasions and open sores. The correct action is:",
    opts: [
      "Proceed with the relaxer and apply base cream more generously to protect the scalp",
      "Postpone the relaxer until the scalp has fully healed — open skin creates a pathway for chemical burns and systemic absorption",
      "Switch to a milder no-lye formula, which will be safe over broken skin",
      "Apply the relaxer only to the mid-shaft and ends"
    ],
    ans: 1,
    exp: "Open sores, cuts, or abrasions on the scalp are an absolute contraindication to relaxer services. Sodium or guanidine hydroxide will penetrate broken skin, causing severe chemical burns and potentially entering the bloodstream. No formulation is safe to apply to broken skin. The service must be postponed until the scalp is fully healed."
  },
  {
    q: "During a color consultation, a client wants to go from level 3 (dark brown) to level 9 (light blonde) in a single session. The cosmetologist's MOST professional response is:",
    opts: [
      "Apply a high-lift color at 40-volume developer — this will lift 6 levels in one step",
      "Explain that lifting 6 levels in one session typically requires bleaching and may require multiple appointments to preserve hair integrity, then discuss a realistic plan",
      "Apply a permanent color over the dark hair — it will lighten sufficiently",
      "Use a bleach bath on the entire head to achieve the target level safely in one visit"
    ],
    ans: 1,
    exp: "Lifting 6+ levels in a single session is rarely achievable without significant damage, especially on virgin dark hair. The cosmetologist must conduct an honest consultation explaining the process (likely bleach + tone), the number of sessions needed, and the at-home care required to maintain integrity. High-lift color formulated for 4-level lift at most is insufficient for a level 3 to 9 lift."
  },
  {
    q: "A client has medium-density, medium-textured hair. In terms of the amount of product to use for a relaxer service, this client requires:",
    opts: [
      "The maximum product amount because density increases absorption",
      "A product amount appropriate for medium density — neither the minimum nor maximum application",
      "Less product than a fine-textured client because medium hair is more resistant",
      "Product choice should be based on scalp sensitivity, not hair density or texture"
    ],
    ans: 1,
    exp: "Product amounts for chemical services are determined by hair density and texture together. A medium-density, medium-texture client falls in the middle of the scale. Applying too much relaxer can cause scalp irritation and over-processing; too little may give uneven results. Manufacturers' guidelines for medium hair should be followed."
  },
  {
    q: "Canities is the technical term for:",
    opts: [
      "Excessive hair shedding",
      "Gray or white hair caused by a reduction or absence of melanin in the cortex",
      "A fungal infection of the hair shaft",
      "Abnormal hair growth patterns"
    ],
    ans: 1,
    exp: "Canities refers to gray or white hair. It occurs when melanocytes in the hair bulb reduce or stop producing melanin. Acquired canities develops with age (senile canities) or prematurely due to genetics (premature canities). Understanding canities is important for cosmetologists because gray hair has a tightly packed cuticle, low porosity, and often resists color absorption — requiring pre-softening or longer processing."
  },
  {
    q: "A client with fine, color-treated hair requests a deep conditioning treatment. The cosmetologist recommends a protein treatment over a moisturizing treatment because:",
    opts: [
      "Moisturizing treatments are contraindicated for color-treated hair",
      "Color-treated, fine hair has weakened bonds and reduced protein — a protein treatment temporarily fills gaps in the cortex, restoring strength and elasticity before further services",
      "Protein treatments seal the cuticle more effectively than moisturizing treatments",
      "Protein treatments are always the correct choice for all hair types"
    ],
    ans: 1,
    exp: "Chemical color alters the disulfide bonds and can deplete the cortex's protein structure. Fine hair has a small cortex to begin with. Protein (keratin-based) treatments temporarily fill gaps in the hair shaft, improving elasticity and reducing breakage risk. However, too much protein can cause brittleness — a balanced approach combining protein with moisture is ideal for ongoing maintenance."
  },
  {
    q: "Trichorrhexis nodosa appears as:",
    opts: [
      "A fungal infection of the hair causing circular bald patches",
      "White nodules along the hair shaft where the cortex has split, causing the hair to snap easily at those points",
      "A split end condition confined to the hair tips",
      "A condition involving ingrown hairs on the scalp"
    ],
    ans: 1,
    exp: "Trichorrhexis nodosa is a structural defect where the cortex fractures and frays at nodal points along the shaft, resembling two brushes pushed together. The affected hair snaps easily at the nodes. It is caused by excessive mechanical stress (aggressive brushing, heat), chemical damage, or nutritional deficiencies. Services should focus on gentle handling and strengthening treatments; no chemical service should be performed on actively affected hair."
  },
  {
    q: "When analyzing a new client's scalp and you observe a \"tight scalp\" (scalp moves minimally when pressed), this most directly affects:",
    opts: [
      "Color absorption in the cortex",
      "The choice of disinfectant for implements",
      "Blood circulation to the follicle — reduced circulation may affect growth and response to scalp treatments",
      "The angle at which to hold scissors during a haircut"
    ],
    ans: 2,
    exp: "A tight scalp has reduced mobility due to muscle tension or chronic stress, which can impair blood and lymph circulation to the follicles. Good circulation delivers oxygen and nutrients to the papilla, supporting healthy hair growth. Scalp massage during services can help increase circulation. This analysis guides the recommendation of scalp treatments and massage."
  },

  // ─── CHEMICAL TEXTURE SERVICES — additional questions ─────────────────────

  {
    q: "The processing time for a sodium hydroxide (lye) relaxer is primarily determined by:",
    opts: [
      "The brand of neutralizing shampoo to be used",
      "The hair's natural texture, porosity, and the strength of the formula selected",
      "The number of weeks since the client's last relaxer",
      "The volume of developer used in the formula"
    ],
    ans: 1,
    exp: "Sodium hydroxide relaxer processing time depends on the hair's natural curl pattern (coarser and tighter curl = longer time), porosity (high porosity processes faster), and the formula strength (mild, regular, super). Visual and tactile checks — the hair straightening as the product is applied — guide the timing. Over-processing causes chemical haircuts; under-processing leaves the hair under-straightened."
  },
  {
    q: "The neutralizing shampoo used after a chemical relaxer works by:",
    opts: [
      "Adding moisture to rehydrate the hair shaft",
      "Lowering the pH to stop the chemical action of the hydroxide and restoring the hair's acid mantle",
      "Removing the base cream applied before the service",
      "Re-forming the disulfide bonds broken during relaxing"
    ],
    ans: 1,
    exp: "Hydroxide relaxers raise hair pH to 12–14 to permanently break disulfide bonds. The neutralizing shampoo (pH 4.5–5.5) stops the alkaline action by lowering pH back toward the hair's natural acid mantle (4.5–5.5). Note: unlike thio relaxer neutralizers, hydroxide relaxer neutralizers do NOT re-form disulfide bonds — that reaction is permanent. The shampoo step simply halts further damage."
  },
  {
    q: "A client who received a sodium hydroxide relaxer four months ago wants a thio (ammonium thioglycolate) relaxer today. The cosmetologist should:",
    opts: [
      "Apply the thio relaxer — both are relaxers and are compatible",
      "Apply the thio relaxer only to the new growth, using the same formula on the previously relaxed ends",
      "Decline the service — sodium hydroxide and thio relaxers are chemically incompatible; mixing them can cause severe breakage or hair loss",
      "Perform a patch test and proceed if negative"
    ],
    ans: 2,
    exp: "Sodium hydroxide (lye) and thioglycolate relaxers are chemically incompatible. Hydroxide relaxers permanently alter (lanthionize) the disulfide bonds; thio relaxers reduce disulfide bonds by a different mechanism. Applying thio chemistry to hydroxide-relaxed hair can cause extreme breakage and hair loss. This incompatibility is a fundamental safety rule in chemical texture services."
  },
  {
    q: "When performing a virgin relaxer application, the product is typically applied:",
    opts: [
      "At the scalp first, then worked outward to the ends, timing the entire application from the scalp",
      "Mid-shaft first, timed, then applied to the scalp and ends in the final minutes of processing",
      "To the ends first, because they process most slowly",
      "All at once with no sequencing — timing begins when the last section is covered"
    ],
    ans: 1,
    exp: "For a virgin relaxer (first-time application), mid-shaft and ends are processed first because they are the most resistant (no previous chemical service). The formula is then brought to the scalp (most sensitive area) and ends in the final processing minutes. This staggered approach ensures even results and minimizes scalp exposure. Timing varies by formula and manufacturer instructions."
  },
  {
    q: "An acid-balanced permanent wave uses a lower pH than alkaline waves. A key characteristic of acid waves is:",
    opts: [
      "They do not require heat and process completely at room temperature",
      "They require the addition of heat (dryer or body heat) to activate, produce softer, looser curls, and are gentler on previously processed or fragile hair",
      "They use glyceryl monothioglycolate which is incompatible with conditioned hair",
      "They have a higher pH than alkaline waves"
    ],
    ans: 1,
    exp: "Acid waves (pH 4.5–7.0, often glyceryl monothioglycolate) require heat to open the cuticle and allow penetration. They produce a gentler, natural-looking wave pattern and are appropriate for fine, fragile, or chemically processed hair. Alkaline waves (ammonium thioglycolate, pH 8.2–9.6) work at room temperature and produce a firmer, more defined curl. The choice is guided by the hair's condition and the desired result."
  },
  {
    q: "After permanent wave neutralization, the purpose of rinsing the neutralizer thoroughly is to:",
    opts: [
      "Ensure the disulfide bonds break completely",
      "Remove residual oxidizing neutralizer so that ongoing oxidation does not over-process the newly formed bonds or dry the hair",
      "Raise the pH of the hair back to alkaline",
      "Prepare the hair for immediate rebonding service"
    ],
    ans: 1,
    exp: "Permanent wave neutralizers typically use hydrogen peroxide or sodium bromate. If residual oxidizer remains, it continues to react with the hair's newly formed disulfide bonds, weakening them over time. A thorough rinse stops the oxidation reaction, locks in the curl shape, and prevents over-oxidation that can lead to dryness and breakage."
  },
  {
    q: "The diameter of the rod used in a permanent wave PRIMARILY affects:",
    opts: [
      "The processing time",
      "The tightness of the curl — smaller diameter rods produce tighter curls; larger rods produce looser waves",
      "The depth of penetration of the waving solution",
      "Whether heat application is required"
    ],
    ans: 1,
    exp: "Curl tightness in a perm is directly related to rod diameter. This is the same principle as using a small curling iron for tight spirals vs. a large barrel for loose waves. Smaller rods create more curvature in the hair during processing, resulting in tighter curls. This is one of the first consultation decisions when designing a permanent wave service."
  },
  {
    q: "Lanthionization is the term for the chemical change that occurs during a hydroxide relaxer. It is significant because:",
    opts: [
      "It temporarily softens the disulfide bonds, which can be re-formed",
      "It permanently converts two disulfide (–S–S–) bonds into a single lanthionine bond (–S–), which cannot be reversed — the hair structure is permanently altered",
      "It raises the hair's pH to the level needed for color processing",
      "It adds protein to the hair cortex"
    ],
    ans: 1,
    exp: "Hydroxide relaxers (lye, no-lye, guanidine) work through lanthionization: the hydroxide ion breaks a cysteine disulfide bond and removes a sulfur atom, creating a single lanthionine bond. This is irreversible — unlike thio relaxers which can theoretically be reversed. Understanding this explains why lanthionized hair cannot be successfully processed with a thio relaxer and why hydroxide-relaxed hair requires special care."
  },
  {
    q: "A client's perm is taking longer than the test curl indicates it should. One possible reason is:",
    opts: [
      "The rods are too large",
      "The hair has low porosity — the tight cuticle is slowing penetration of the waving solution, requiring more time or a slightly stronger formula",
      "The neutralizer was applied too early",
      "The hair has excessive protein, which speeds processing"
    ],
    ans: 1,
    exp: "Low-porosity hair has a tightly compacted cuticle that resists penetration of waving solutions, extending processing time. Remedies include applying gentle heat to open the cuticle or choosing an alkaline formula (which is more effective at low porosity than acid waves). Conversely, high-porosity hair over-processes quickly. Understanding porosity is essential for perm timing."
  },

];

