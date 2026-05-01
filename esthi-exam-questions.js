// Esthetician State Board Practice Exam — Question Bank
// April 1, 2026 PSI Content Outline (effective for all CA test takers)
// Safety & Infection Control 40% | Client Consultation & Skin Analysis 19%
// Skin Care 17% | Hair Removal 15% | Eyelash & Eyebrow 6% | Makeup 3%
// Note: "Advanced Treatments" was removed as a standalone category in the 2025 outline;
//       those questions are folded into Skin Care (sc).

window.QUESTION_BANK = {

  // ic
  ic: [
{
    q: "A client arrives with a small open lesion on her chin from picking a blemish. What is the MOST appropriate action?",
    opts: [
      "Proceed with the facial but avoid direct pressure on the area",
      "Apply a bandage over the area and continue the service",
      "Reschedule the client until the area is fully healed",
      "Perform the facial but skip extractions in that region"
    ],
    ans: 2,
    exp: "An open lesion presents a risk of infection and cross-contamination. Standard Precautions require that services be refused when there is broken or inflamed skin that could allow pathogens to enter or spread."
  },
  {
    q: "Which federal agency registers all types of disinfectants sold and used in salons and spas in the United States?",
    opts: [
      "The Food and Drug Administration (FDA)",
      "The Occupational Safety and Health Administration (OSHA)",
      "The Environmental Protection Agency (EPA)",
      "The Centers for Disease Control and Prevention (CDC)"
    ],
    ans: 2,
    exp: "The EPA registers all disinfectants. The FDA regulates cosmetics and drugs. OSHA governs workplace safety. The CDC issues infection control guidelines but does not register disinfectants."
  },
  {
    q: "You accidentally nick a client's skin during extraction. Blood is visible. What is the CORRECT sequence of steps?",
    opts: [
      "Blot with tissue, apply antiseptic, continue the service with gloves on",
      "Stop the service, put on gloves, blot with absorbent material, apply antiseptic, dispose of contaminated items in a covered trash receptacle",
      "Ask the client to apply pressure, wash your hands, then resume after bleeding stops",
      "Apply a styptic pencil to stop bleeding, change gloves, and finish the service"
    ],
    ans: 1,
    exp: "Standard Precautions require treating all blood as potentially infectious. You must don gloves before touching the wound, properly contain and dispose of contaminated items, and document the exposure incident. A styptic pencil is not recommended in a professional treatment room."
  },
  {
    q: "An esthetician removes a disinfected implement from disinfectant solution and places it on the treatment table to air dry. This action is:",
    opts: [
      "Correct, as implements must air-dry to prevent diluting skin care products",
      "Incorrect, because the implement is now contaminated and must be re-disinfected",
      "Correct, as long as the table was wiped with disinfectant before the service",
      "Incorrect, because implements should be dried with a clean paper towel and stored in a covered container"
    ],
    ans: 3,
    exp: "After disinfection, implements must be rinsed, dried with a clean paper towel, and stored in a covered, clean container. Placing them directly on the treatment table re-contaminates them via contact with the surface."
  },
  {
    q: "Which of the following BEST describes the difference between disinfection and sterilization?",
    opts: [
      "Disinfection destroys all microbial life including spores; sterilization destroys most pathogens",
      "Disinfection uses heat; sterilization uses chemicals",
      "Disinfection destroys most pathogens but not bacterial spores; sterilization destroys all microbial life including spores",
      "Both processes are equivalent; the terms are used interchangeably in esthetics"
    ],
    ans: 2,
    exp: "Disinfection kills most pathogens on surfaces but does not reliably destroy all bacterial spores. Sterilization (e.g., autoclave) completely destroys all microbial life including spores. Sterilization is required for instruments that penetrate skin."
  },
  {
    q: "A client discloses a known allergy to latex. Which action is MOST appropriate?",
    opts: [
      "Wear vinyl or nitrile gloves and ensure no latex products are used during the service",
      "Proceed without gloves to avoid any risk of latex exposure",
      "Ask the client to sign a waiver and use latex gloves as usual",
      "Refer the client to a dermatologist before performing any service"
    ],
    ans: 0,
    exp: "Latex allergies can cause anaphylactic reactions. Using non-latex alternatives (vinyl or nitrile) protects the client while allowing the service to proceed safely. Forgoing gloves entirely violates Standard Precautions."
  },
  {
    q: "MRSA is primarily transmitted in salon environments through which route?",
    opts: [
      "Airborne droplets from coughing or sneezing",
      "Direct contact with contaminated surfaces or skin-to-skin touch",
      "Ingestion of contaminated products",
      "Contact with fungal spores in the air"
    ],
    ans: 1,
    exp: "MRSA (Methicillin-resistant Staphylococcus aureus) is primarily spread by direct contact — touching contaminated surfaces (indirect) or skin-to-skin contact (direct). Proper disinfection of surfaces and handwashing are the primary defenses."
  },
  {
    q: "A salon-grade disinfectant label must list effectiveness against all of the following EXCEPT:",
    opts: [
      "HIV",
      "HBV",
      "MRSA",
      "Clostridium difficile (C. diff) spores"
    ],
    ans: 3,
    exp: "Salon disinfectants must be bactericidal, virucidal, and fungicidal, and list HIV, HBV, and MRSA on the label. Destroying C. diff spores requires sterilization-level products, which are not required for salon use. An EPA registration number must also appear on the label."
  },
  {
    q: "Which pathogen type CANNOT be treated with antibiotics?",
    opts: [
      "Staphylococci bacteria",
      "Fungi",
      "Viruses",
      "Parasites"
    ],
    ans: 2,
    exp: "Viruses are submicroscopic particles that replicate inside host cells. Antibiotics are effective only against bacteria. Antifungal medications treat fungi; antiparasitic medications treat parasites."
  },
  {
    q: "The Safety Data Sheet (SDS) for a chemical peel product contains 16 standardized sections. Which section specifically addresses first-aid measures?",
    opts: [
      "Section 2 — Hazard Identification",
      "Section 4 — First-Aid Measures",
      "Section 8 — Exposure Controls",
      "Section 11 — Toxicological Information"
    ],
    ans: 1,
    exp: "Per the standardized 16-section SDS format required by OSHA's Hazard Communication Standard, Section 4 covers first-aid measures. Section 2 covers hazard identification, Section 8 covers exposure controls, and Section 11 addresses toxicological information."
  },
  {
    q: "A client discloses she is immunocompromised due to chemotherapy. Which infection control adjustment is MOST important?",
    opts: [
      "No adjustments are needed if standard protocols are already followed",
      "Use stricter disinfection procedures and avoid any service that could break the skin barrier",
      "Require the client to provide a physician's note before scheduling",
      "Only perform services if the client has not had a chemotherapy treatment within 48 hours"
    ],
    ans: 1,
    exp: "Immunocompromised clients have reduced ability to fight infection. This makes rigorous infection control even more critical, and any service that compromises the skin barrier (extractions, peels) should be approached with extra caution or avoided without medical clearance."
  },
  {
    q: "Biofilms are particularly dangerous in beauty settings because they:",
    opts: [
      "Are only found in water systems and do not affect implements",
      "Form a sticky matrix that resists standard antiseptics, antimicrobials, and disinfectants",
      "Are destroyed by regular soap and water cleaning",
      "Only develop on metal implements and not plastic ones"
    ],
    ans: 1,
    exp: "Biofilms are colonies of microorganisms encased in a self-secreted matrix that makes them highly resistant to disinfectants. They are especially problematic in foot spa plumbing and drain systems, and require specific intensive cleaning protocols."
  },
  {
    q: "Under Standard Precautions, an esthetician should treat which body fluids as potentially infectious?",
    opts: [
      "Only blood",
      "Blood and any fluid visibly contaminated with blood",
      "All human blood and body fluids",
      "Only fluids from clients who disclose a known bloodborne illness"
    ],
    ans: 2,
    exp: "Standard Precautions, issued by the CDC, require that ALL human blood and body fluids be treated as potentially infectious regardless of the patient's known or unknown disease status. You cannot rely on client disclosure for safety."
  },
  {
    q: "Which of the following makes an implement NOT suitable for use immediately after disinfection?",
    opts: [
      "It was used on a client with oily skin",
      "It was soaked in disinfectant for longer than the manufacturer's recommended time",
      "It was not cleaned of all visible debris before being placed in disinfectant",
      "It was rinsed with clean water after being removed from the disinfectant solution"
    ],
    ans: 2,
    exp: "Disinfectants cannot penetrate organic matter such as skin cells, oils, or other debris. Cleaning must occur BEFORE disinfection. An implement with visible debris will not be properly disinfected even after soaking in disinfectant solution."
  },
  {
    q: "In California, which state agency is responsible for licensing estheticians and enforcing salon regulations?",
    opts: [
      "California Department of Public Health (CDPH)",
      "California Board of Barbering and Cosmetology (CBBC)",
      "California Occupational Safety and Health Administration (Cal/OSHA)",
      "California Environmental Protection Agency (CalEPA)"
    ],
    ans: 1,
    exp: "The California Board of Barbering and Cosmetology (CBBC) regulates licensing, enforcement, and on-the-job conduct for estheticians, cosmetologists, and other beauty professionals. OSHA governs workplace safety; CDPH oversees public health."
  },
  {
    q: "The term 'scope of practice' in esthetics refers to:",
    opts: [
      "The range of products an esthetician is permitted to sell",
      "The list of services a licensee is legally permitted to perform under their specific license type",
      "The educational hours required to renew an esthetics license",
      "The maximum number of clients an esthetician can serve per day"
    ],
    ans: 1,
    exp: "Scope of practice defines the legally permitted services under a given license. Performing services outside your scope of practice risks loss of license and legal liability. Diagnosing skin conditions is outside the scope of practice for estheticians."
  },
  {
    q: "Which type of bacteria is MOST commonly associated with skin infections in salon environments?",
    opts: [
      "Cocci arranged in clusters (Staphylococci)",
      "Rod-shaped Gram-negative bacilli",
      "Spirochetes",
      "Anaerobic Clostridium species"
    ],
    ans: 0,
    exp: "Staphylococci (especially Staphylococcus aureus and MRSA) are the most common cause of skin infections in salon settings. They are spread through direct contact and contaminated surfaces."
  },
  {
    q: "A client is currently taking isotretinoin (Accutane). The CORRECT action before any exfoliating service is to:",
    opts: [
      "Perform a mild enzyme peel only",
      "Decline the service and refer to the prescribing physician, as a 6–12 month waiting period after stopping the drug is typically required",
      "Proceed if the client stopped taking the medication 30 days ago",
      "Reduce the peel concentration by 50% and monitor closely"
    ],
    ans: 1,
    exp: "Isotretinoin thins the skin, impairs healing, and increases sensitivity for up to 6–12 months after cessation. Most professional protocols require a waiting period of 6–12 months after stopping the drug before any chemical peel or aggressive exfoliation. Always defer to the prescribing physician."
  },
  {
    q: "What is the PRIMARY purpose of performing a patch test before a new service or product?",
    opts: [
      "To ensure the product is not expired",
      "To test the esthetician's application technique",
      "To identify a client's potential allergic or sensitivity reaction to a product",
      "To satisfy state board documentation requirements"
    ],
    ans: 2,
    exp: "A patch test checks for allergic contact dermatitis or irritant reactions before a full application. It is performed 24–48 hours before the service and is especially critical for tints, chemical peels, and waxes with known allergens."
  },
  {
    q: "The correct handwashing protocol includes:",
    opts: [
      "Rinsing with warm water for at least 10 seconds",
      "Washing with soap and water for a minimum of 20 seconds, covering all surfaces of hands and wrists",
      "Using hand sanitizer only, as it is more effective than soap and water",
      "Washing with antibacterial soap for 10 seconds before gloves are applied"
    ],
    ans: 1,
    exp: "The CDC recommends washing all surfaces of hands and wrists with soap and water for at least 20 seconds. Hand sanitizer is effective against many pathogens but is not a substitute when hands are visibly soiled. Handwashing is required before and after each client."
  },
  {
    q: "A client with active cold sores on her lip requests an upper lip wax. You should:",
    opts: [
      "Proceed but avoid direct contact with the sore",
      "Perform the service with an extra layer of gloves",
      "Decline the service on the affected area until the lesions are fully healed",
      "Apply antiviral cream to the area first, then wax normally"
    ],
    ans: 2,
    exp: "Active herpes simplex lesions are contagious viral infections. Waxing over active lesions can spread the virus, traumatize the lesion, and cause significant complications. The service must be declined until lesions are fully healed."
  },
  {
    q: "Which of the following is a SECONDARY (not primary) skin lesion?",
    opts: [
      "Papule",
      "Vesicle",
      "Crust",
      "Macule"
    ],
    ans: 2,
    exp: "Secondary lesions develop from changes to primary lesions. A crust forms from dried serum, blood, or pus over a previously broken lesion. Primary lesions (papules, vesicles, macules, pustules) develop on previously normal skin."
  },
  {
    q: "A client's consultation form should be updated:",
    opts: [
      "Only during the initial visit",
      "Every 12 months regardless of any changes",
      "At every appointment, or whenever the client reports changes in health, medications, or skin",
      "Only if the client requests a new service type"
    ],
    ans: 2,
    exp: "Health status, medications, and skin conditions can change and directly affect service safety. Consultation forms should be reviewed or updated at each appointment to capture any new contraindications, allergies, or medications."
  },
  {
    q: "Multiuse implements that contact broken skin must be:",
    opts: [
      "Disinfected with an EPA-registered disinfectant",
      "Disposed of after each use",
      "Sterilized in an autoclave before reuse",
      "Soaked in isopropyl alcohol for 10 minutes"
    ],
    ans: 2,
    exp: "Implements that penetrate or contact broken skin become 'critical items' and require sterilization (e.g., autoclave) because they carry significant infection risk. Hospital-grade disinfection alone is insufficient for these items."
  },
  {
    q: "Placing a used spatula back into a shared wax pot after touching a client's skin is called:",
    opts: [
      "Cross-contamination via double-dipping",
      "Indirect disinfection",
      "Standard wax application technique",
      "A permissible practice if the wax is kept at bactericidal temperature"
    ],
    ans: 0,
    exp: "Double-dipping contaminates the entire wax pot with skin cells, blood, and pathogens from the client. Once a spatula touches the client's skin, it must never re-enter the wax jar. A new spatula must be used with each dip."
  },
  {
    q: "Which of the following is an example of INDIRECT transmission of a pathogen?",
    opts: [
      "A client sneezing directly onto the esthetician's face",
      "Shaking hands with an infected person",
      "Touching a contaminated tweezer and then the client's skin without cleaning in between",
      "Breathing in airborne droplets from a client with influenza"
    ],
    ans: 2,
    exp: "Indirect transmission occurs through an intermediate object (fomite). Using a contaminated implement on a new client without cleaning is indirect transmission. Direct transmission involves physical contact with an infected person; airborne transmission involves pathogens suspended in air."
  },
  {
    q: "Most EPA-registered disinfectants require a specific 'contact time' to achieve their kill claim. This means:",
    opts: [
      "The implement must be rinsed immediately after dipping",
      "The disinfectant must remain wet on the surface for the time period stated on the label",
      "The implement only needs 30 seconds of exposure for full effectiveness",
      "Contact time is only relevant for heat-based sterilization"
    ],
    ans: 1,
    exp: "The efficacy of a disinfectant depends on maintaining the wet contact time listed on the EPA-registered label — typically 10 minutes for most quaternary ammonium products. Removing an implement before contact time is complete means disinfection has not been achieved."
  },
  {
    q: "A client reports she is on warfarin (a blood thinner). Which service warrants GREATEST additional caution?",
    opts: [
      "Applying a hydrating mask",
      "Performing extractions",
      "Applying toner",
      "Cleansing with a muslin cloth"
    ],
    ans: 1,
    exp: "Warfarin impairs blood clotting. Extractions can break the skin and cause prolonged bleeding in clients on anticoagulants. This must be flagged during consultation, and extractions may need to be avoided or performed with extreme care."
  },
  {
    q: "To properly dispose of a lancet after use, the esthetician must:",
    opts: [
      "Wrap it in tissue and place it in the regular trash",
      "Recap it and store it in a labeled container for weekly disposal",
      "Place it immediately into a puncture-proof sharps container",
      "Soak it in disinfectant for 24 hours before disposal"
    ],
    ans: 2,
    exp: "All sharps (lancets, needles) must be disposed of immediately in a puncture-proof sharps container (biohazard) to prevent needlestick injuries. Recapping needles or placing in regular trash violates OSHA bloodborne pathogen regulations."
  },
  {
    q: "Hepatitis B virus (HBV) can survive on a dry surface at room temperature for up to:",
    opts: [
      "30 minutes",
      "4 hours",
      "24 hours",
      "7 days"
    ],
    ans: 3,
    exp: "HBV is a particularly resilient bloodborne pathogen that can survive on environmental surfaces for up to 7 days. This makes thorough surface disinfection between all clients essential, even when no blood is visible."
  },
  {
    q: "OSHA's Hazard Communication Standard (HazCom) requires salon employees to have access to:",
    opts: [
      "A list of all clients' medical conditions",
      "Safety Data Sheets (SDS) for all hazardous chemicals used in the workplace",
      "OSHA inspection reports from the past three years",
      "Product ingredient lists as required by the FDA"
    ],
    ans: 1,
    exp: "OSHA's HazCom standard requires employers to maintain SDS for all hazardous chemicals and make them readily accessible to employees. SDS contain 16 sections covering hazards, handling, emergency response, and disposal."
  },
  {
    q: "Quaternary ammonium compounds (quats) used for disinfection are MOST affected by:",
    opts: [
      "The color of the implement being disinfected",
      "Hard water and the presence of organic soiling, which can reduce their effectiveness",
      "The type of metal the implement is made from",
      "The ambient room temperature"
    ],
    ans: 1,
    exp: "Quaternary ammonium compounds can be inactivated by hard water, anionic detergents, and organic matter. Implements must be cleaned before immersion and concentration maintained correctly. Pre-cleaning is critical to ensuring quat effectiveness."
  },
  {
    q: "A client develops a wheal (raised hive) and flare response minutes after product application. This is MOST consistent with:",
    opts: [
      "Delayed-type hypersensitivity (Type IV allergic reaction)",
      "Irritant contact dermatitis",
      "Immediate hypersensitivity (Type I IgE-mediated allergic reaction)",
      "Seborrheic dermatitis flare-up"
    ],
    ans: 2,
    exp: "A wheal and flare response occurring within minutes of product exposure is characteristic of a Type I IgE-mediated (immediate) allergic reaction. This can escalate to anaphylaxis. The service must be stopped immediately and emergency services contacted if systemic symptoms occur."
  },
  {
    q: "For a client with active Stage 2 rosacea (papules and pustules), which equipment should the esthetician AVOID using?",
    opts: [
      "A calming, fragrance-free moisturizer",
      "A cool compress",
      "A steamer and high-frequency equipment that generate heat",
      "An LED panel with red light at low intensity"
    ],
    ans: 2,
    exp: "Rosacea is a vascular disorder triggered by vasodilation. Heat sources (steamers, hot towels, high-frequency electrodes) worsen symptoms by dilating blood vessels. Calming, heat-free modalities are preferred for rosacea clients."
  },
  {
    q: "Single-use supplies must be:",
    opts: [
      "Disinfected and reused if they appear clean",
      "Stored loosely in an open container at the workstation for easy access",
      "Discarded after each use in a covered waste receptacle",
      "Used on up to three clients if surfaces appear unsoiled"
    ],
    ans: 2,
    exp: "Single-use (disposable) items — including spatulas, cotton rounds, and lancets — must be disposed of in a closed container after each use. They cannot be cleaned and reused. Before use, they must be kept in clean, covered containers."
  },
  {
    q: "The 'E' in the ABCDE skin cancer checklist stands for:",
    opts: [
      "Elevation — whether the lesion is raised",
      "Erythema — whether the lesion is red or inflamed",
      "Evolving — whether the lesion has changed in size, shape, or color",
      "Exfoliation — whether the lesion sheds skin"
    ],
    ans: 2,
    exp: "In the ABCDE melanoma checklist: A=Asymmetry, B=Border (irregular), C=Color (multiple colors), D=Diameter (>pencil eraser ~6mm), E=Evolving (changing over time). Any evolving lesion warrants immediate referral to a physician."
  },
  {
    q: "Which skin condition is CONTAGIOUS and requires refusal of service?",
    opts: [
      "Atopic dermatitis (eczema)",
      "Melasma",
      "Tinea faciei (ringworm of the face)",
      "Sebaceous hyperplasia"
    ],
    ans: 2,
    exp: "Tinea faciei is a fungal infection (ringworm) that is highly contagious through direct and indirect contact. Service must be declined and the client referred to a physician. Eczema, melasma, and sebaceous hyperplasia are not contagious conditions."
  },
  {
    q: "What makes piped foot spas particularly challenging to sanitize?",
    opts: [
      "Their electrical components cannot be disinfected",
      "Internal tubing and components harbor biofilms that resist standard disinfection",
      "Most disinfectants are ineffective at the water temperatures used",
      "Foot spas only need cleaning weekly"
    ],
    ans: 1,
    exp: "Piped foot spa basins harbor biofilms in their internal tubing and components. Biofilms resist standard disinfectants. Non-circulating basins are safer and easier to disinfect. Piped spas require specific, more intensive cleaning protocols mandated by California state board."
  },
  {
    q: "The MOST important infection-control screening question to ask before any skin service is:",
    opts: [
      "'What is your preferred skin care routine at home?'",
      "'Do you have any known allergies, skin conditions, or are you currently taking any medications?'",
      "'How much water do you drink each day?'",
      "'What skin type do you believe you have?'"
    ],
    ans: 1,
    exp: "Asking about allergies, skin conditions, and medications is the foundational safety screening question. It uncovers contraindications, potential interactions, and factors that require service modification or referral before any product touches the client's skin."
  },
  {
    q: "Which is the CORRECT response when a client with a history of cold sores is scheduled for a heat-based lip treatment?",
    opts: [
      "Proceed normally since the client has no active outbreak",
      "Inform the client that heat and trauma can trigger HSV reactivation and modify the service accordingly",
      "Prescribe an antiviral medication before the appointment",
      "Apply a topical anesthetic to prevent any potential outbreak"
    ],
    ans: 1,
    exp: "Heat, mechanical trauma, and UV exposure can trigger herpes simplex virus (HSV) reactivation even without an active sore. The esthetician should inform the client, modify heat-based elements, and recommend consulting their physician about prophylactic antivirals."
  },
  {
    q: "A disinfectant solution mixed at the start of the day is still being used at closing time. This is problematic because:",
    opts: [
      "It is acceptable as long as no visible debris is present",
      "The solution may be diluted and contaminated over time, reducing its microbial kill efficacy",
      "California law requires solutions to be changed every 4 hours",
      "The solution becomes more concentrated and potentially corrosive over time"
    ],
    ans: 1,
    exp: "Disinfectant solutions degrade over time and lose efficacy as they become contaminated with organic matter. Most manufacturers specify a maximum use time and require solution changes when visibly cloudy or contaminated, or minimally once per day."
  },

{
    q: "Which of the following items is considered a SINGLE-USE (disposable) item in the esthetician service room?",
    opts: [
      "Metal tweezers",
      "Lancet used to extract a pustule — must be discarded immediately after one use",
      "Glass comedone extractor",
      "Stainless steel spatula"
    ],
    ans: 1,
    exp: "Lancets (needles used to pierce pustules) are single-use sharps. They must be discarded in a sharps container immediately after use on one client. They cannot be disinfected and reused. Metal implements (tweezers, spatulas, extractors) can be cleaned and disinfected between clients. Proper sharps disposal protects both the esthetician and waste handlers from needlestick injuries."
  },
  {
    q: "An EPA-registered hospital-grade disinfectant used in an esthetics room must remain on implements for the full contact time indicated on the label. Why is this critical?",
    opts: [
      "Shorter contact times are acceptable if the disinfectant concentration is doubled",
      "The label contact time is the minimum time proven to destroy the listed pathogens — removing implements early means the disinfection cycle is incomplete and implements are not safe to use",
      "The contact time only matters for implements used on broken skin",
      "Contact time applies only to soaking — spray-applied disinfectants work instantly"
    ],
    ans: 1,
    exp: "Disinfectant efficacy is established through testing at a specific concentration and contact (dwell) time. Removing implements before the full contact time means not all target pathogens have been killed, even if the solution is labeled as hospital-grade. This is a regulatory requirement in California and a fundamental infection control principle. Always follow the manufacturer's label exactly."
  },
  {
    q: "An esthetician should change into a fresh pair of gloves between clients. The recommended glove removal technique is:",
    opts: [
      "Pull both gloves off by the fingertips simultaneously",
      "Peel the first glove off from the wrist, turning it inside out; then slip fingers of the ungloved hand under the remaining glove's wrist cuff and peel it inside out over the first — touching only inner (clean) surfaces",
      "Rinse gloves with water before removal to reduce contamination",
      "Cut the gloves off with scissors at the cuff"
    ],
    ans: 1,
    exp: "The correct doffing (removal) technique ensures that the outer (contaminated) surface never contacts bare skin. Peel the first glove inside-out from the wrist, hold it in the gloved hand, then slide ungloved fingers under the second glove's cuff and roll it inside-out, encasing the first glove. Dispose immediately. This technique is taught in infection control training and required by OSHA BBP standards."
  },
  {
    q: "In California, an esthetician found performing services in a facility without a valid establishment license is subject to:",
    opts: [
      "A written warning only for a first offense",
      "Citation, fines, and potential closure of the establishment — the California Board of Barbering and Cosmetology enforces both individual license and establishment license requirements",
      "No penalty if the individual's personal license is current",
      "Only civil liability if a client is harmed"
    ],
    ans: 1,
    exp: "California law requires both the individual practitioner and the establishment (salon, spa) to hold valid licenses. Operating in an unlicensed establishment is a violation of the Barbering and Cosmetology Act. Penalties include fines, cease-and-desist orders, and potential suspension of the individual's license. Working at a licensed establishment is the practitioner's professional responsibility."
  },
  {
    q: "What does the term 'standard precautions' mean in the context of an esthetics practice?",
    opts: [
      "Only apply infection control measures to clients who appear visibly ill",
      "Treat all blood and body fluids as potentially infectious regardless of the client's apparent health status, using barriers (gloves, eye protection if splatter risk) and proper disinfection protocols on all clients equally",
      "Wear gloves only when performing extractions",
      "Disinfect implements only after services on clients with known infections"
    ],
    ans: 1,
    exp: "Standard Precautions (formerly Universal Precautions) are the CDC's minimum infection prevention standard. They are applied to every client because you cannot determine a person's infection status from appearance alone. Blood-borne pathogens (HIV, Hepatitis B & C) and other infectious agents can be present without visible signs. Treating every client as potentially infectious is the safest and legally required approach."
  },
  {
    q: "An esthetician accidentally nicks a client's skin during an extraction. The correct immediate steps include:",
    opts: [
      "Continue the service and apply antiseptic at the end",
      "Stop the service at the injured area, apply appropriate first aid (clean the area, apply antiseptic, cover with a bandage), document the incident, and continue only if the client consents and the wound is safely covered",
      "Apply more steam to disinfect the open area and continue",
      "Only document the incident — no other steps are needed"
    ],
    ans: 1,
    exp: "Any exposure to blood requires immediate first aid, documentation, and re-evaluation of whether to continue. The esthetician must clean the area, apply antiseptic, and cover the wound to prevent cross-contamination. Implements that contacted blood must be disinfected before further use. An incident report protects both the client and the practitioner legally. Continuing the service on broken skin without these steps is an infection control violation."
  },
  {
    q: "Safety Data Sheets (SDS) in an esthetics facility are required to be:",
    opts: [
      "Kept locked in the owner's office for confidentiality",
      "Readily accessible to all employees in the work area during their shift — workers have a right-to-know about hazardous chemicals they work with",
      "Posted only in break rooms",
      "Provided only upon a client's request"
    ],
    ans: 1,
    exp: "OSHA's Hazard Communication Standard (HazCom) requires SDS (formerly MSDS) to be immediately accessible to all employees who may be exposed to the chemical — not locked away. Workers have a legal right to know about chemical hazards in their workplace. SDS provide first aid measures, PPE requirements, and spill response procedures for each chemical product. This applies to all esthetics chemicals including peeling agents, tints, and cleansers."
  },
  {
    q: "When a client discloses they are taking oral isotretinoin (Accutane) for acne, the esthetician must:",
    opts: [
      "Proceed with a mild enzyme peel — isotretinoin is not relevant to facial treatments",
      "Decline all exfoliating services (chemical peels, microdermabrasion, waxing) during treatment and for at least 6 months after discontinuing — the drug causes severe skin thinning and hypersensitivity that dramatically increases risk of scarring and burns",
      "Limit the contraindication to only chemical peels but continue waxing",
      "Consult a written guide and use the mildest peel available"
    ],
    ans: 1,
    exp: "Isotretinoin (Accutane/Claravis) is a systemic retinoid that profoundly reduces skin cell turnover, thins the epidermis, and impairs wound healing. ANY exfoliating service — chemical peel, microdermabrasion, dermaplaning, or waxing — risks tearing the thinned skin, causing chemical burns, or resulting in permanent scarring. This contraindication extends 6–12 months post-treatment. This is one of the most critical intake form questions for any esthetician."
  },
  {
    q: "Proper hand hygiene technique requires washing with soap and water for a minimum of:",
    opts: [
      "5 seconds",
      "20 seconds — vigorously lathering all surfaces including between fingers, backs of hands, and under nails",
      "60 seconds",
      "10 seconds if an antimicrobial soap is used"
    ],
    ans: 1,
    exp: "CDC guidelines specify a minimum of 20 seconds of vigorous friction with soap and water, covering all hand surfaces. This removes transient microorganisms through physical scrubbing action. Timing matters because shorter washing is ineffective. Hand sanitizer (60%+ alcohol) is an acceptable alternative when hands are not visibly soiled, but soap and water is required after removing gloves, after touching contaminated items, or when hands are visibly soiled."
  },
  {
    q: "Which classification of microorganism is NOT destroyed by hospital-grade disinfectants used in esthetics, requiring sterilization instead?",
    opts: [
      "Bacteria",
      "Viruses including HIV and hepatitis B",
      "Bacterial endospores (such as Bacillus anthracis spores)",
      "Fungi"
    ],
    ans: 2,
    exp: "Hospital-grade disinfectants kill most bacteria, fungi, and enveloped viruses (HIV, Hep B, Hep C). However, bacterial endospores — the dormant, highly resistant forms produced by organisms like Clostridium and Bacillus — require sterilization (autoclave, dry heat, chemical sterilization) to destroy. Estheticians use disinfection-level protocols (not sterilization) for implements, which is appropriate because most esthetics services do not penetrate into sterile body cavities."
  },
  {
    q: "A client informs you she has an active cold sore (herpes labialis) on her lip. The correct action is:",
    opts: [
      "Proceed with the facial but avoid the lip area",
      "Postpone any facial or waxing service in the face and lip area until the cold sore is fully healed — the HSV-1 virus is highly contagious through direct contact and via contaminated implements",
      "Apply a thick layer of emollient over the cold sore and proceed",
      "Use gloves throughout the service and continue as normal"
    ],
    ans: 1,
    exp: "Herpes simplex virus Type 1 (HSV-1) causes cold sores and is highly contagious during active outbreaks (blister stage through crusting). Steam, manipulation, and heat from facial services can spread the virus to adjacent skin areas (Herpes gladiatorum or ocular herpes if spread). The service must be deferred until the lesion is fully healed (typically 7–10 days). Providing a facial over an active outbreak could expose the esthetician and contaminate tools."
  },
  {
    q: "Eye protection for the esthetician (splash goggles or face shield) is specifically required when:",
    opts: [
      "Performing all facial massages",
      "Mixing or applying chemicals that pose a splash hazard — such as mixing medium-to-deep chemical peeling agents or working with high-concentration AHA/BHA solutions",
      "Using a magnifying lamp",
      "Performing steam treatments"
    ],
    ans: 1,
    exp: "OSHA requires eye/face protection when there is a reasonable anticipation of splash, spray, or spatter of blood or other potentially infectious materials, or hazardous chemicals. This applies when mixing or applying medium-to-deep peeling agents (TCA, Jessner's, higher-concentration AHAs) that can cause chemical injury on eye contact. A magnifying lamp, steam, or manual massage do not present this hazard."
  },
  {
    q: "The California Board of Barbering and Cosmetology inspects esthetics establishments primarily to verify:",
    opts: [
      "The quality of facials being performed",
      "Compliance with sanitation, disinfection, and safety regulations, as well as valid individual and establishment licenses",
      "Whether prices charged are fair to consumers",
      "The square footage of treatment rooms"
    ],
    ans: 1,
    exp: "CBBC inspectors enforce the California Barbering and Cosmetology Act and its regulations (Title 16, CCR). Inspections focus on: valid establishment and practitioner licenses, proper disinfection procedures, correct product labeling and SDS availability, storage of chemicals, client record retention, and compliance with sanitation rules for implements and the facility. Service quality is not evaluated."
  },
  {
    q: "Quaternary ammonium compounds ('quats') are commonly used disinfectants in esthetics. A limitation of quats is:",
    opts: [
      "They are ineffective against bacteria",
      "They can be inactivated by residual soap or hard water, and their efficacy depends on using the correct dilution — too strong or too weak reduces effectiveness",
      "They are not EPA-registered",
      "They require a 30-minute contact time on all surfaces"
    ],
    ans: 1,
    exp: "Quat-based disinfectants are effective at proper dilution but are inactivated by soap residue and hard water minerals, which is why implements must be thoroughly rinsed of soap before immersion. Using incorrect dilutions (too dilute = ineffective; too concentrated = may leave toxic residue) also compromises efficacy. The manufacturer's label must be followed exactly for concentration and contact time."
  },
  {
    q: "A client asks if she can bring her own implements to ensure they are sanitary. The esthetician's professional response is:",
    opts: [
      "Refuse — only salon implements may be used",
      "Accept client implements only if they appear clean",
      "Explain that the establishment's properly cleaned and disinfected implements are safe, but if the client has a personal concern, she may bring her own single-use items; the esthetician cannot guarantee the safety of client-supplied implements",
      "Client implements are always preferred as they eliminate cross-contamination risk"
    ],
    ans: 2,
    exp: "The esthetician is responsible for using properly disinfected or single-use implements from the establishment's sanitation protocol. Client-supplied implements are outside this chain of custody — their disinfection status is unknown. While clients can bring single-use items (personal disposable files, etc.), the esthetician should explain that establishment implements follow a verified disinfection protocol and are compliant with state regulations."
  },
  {
    q: "The MOST important reason to screen clients for anticoagulant medications (blood thinners such as warfarin, heparin, or aspirin therapy) before extraction or waxing services is:",
    opts: [
      "These medications make the skin change color during services",
      "Anticoagulants impair normal clotting — even minor bleeding from extractions or wax lifts can result in prolonged bleeding, bruising, and delayed healing",
      "Blood thinners make the skin too sensitive for any topical products",
      "These medications are contraindicated only for deep chemical peels, not for waxing or extractions"
    ],
    ans: 1,
    exp: "Anticoagulant medications (warfarin, heparin, aspirin at therapeutic doses, newer blood thinners like rivaroxaban) reduce the blood's ability to clot. Even the minor skin trauma from extractions or wax strips can result in significant bruising, prolonged bleeding, or poor wound healing. Estheticians should ask about blood thinners during intake and modify or decline services that break skin integrity."
  },
  {
    q: "Wet disinfectant containers holding implements must be:",
    opts: [
      "Left open to allow air circulation and prevent anaerobic bacteria",
      "Covered and labeled with the contents and date prepared — solution must be changed according to manufacturer instructions (commonly daily or when visibly contaminated)",
      "Replaced only once a week",
      "Shared between treatment rooms to reduce costs"
    ],
    ans: 1,
    exp: "California regulations require disinfectant containers to be covered (to prevent contamination and evaporation) and labeled. The solution must be changed per manufacturer instructions — most quat solutions should be changed daily or when dirty. Using old or contaminated solutions provides inadequate disinfection and is a regulatory violation. Sharing containers between rooms increases cross-contamination risk."
  },
  {
    q: "Which statement about formaldehyde-releasing preservatives in esthetics products is TRUE?",
    opts: [
      "They are completely safe and approved for all skin types without restriction",
      "They are permitted at low concentrations in cosmetics but are classified as potential sensitizers and carcinogens at higher exposures — estheticians should be aware of them on ingredient labels (e.g., DMDM hydantoin, imidazolidinyl urea)",
      "They are only found in nail products, not in skin care",
      "California has completely banned them from all cosmetic products"
    ],
    ans: 1,
    exp: "Several common cosmetic preservatives (DMDM hydantoin, diazolidinyl urea, imidazolidinyl urea, quaternium-15) release small amounts of formaldehyde over time. At cosmetic concentrations they are generally considered low-risk, but they are among the most common causes of preservative contact allergy and are classified as potential carcinogens at occupational-level exposure. California's Safe Cosmetics Act requires these to be reported. Estheticians should be able to identify them on labels, especially for sensitive clients."
  },
  {
    q: "The purpose of an informed consent form before a chemical peel service is to:",
    opts: [
      "Eliminate the esthetician's legal liability entirely",
      "Ensure the client understands the nature of the service, expected outcomes, potential risks (redness, peeling, post-inflammatory hyperpigmentation in darker skin tones), and aftercare requirements — allowing them to make an educated decision",
      "Fulfill a California requirement that applies only to medium and deep peels",
      "Protect only the spa owner, not the individual esthetician"
    ],
    ans: 1,
    exp: "Informed consent is both an ethical and legal practice. It documents that the client was told what the service involves, the realistic expected results, the risks (especially relevant for chemical peels — PIH, sensitivity, prolonged redness, rare scarring), and the required aftercare (sun avoidance, no retinoids for a period). A signed consent form does not eliminate all liability but demonstrates the practitioner fulfilled their duty to disclose."
  },
  {
    q: "Bloodborne pathogen training under OSHA's BBP Standard must be provided to estheticians:",
    opts: [
      "Only once, upon initial hiring",
      "At the time of initial assignment to tasks with occupational exposure, and annually thereafter",
      "Only if the employer has more than 50 employees",
      "At the employee's discretion when they feel it is needed"
    ],
    ans: 1,
    exp: "OSHA's Bloodborne Pathogens Standard (29 CFR 1910.1030) requires employers to provide BBP training at the time of initial assignment (before beginning tasks involving occupational exposure) and at least annually. This covers hazard communication, exposure control plan review, PPE use, post-exposure procedure, and hepatitis B vaccination. For estheticians, occupational exposure risk arises during extractions, waxing, and any service that might involve skin trauma."
  }
  ],

  // sa
  sa: [
{
    q: "A client with Fitzpatrick Type IV skin seeks laser hair removal. Which concern is MOST clinically relevant?",
    opts: [
      "Type IV skin does not respond to laser and should not receive it",
      "Type IV skin has increased melanin and is at higher risk for post-inflammatory hyperpigmentation and burns from laser",
      "Type IV skin requires twice the laser energy compared to Type I",
      "Fitzpatrick type has no relevance to laser hair removal outcomes"
    ],
    ans: 1,
    exp: "Fitzpatrick Type IV skin tans easily and has higher melanin concentration, which can absorb laser energy unintentionally, increasing the risk of PIH, burns, and other complications. Careful selection of wavelength, pulse duration, and fluence is required."
  },
  {
    q: "Intrinsic aging of the skin is PRIMARILY caused by:",
    opts: [
      "Repeated UV exposure over decades",
      "Cigarette smoking and environmental pollutants",
      "Chronological aging, genetics, and hormonal changes",
      "Repeated facial expressions causing permanent lines"
    ],
    ans: 2,
    exp: "Intrinsic (chronological) aging is driven by internal factors: genetics, hormonal decline, cellular metabolism changes, and the natural slowing of collagen and elastin production. UV damage, smoking, and lifestyle factors contribute to extrinsic (premature) aging."
  },
  {
    q: "A client's skin is oily in the T-zone but dry and flaky on the cheeks. This BEST describes:",
    opts: [
      "Oily skin type",
      "Dehydrated skin condition",
      "Combination skin type",
      "Sensitized skin condition"
    ],
    ans: 2,
    exp: "Combination skin is a genetic skin TYPE characterized by oiliness in the T-zone (forehead, nose, chin) with dryness elsewhere. It is distinct from dehydration (insufficient water content) or sensitized skin (reactive to stimuli)."
  },
  {
    q: "During skin analysis under magnification, you observe multiple yellowish dome-shaped papules with a central pore on a middle-aged client's cheeks. This MOST likely represents:",
    opts: [
      "Closed comedones (milia)",
      "Sebaceous hyperplasia",
      "Basal cell carcinoma",
      "Grade II acne"
    ],
    ans: 1,
    exp: "Sebaceous hyperplasia presents as yellowish, donut-shaped or dome-shaped papules with a central indentation (pore), most common in middle-aged to older adults with oily skin. They are benign enlarged oil glands and outside the esthetician's scope of treatment."
  },
  {
    q: "Which factor would MOST significantly affect the outcome of a superficial chemical peel?",
    opts: [
      "The client's eye color",
      "Current use of topical retinoids at home",
      "The client's preference for fragrance-free products",
      "The ambient humidity in the treatment room"
    ],
    ans: 1,
    exp: "Topical retinoids (retinol, tretinoin) thin the stratum corneum and increase skin sensitivity. Current or recent use can cause over-exfoliation, burns, or prolonged recovery from a chemical peel. This must always be disclosed during consultation."
  },
  {
    q: "A client complains her skin has become 'suddenly sensitive' to products she has used for years. What factor is MOST commonly responsible?",
    opts: [
      "A change in natural skin type from dry to oily",
      "Barrier function disruption from over-exfoliation or harsh products",
      "An increase in melanocyte activity",
      "Reduced sebum production with age"
    ],
    ans: 1,
    exp: "Acquired (sensitized) skin most commonly results from barrier function disruption caused by over-exfoliation, harsh ingredients, or inappropriate products. A compromised barrier allows irritants to penetrate and triggers reactivity."
  },
  {
    q: "When analyzing a client with Fitzpatrick Type VI skin, the treatment concern of GREATEST importance is:",
    opts: [
      "The client will not respond to chemical exfoliants",
      "The client is highly prone to sunburn and UV damage",
      "The client is at increased risk of post-inflammatory hyperpigmentation from any inflammatory trigger",
      "The client's skin cannot tolerate hyaluronic acid-based serums"
    ],
    ans: 2,
    exp: "Fitzpatrick Types V and VI have highly active melanocytes that respond aggressively to inflammation. Any irritating, traumatic, or inflammatory procedure (waxing, aggressive peels, extractions) can trigger PIH, making conservative, gentle approaches essential."
  },
  {
    q: "A client who is three months pregnant inquires about services. Which presents the GREATEST contraindications?",
    opts: [
      "Gentle cleansing facials and hydrating masks",
      "Strong chemical peels, essential oil aromatherapy, and electrical modalities",
      "Brow shaping and tinting",
      "Applying mineral SPF sunscreen"
    ],
    ans: 1,
    exp: "During pregnancy, high-percentage chemical peels risk systemic absorption; many essential oils are contraindicated; electrical modalities (galvanic, high-frequency) may pose risks to the fetus. Gentle, fragrance-free, non-invasive services are recommended; consult physician for specifics."
  },
  {
    q: "What BEST distinguishes a skin 'type' from a skin 'condition'?",
    opts: [
      "Skin type is temporary and changes seasonally; skin conditions are permanent",
      "Skin type is genetically determined and relatively fixed; skin conditions are influenced by internal/external factors and are changeable",
      "Skin type is determined by products used; skin conditions are genetic",
      "There is no meaningful clinical distinction between the two"
    ],
    ans: 1,
    exp: "Skin TYPE is genetically determined and describes the inherent oil-producing tendency (normal, dry, oily, combination). Skin CONDITIONS (dehydration, hyperpigmentation, acne, sensitization) are influenced by environmental, hormonal, and lifestyle factors and can be changed with proper treatment."
  },
  {
    q: "A client presents with symmetrical brownish discoloration on both cheeks that worsened during pregnancy. The esthetician should suspect:",
    opts: [
      "Melasma (chloasma)",
      "Tinea versicolor",
      "Seborrheic keratosis",
      "Vitiligo"
    ],
    ans: 0,
    exp: "Melasma (chloasma) is a hormonally triggered hyperpigmentation disorder that appears symmetrically on the cheeks, forehead, and upper lip. It is strongly associated with pregnancy ('mask of pregnancy'), oral contraceptives, and UV exposure. Referral for physician diagnosis is appropriate."
  },
  {
    q: "You notice a suspicious lesion on a client's cheek — irregular shape, multi-colored, approximately 7mm in diameter. You should:",
    opts: [
      "Perform the facial normally but document the mole's appearance",
      "Apply an enzyme mask and monitor for changes at the next appointment",
      "Inform the client of your observation, avoid treatment on the lesion, and strongly recommend evaluation by a dermatologist",
      "Photograph the lesion for your records and continue service as planned"
    ],
    ans: 2,
    exp: "Any lesion meeting ABCDE criteria (asymmetry, irregular border, multiple colors, diameter >6mm, evolving) must be referred to a dermatologist. Estheticians cannot diagnose skin disease. Documenting concern, avoiding the lesion, and making a referral protects both client and professional."
  },
  {
    q: "A new client has very fair skin, freckles, and always burns with sun exposure but never tans. She would be classified as Fitzpatrick:",
    opts: [
      "Type I — Always burns, never tans",
      "Type II — Burns easily, tans minimally",
      "Type III — Tans well, moderate burn",
      "Type IV — Burns minimally, tans easily"
    ],
    ans: 0,
    exp: "Fitzpatrick Type I is characterized by very fair skin, freckling, always burning, and inability to tan. It has the lowest level of melanin protection and is most susceptible to UV damage and skin cancers."
  },
  {
    q: "A client uses a nightly retinol serum and glycolic acid scrub at home. For a professional facial, the esthetician should MOST likely:",
    opts: [
      "Perform a medium-depth chemical peel to complement her home routine",
      "Perform only gentle, non-exfoliating treatments as her skin barrier may already be stressed",
      "Skip cleansing since the client's skin is already clean",
      "Recommend discontinuing all home care for two weeks before each facial"
    ],
    ans: 1,
    exp: "Combining professional chemical exfoliation with aggressive home retinol/AHA use risks over-exfoliation and barrier disruption. The esthetician should assess the skin condition, choose gentle modalities, and educate the client on balancing home and professional treatments."
  },
  {
    q: "Which condition is CORRECTLY identified as a contraindication to any exfoliating service?",
    opts: [
      "Mild comedonal acne with no active inflammation",
      "Active rosacea with pustules and significant erythema",
      "Post-acne hyperpigmentation without active lesions",
      "Slightly dehydrated skin with surface tightness"
    ],
    ans: 1,
    exp: "Active rosacea with pustules represents an inflamed, reactive state. Exfoliation (mechanical or chemical) would further irritate the vascular and sensitive skin, potentially causing significant flaring. Post-acne marks, mild comedones, and dehydration may benefit from appropriate gentle exfoliation."
  },
  {
    q: "The PRIMARY treatment goal for sensitized skin is to:",
    opts: [
      "Deep exfoliate to remove dead cells causing sensitivity",
      "Strengthen and restore the skin's barrier function through calming, supportive treatments",
      "Reduce sebum production with astringent-based products",
      "Use high-frequency current to increase blood circulation"
    ],
    ans: 1,
    exp: "Sensitized skin has a compromised barrier. The primary treatment goal is to repair and restore barrier function using gentle, fragrance-free, calming formulations — such as ceramides, niacinamide, and soothing botanicals — while avoiding further irritation."
  },
  {
    q: "During consultation, which finding would MOST indicate a physician referral rather than proceeding with a facial treatment?",
    opts: [
      "Comedones on the nose and forehead",
      "Mild hyperpigmentation on the cheeks",
      "A rapidly growing, crusting, and bleeding lesion on the face",
      "Dry patches on the cheeks"
    ],
    ans: 2,
    exp: "A rapidly growing, crusting, or bleeding lesion is a red flag for potential skin cancer. This falls outside the esthetician's scope of practice — a medical referral is mandatory. Comedones and mild hyperpigmentation can be addressed in the esthetics setting."
  },
  {
    q: "A client has oily skin but reports skin 'feels tight and dry' after cleansing. This discrepancy is MOST likely caused by:",
    opts: [
      "Normal oily skin characteristics",
      "Use of an overly stripping cleanser that removes surface lipids and disrupts the acid mantle",
      "High water content causing the oily sheen",
      "An allergic reaction to her current moisturizer"
    ],
    ans: 1,
    exp: "Oily skin can become dehydrated when harsh cleansers strip the lipid layer, triggering more oil production as compensation. 'Oily but tight' after cleansing is a classic sign of a disrupted acid mantle. A balanced, non-stripping cleanser is indicated."
  },
  {
    q: "The Fitzpatrick scale is PRIMARILY used by estheticians to assess:",
    opts: [
      "Acne severity",
      "Risk of inflammatory skin disease",
      "The skin's response to UV exposure — specifically tendency to burn versus tan",
      "The client's appropriate product pH tolerance"
    ],
    ans: 2,
    exp: "The Fitzpatrick scale classifies skin types (I–VI) based on the skin's response to UV exposure. It is an essential tool for selecting appropriate laser settings, peel depths, and UV protection recommendations."
  },

{
    q: "A Fitzpatrick Type IV client is requesting her first chemical peel. The most important risk to discuss is:",
    opts: [
      "The peel will have no effect because darker skin is too thick",
      "Post-inflammatory hyperpigmentation (PIH) — Fitzpatrick Types IV–VI have more active melanocytes that respond to skin trauma by overproducing melanin, potentially causing darkening that is worse than the original concern",
      "Type IV skin cannot use AHA peels",
      "Erythema (redness) is more severe and long-lasting in Type IV skin"
    ],
    ans: 1,
    exp: "Fitzpatrick Type IV (Mediterranean, Hispanic, Asian) skin has more reactive melanocytes. Any inflammatory event — including chemical exfoliation — can trigger PIH, a darkening of the treated area. This is a critical informed consent item. Estheticians should start with the mildest peel option, ensure thorough skin prep (tyrosinase inhibitors, SPF use pre- and post-peel), and select peeling agents with less inflammatory potential for darker skin types."
  },
  {
    q: "During a skin consultation, a client describes her skin as oily with visible pores, frequent blackheads, but rarely any breakouts. This presentation is MOST consistent with:",
    opts: [
      "Acne vulgaris Grade II",
      "Oily skin type with comedonal tendency — not acne, as there are no inflammatory lesions; this skin benefits from regular deep cleansing, BHA exfoliation, and pore-minimizing treatments",
      "Rosacea with sebaceous hyperplasia",
      "Combination skin with normal T-zone and oily cheeks"
    ],
    ans: 1,
    exp: "Open comedones (blackheads) without inflammatory papules, pustules, or cysts indicate a comedonal skin tendency rather than acne. This is a skin condition (excess sebum + congestion) superimposed on the oily skin type. Treatment focuses on regular exfoliation (BHAs like salicylic acid penetrate sebaceous follicles), deep cleansing facials, and retinol home care. True acne requires physician evaluation for medical management."
  },
  {
    q: "The difference between a primary skin lesion and a secondary skin lesion is:",
    opts: [
      "Primary lesions are more serious than secondary lesions",
      "Primary lesions arise from a previously normal skin surface (papules, macules, vesicles); secondary lesions develop from changes to a primary lesion over time (scales, crusts, scars, erosions)",
      "Primary lesions are caused by bacteria; secondary lesions by viruses",
      "Secondary lesions only appear on darker skin types"
    ],
    ans: 1,
    exp: "Primary lesions (macule, papule, vesicle, bulla, pustule, wheal, nodule, cyst) are the initial, direct expression of a skin condition on previously normal skin. Secondary lesions (scale, crust, lichenification, erosion, ulcer, scar, keloid, excoriation) develop from evolution or manipulation of primary lesions. For example, a vesicle that ruptures becomes an erosion (secondary). Understanding this distinction helps estheticians describe and document skin findings accurately."
  },
  {
    q: "A Wood's lamp examination uses ultraviolet light to assess the skin. Hypopigmented areas (vitiligo, pityriasis alba) appear under the Wood's lamp as:",
    opts: [
      "Orange-yellow fluorescence",
      "Bright white or blue-white fluorescence — reflecting more UV due to reduced melanin",
      "Coral-pink fluorescence",
      "Dark or brown areas"
    ],
    ans: 1,
    exp: "Under Wood's lamp (long-wave UV, ~365nm), areas lacking melanin — such as vitiligo patches or post-inflammatory hypopigmentation — reflect UV light strongly, appearing bright white or blue-white. In contrast: oily skin glows orange-yellow, dehydrated skin shows light purple, Propionibacterium acnes fluoresces coral-pink. The Wood's lamp is a consultation tool to identify skin conditions and assess hydration, but findings must be confirmed clinically."
  },
  {
    q: "Telangiectasias observed on the nose and cheeks during a skin analysis are:",
    opts: [
      "A sign of bacterial infection requiring antibiotic referral",
      "Dilated, superficial blood vessels visible through the epidermis — a common finding in rosacea, sun damage, or following aggressive facial treatments; estheticians should use gentle techniques on affected clients",
      "Caused by blocked sebaceous follicles",
      "Normal findings with no clinical significance"
    ],
    ans: 1,
    exp: "Telangiectasias (commonly called 'broken capillaries') are permanently dilated superficial blood vessels visible through the skin. They are associated with Fitzpatrick Types I–III, rosacea, chronic UV exposure, and aggressive extraction or steaming. They cannot be treated by estheticians (laser/IPL is a medical treatment). Estheticians must avoid steaming, heat, harsh massage, and strong active ingredients on affected areas, as these can worsen dilation."
  },
  {
    q: "Combination skin is defined as having:",
    opts: [
      "Both oily skin and acne at the same time",
      "An oily T-zone (forehead, nose, chin) with normal-to-dry skin on the cheeks and temples — due to higher sebaceous gland density in the central face",
      "Normal skin with occasional seasonal dryness",
      "Simultaneously oily and dehydrated skin in the same zones"
    ],
    ans: 1,
    exp: "Combination skin results from the uneven distribution of sebaceous glands across the face. The forehead, nose, and chin (T-zone) have a higher density of sebaceous glands and tend to be oilier; the cheeks and temples have fewer glands. Treatment requires zonal approaches — lighter, more mattifying products on the T-zone and richer, more hydrating products on the drier cheek areas."
  },
  {
    q: "A milia (milium) appears clinically as:",
    opts: [
      "A red, inflamed papule caused by trapped bacteria",
      "A small, white or cream-colored keratin cyst trapped beneath the skin surface — common around the eyes and cheeks, often associated with heavy product use or sun damage",
      "A flat, brown macule from melanin deposits",
      "A large, fluctuant cyst with a central pore"
    ],
    ans: 1,
    exp: "Milia are tiny (1–2mm) keratin-filled cysts that form when dead skin cells are trapped beneath the epidermis rather than shedding normally. They appear white or cream-colored and are firm to the touch. They are not infected. Estheticians can address superficial milia by creating a small opening with a lance (where permitted by state scope of practice) and gently expressing the contents. Regular exfoliation (AHAs, retinol) is the best prevention."
  },
  {
    q: "During the consultation, the client states she has been using a prescription-strength retinoid (tretinoin) for two weeks. This is most relevant because:",
    opts: [
      "Retinoids prevent all peeling treatments from working",
      "Active retinoid use accelerates skin cell turnover and significantly thins the stratum corneum — the skin is more fragile and reactive, making waxing, chemical peels, and aggressive exfoliation contraindicated until the client has been off the medication for an appropriate period",
      "Retinoids are relevant only for clients over 40",
      "The intake form only needs to capture OTC retinol, not prescription retinoids"
    ],
    ans: 1,
    exp: "Prescription retinoids (tretinoin, adapalene at Rx strength, tazarotene) accelerate epidermal turnover and thin the stratum corneum. This significantly increases risk of chemical burns, skin tearing with wax, and prolonged redness from any exfoliating treatment. Most estheticians require clients to pause retinoids for 5–14 days before facial waxing or peeling services and to disclose use on every intake form."
  },
  {
    q: "The purpose of a skin analysis lamp (magnifying loupe or mag lamp) in the esthetics treatment room is:",
    opts: [
      "To disinfect the skin surface with UV light before facial treatments",
      "To provide magnified, bright illumination of the skin surface so the esthetician can identify skin type, visible conditions (comedones, milia, telangiectasias, hyperpigmentation), and assess congestion before designing the treatment plan",
      "To measure skin hydration levels",
      "To perform phototherapy treatments on the skin"
    ],
    ans: 1,
    exp: "The magnifying lamp (usually 5-diopter, with a fluorescent or LED ring light) magnifies the skin surface 5× for detailed visual analysis. It reveals comedone type (open vs. closed), milia, skin texture, vascular irregularities, hyperpigmentation patterns, and follicle size. This analysis directly informs product selection, extraction technique, and treatment modalities. UV/Wood's lamps are a separate tool for fluorescent assessment."
  }
  ],

  // sc
  sc: [
{
    q: "Which is the CORRECT order of steps in a standard professional facial?",
    opts: [
      "Cleanse → Steam → Mask → Massage → Exfoliate → Tone → Moisturize",
      "Consultation → Cleanse → Analyze → Exfoliate → Steam → Extractions → Massage → Mask → Tone → Moisturize → SPF",
      "Steam → Cleanse → Mask → Exfoliate → Massage → Tone → Moisturize",
      "Cleanse → Exfoliate → Mask → Steam → Extractions → Massage → Tone → Moisturize"
    ],
    ans: 1,
    exp: "The standard facial sequence: consult, cleanse, analyze under magnification, exfoliate to prep, steam/warm towels to soften follicles, extractions if needed, massage for circulation, mask for specific concerns, tone, moisturize, SPF. Each step builds on the last for optimal results."
  },
  {
    q: "AHAs (alpha-hydroxy acids) such as glycolic acid work primarily by:",
    opts: [
      "Physically scrubbing dead cells from the skin's surface",
      "Decreasing sebum production in the follicle",
      "Loosening the bonds between corneocytes in the stratum corneum to promote chemical exfoliation",
      "Penetrating the dermis to stimulate fibroblast collagen production"
    ],
    ans: 2,
    exp: "AHAs are water-soluble chemical exfoliants that break down the cohesive forces (desmosomes) between dead skin cells (corneocytes) in the stratum corneum. They do not physically scrub skin. They also increase surface hydration by improving NMF levels."
  },
  {
    q: "Salicylic acid (BHA) has a therapeutic advantage over glycolic acid (AHA) for acne-prone skin because:",
    opts: [
      "BHA is stronger and more irritating, producing faster results",
      "BHA is oil-soluble and can penetrate the sebaceous follicle to exfoliate inside the pore",
      "BHA increases melanin production to reduce acne scarring",
      "BHA requires a lower pH than AHAs to achieve similar results"
    ],
    ans: 1,
    exp: "Salicylic acid is lipid (oil)-soluble, which allows it to penetrate into the oil-filled sebaceous follicle and exfoliate the follicle lining from the inside. This makes it especially effective for comedonal and acne-prone skin. AHAs are water-soluble and work primarily on the surface."
  },
  {
    q: "A client with very dry, mature skin asks about mask options. Which mask type would MOST benefit this client?",
    opts: [
      "Sulfur mask to control sebum",
      "Clay (kaolin) mask to absorb excess oil",
      "Cream or hydrogel mask rich in humectants and emollients",
      "Charcoal detox mask to clear impurities"
    ],
    ans: 2,
    exp: "Dry, mature skin lacks lipids and moisture. Cream or hydrogel masks with humectants (hyaluronic acid, glycerin) and emollients provide moisture and lipid replenishment. Clay and charcoal masks are absorptive and best for oily skin. Sulfur is used primarily for acne."
  },
  {
    q: "In facial massage, effleurage is PRIMARILY used to:",
    opts: [
      "Break up subcutaneous fat deposits",
      "Apply deep pressure to stimulate deep nerves",
      "Begin and end massage sequences with light, soothing gliding strokes",
      "Create friction-induced erythema to boost circulation"
    ],
    ans: 2,
    exp: "Effleurage consists of long, gentle, gliding strokes that introduce the massage, relax the client, improve lymphatic flow, and serve as transitional and closing movements. Petrissage provides kneading; tapotement involves percussive movements; friction provides deep circular pressure."
  },
  {
    q: "High-frequency current in esthetic treatments is used primarily to:",
    opts: [
      "Reduce melanin production in hyperpigmented areas",
      "Generate a germicidal ozone effect and heat to help treat acne-prone skin",
      "Deeply stimulate fibroblasts to produce new collagen in the dermis",
      "Perform iontophoresis to drive water-soluble products deeper"
    ],
    ans: 1,
    exp: "High-frequency machines produce alternating current that generates heat and ozone (with violet/neon electrode) with a germicidal effect, making them effective for acne-prone skin. It is NOT used for deep collagen stimulation or iontophoresis."
  },
  {
    q: "Kojic acid is classified as which type of skin care ingredient?",
    opts: [
      "Humectant",
      "Emollient",
      "Tyrosinase inhibitor (skin brightening/depigmentation agent)",
      "AHA chemical exfoliant"
    ],
    ans: 2,
    exp: "Kojic acid is a natural compound derived from fungi that inhibits tyrosinase, the enzyme responsible for melanin synthesis. It is used to treat hyperpigmentation, melasma, and uneven skin tone. It is not a humectant, emollient, or exfoliant."
  },
  {
    q: "Which of the following is a physical (mineral) sunscreen active?",
    opts: [
      "Octinoxate",
      "Avobenzone",
      "Zinc oxide",
      "Homosalate"
    ],
    ans: 2,
    exp: "Zinc oxide (and titanium dioxide) are physical sunscreen actives that reflect and scatter UV radiation. Octinoxate, avobenzone, and homosalate are chemical UV filters that absorb UV energy and convert it to heat. Physical sunscreens are often preferred for sensitive and post-procedure skin."
  },
  {
    q: "Post-cleanse tightness and discomfort are MOST likely caused by:",
    opts: [
      "Normal characteristics of healthy skin",
      "The cleanser disrupting the skin's acid mantle and stripping surface lipids",
      "Excess dead skin cells blocking product absorption",
      "Systemic dehydration from insufficient water intake that day"
    ],
    ans: 1,
    exp: "Tightness after cleansing typically indicates the cleanser was too alkaline or harsh, stripping the skin's natural oils and disrupting the acid mantle (pH ~4.5–5.5). A gentle, pH-balanced cleanser is the solution."
  },
  {
    q: "The SAFEST exfoliating option for a client with active Stage 2 rosacea (papules and pustules) is:",
    opts: [
      "Glycolic acid 20% chemical peel",
      "Physical microdermabrasion",
      "A gentle enzyme exfoliant (papaya or pineapple) at low concentration",
      "Salicylic acid 30% chemical peel"
    ],
    ans: 2,
    exp: "Active rosacea with pustules requires the most minimal approach. Gentle enzyme exfoliants at low concentration generate minimal heat and inflammation. High-percentage acid peels and abrasive microdermabrasion are contraindicated during active rosacea flares."
  },
  {
    q: "Toner is applied in a facial treatment primarily to:",
    opts: [
      "Add heavy moisturizing lipids back to the skin",
      "Remove remaining cleanser residue, restore pH balance, and prepare the skin for subsequent products",
      "Disinfect the skin before treatment",
      "Create an occlusive protective barrier before massage"
    ],
    ans: 1,
    exp: "Toner removes remaining cleanser residue, helps restore the skin's natural acid mantle pH (~4.5–5.5), and primes the skin to absorb serums and treatments more effectively. Modern toners also deliver hydrating or calming ingredients."
  },
  {
    q: "A serum is applied in the facial sequence:",
    opts: [
      "Before cleansing to protect the skin",
      "After toner and before moisturizer, as the thinnest-consistency treatment product",
      "After moisturizer to seal active ingredients into the skin",
      "After the mask and before toner"
    ],
    ans: 1,
    exp: "Serums are low-molecular-weight, active-ingredient-concentrated formulations applied after toner and before moisturizer. Their thinner consistency allows deeper penetration. Moisturizer is then applied on top to seal in both moisture and the serum's actives."
  },
  {
    q: "For post-inflammatory hyperpigmentation (PIH) on the chin, which ingredient combination is MOST effective?",
    opts: [
      "Sulfur and benzoyl peroxide",
      "Retinoids, vitamin C, and broad-spectrum SPF",
      "Hyaluronic acid and ceramides",
      "Tea tree oil and salicylic acid"
    ],
    ans: 1,
    exp: "Retinoids accelerate cell turnover, vitamin C inhibits tyrosinase and brightens pigmentation, and SPF prevents UV from darkening existing marks. This trio is the gold-standard approach for post-inflammatory hyperpigmentation management."
  },

{
    q: "A glycolic acid peel at 30% concentration and pH 3.0 is considered which peel depth?",
    opts: [
      "Superficial — appropriate for licensed esthetician administration",
      "Medium-depth — requires physician supervision",
      "Deep — equivalent to phenol concentration",
      "An enzyme peel — has no acid activity"
    ],
    ans: 0,
    exp: "Superficial peels work within the epidermis and uppermost dermis. Glycolic acid at concentrations up to 30–35% at pH 3.0 is within the superficial category and may be performed by licensed estheticians in California. Medium-depth peels (TCA 35–50%) and deep peels (phenol) require physician supervision."
  },
  {
    q: "Microdermabrasion is BEST described as:",
    opts: [
      "A chemical exfoliation using TCA crystals",
      "A mechanical exfoliation that removes the outermost stratum corneum using abrasive crystals or a diamond tip",
      "A light-based therapy targeting dermal collagen",
      "A technique using electric current to stimulate muscle contractions"
    ],
    ans: 1,
    exp: "Microdermabrasion uses a mechanical abrasion system — either aluminum oxide crystals or a diamond-tipped wand — to physically remove the superficial stratum corneum. It improves texture, mild scarring, and hyperpigmentation. It is contraindicated in active rosacea, open wounds, and active acne lesions."
  },
  {
    q: "LED therapy using BLUE light (approximately 415nm) is primarily used to treat:",
    opts: [
      "Deep wrinkles and collagen loss",
      "Hyperpigmentation and melasma",
      "Acne vulgaris by targeting Propionibacterium acnes bacteria",
      "Rosacea by reducing vascular inflammation"
    ],
    ans: 2,
    exp: "Blue LED light (~415nm) activates porphyrins produced by P. acnes, generating oxygen free radicals that destroy the bacteria. It is an effective, non-invasive tool for mild to moderate acne. Red LED (~630nm) stimulates fibroblasts for anti-aging; near-infrared penetrates deeper for inflammation."
  },

{
    q: "AHA (alpha-hydroxy acid) exfoliants such as glycolic and lactic acid work primarily by:",
    opts: [
      "Physically scrubbing the stratum corneum with abrasive particles",
      "Dissolving the desmosomal bonds (intercellular cohesion) between corneocytes in the stratum corneum, accelerating their shedding and revealing smoother skin beneath",
      "Killing acne bacteria in the follicle",
      "Penetrating to the dermis to stimulate collagen directly"
    ],
    ans: 1,
    exp: "AHAs work as chemical exfoliants by disrupting the bonds holding dead stratum corneum cells together (corneodesmosomes), accelerating natural desquamation. This reveals newer, smoother cells beneath and improves skin texture, fine lines, and mild hyperpigmentation. AHAs are water-soluble and work on the skin surface; BHAs (like salicylic acid) are lipid-soluble and penetrate sebaceous follicles, making BHAs superior for acne."
  },
  {
    q: "The Fitzpatrick skin type most susceptible to post-peel complications such as prolonged redness and post-inflammatory hyperpigmentation is:",
    opts: [
      "Fitzpatrick Type I (very fair, always burns)",
      "Fitzpatrick Types IV–VI (medium brown to dark brown/black skin) due to more reactive melanocytes that produce excess melanin in response to inflammation",
      "All Fitzpatrick types respond identically to chemical peels",
      "Fitzpatrick Type II (fair skin, burns easily, tans minimally)"
    ],
    ans: 1,
    exp: "Darker skin tones (Fitzpatrick IV–VI) have melanocytes that are more reactive to inflammatory stimuli. Chemical peel-induced inflammation can trigger PIH — darkening of the treated area that can persist for months. These clients require pre-conditioning with melanin-inhibiting agents (arbutin, kojic acid, azelaic acid, niacinamide), the mildest peel options, and aggressive UV protection post-procedure. PIH in darker skin tones can be more disfiguring than the original concern."
  },
  {
    q: "Comedone extraction should NOT be performed when:",
    opts: [
      "The client has oily skin and multiple open comedones",
      "When there is active cystic acne (Grade IV), inflamed nodules, or when the skin is not properly prepared with softening steam or enzyme treatment",
      "The client has combination skin",
      "A client has mild blackheads in the T-zone"
    ],
    ans: 1,
    exp: "Extraction is indicated for open comedones (blackheads) and some closed comedones when the skin is properly softened. It is contraindicated when there are deep, inflamed cysts or nodules — applying pressure to these can rupture the follicle wall internally, spreading bacteria into the dermis and worsening inflammation significantly. Grade III–IV cystic acne should be referred to a dermatologist for medical management (oral or topical antibiotics, isotretinoin)."
  },
  {
    q: "A galvanic facial current using the desincrustation (saponification) technique is designed to:",
    opts: [
      "Stimulate muscle tone using alternating current",
      "Use a negative polarity DC current to soften and emulsify sebum and debris in the follicle, preparing congested skin for easier extraction",
      "Drive water-soluble active ingredients deeper into the skin",
      "Stimulate collagen synthesis in the dermis"
    ],
    ans: 1,
    exp: "Desincrustation uses direct (galvanic) current at negative polarity. The negatively-charged current, combined with an alkaline solution, creates a saponification reaction that liquefies hardened sebum and cellular debris inside the follicle. This is performed before extractions on congested skin to soften the contents and make removal easier and less traumatic. Iontophoresis (positive polarity) is used to drive water-soluble actives into the skin — the opposite goal."
  },
  {
    q: "A client with sensitive, reactive skin presents with redness and stinging after using a facial cleanser. The esthetician should recommend:",
    opts: [
      "A high-foaming, gel cleanser with sodium lauryl sulfate for thorough cleansing",
      "A gentle, fragrance-free, low-surfactant cleanser (micellar water, cream, or oil-based cleanser) that respects the skin barrier and avoids common sensitizing ingredients",
      "A foaming AHA cleanser to help normalize the skin over time",
      "An alcohol-based toner following the cleanser to close pores"
    ],
    ans: 1,
    exp: "Sensitive skin has a compromised or thin stratum corneum barrier, making it reactive to surfactants, fragrances, and actives. Sodium lauryl sulfate (SLS) strips the skin's natural lipid barrier and is a common sensitizer. Alcohol-based toners further strip moisture. Gentle cleansers (micellar, oil-based, cream) maintain barrier integrity. Home care recommendations should always be matched to the client's skin type and condition."
  },
  {
    q: "Hyaluronic acid (HA) is a popular ingredient in hydrating serums and masks. Its primary mechanism in skin care is:",
    opts: [
      "It exfoliates the stratum corneum to improve hydration",
      "It is a glycosaminoglycan humectant that attracts and holds up to 1,000 times its weight in water in the stratum corneum, providing immediate surface hydration",
      "It stimulates new collagen synthesis in the reticular dermis",
      "It inhibits melanin production for skin brightening"
    ],
    ans: 1,
    exp: "Hyaluronic acid (HA) is a naturally occurring glycosaminoglycan in the skin's dermis and epidermis. In topical form, high-molecular-weight HA primarily hydrates the skin surface by drawing moisture from the environment or the lower skin layers into the stratum corneum. Lower-molecular-weight HA penetrates more deeply. HA is non-comedogenic, fragrance-free, and appropriate for all skin types. It does not directly stimulate collagen (that would be retinoids, vitamin C, or peptides)."
  },
  {
    q: "Niacinamide (vitamin B3) is valued as a skin care ingredient because of its ability to:",
    opts: [
      "Physically exfoliate the stratum corneum",
      "Inhibit the transfer of melanosomes from melanocytes to keratinocytes (reducing visible pigmentation), strengthen the barrier, reduce sebum production, and improve the appearance of enlarged pores — with excellent tolerance across skin types",
      "Provide deep UV protection equivalent to SPF 30",
      "Dissolve comedones through lipid-soluble penetration"
    ],
    ans: 1,
    exp: "Niacinamide (nicotinamide) is a multifunctional active ingredient. It inhibits melanosome transfer (reducing hyperpigmentation), up-regulates ceramide production (strengthening the barrier), reduces transepidermal water loss, decreases sebum production, and has mild anti-inflammatory properties for acne-prone skin. Its tolerability (even in sensitive skin) and multitasking ability make it one of the most widely recommended ingredients in professional skin care."
  },
  {
    q: "During a facial, the esthetician applies a clay mask to the client's face. Clay masks primarily benefit the skin by:",
    opts: [
      "Adding intensive moisture to dehydrated skin",
      "Absorbing excess sebum and surface impurities through their porous mineral structure, which tightens the appearance of pores temporarily as they dry",
      "Stimulating collagen synthesis in the dermis through heat activation",
      "Providing a physical barrier to prevent TEWL during the treatment"
    ],
    ans: 1,
    exp: "Clay minerals (kaolin, bentonite, Fuller's earth) have a porous structure with a strong negative charge that adsorbs positively charged sebum, toxins, and surface impurities. As the mask dries, it causes a temporary constriction sensation and absorbs surface oil. Clay masks are ideal for oily and combination skin. They are NOT appropriate for dry or sensitive skin as they can over-strip natural oils and worsen barrier dysfunction."
  },
  {
    q: "The primary purpose of using facial steaming (warm vapour) before extractions is to:",
    opts: [
      "Disinfect the skin surface using the heat of the steam",
      "Hydrate and soften the stratum corneum and follicular contents, making extraction of comedones easier and less traumatic",
      "Open blood vessels to increase nutrient delivery during the treatment",
      "Remove makeup and surface oils through emulsification"
    ],
    ans: 1,
    exp: "Warm steam softens the stratum corneum and the solidified sebum plugging comedones, making extractions more effective and reducing skin trauma. It also provides mild vasodilation that enhances subsequent product penetration. Steam is contraindicated for Couperose/rosacea-prone skin (heat worsens redness), active inflammatory acne, and very sensitive skin. Ozone steam also has mild germicidal properties, but its main benefit is the warmth and moisture."
  },
  {
    q: "A 'vampire facial' or microneedling service is:",
    opts: [
      "Within the esthetician's scope of practice in all California settings",
      "Outside the standard esthetician scope of practice in California — it involves breaking the dermal barrier and is classified as a medical procedure requiring physician supervision or performance by a licensed medical professional",
      "Permitted for licensed estheticians who have completed a 4-hour certification",
      "The same as microdermabrasion and is routinely performed in spas"
    ],
    ans: 1,
    exp: "Microneedling (collagen induction therapy) uses a device to create micro-injuries in the dermis to stimulate wound healing and collagen. Because it penetrates below the epidermis into the dermis, it constitutes a medical procedure in California and is outside the esthetician scope of practice. Services like microdermabrasion (removes stratum corneum only) and superficial chemical peels ARE within esthetician scope. Performing out-of-scope services is illegal and creates significant liability."
  },
  {
    q: "Which professional facial treatment is MOST appropriate for a client with Grade I–II acne (non-cystic, primarily comedonal and mild inflammatory)?",
    opts: [
      "A deep TCA chemical peel at 30% concentration",
      "A salicylic acid (BHA) facial with steam and gentle comedone extraction, followed by a calming mask and SPF",
      "A rich hydrating oil-based facial to rebalance the skin",
      "Microcurrent treatment to improve muscle tone"
    ],
    ans: 1,
    exp: "For mild-to-moderate acne, a BHA (salicylic acid) treatment is ideal because salicylic acid is lipid-soluble and can penetrate the sebaceous follicle to dissolve sebum and reduce Propionibacterium acnes colonization. Steam softens follicular contents for safer extraction, and a calming mask reduces post-extraction inflammation. A deep TCA peel is medical-grade and not appropriate for active acne. Oil-based products are comedogenic. Microcurrent does not address acne."
  },
  {
    q: "Enzyme exfoliation products in esthetics typically contain:",
    opts: [
      "Aluminum oxide crystals that physically abrade the stratum corneum",
      "Plant-derived proteolytic enzymes (papain from papaya, bromelain from pineapple, pumpkin enzyme) that digest the keratinized proteins of dead skin cells — providing gentle chemical exfoliation",
      "Synthetic AHA acids at high concentrations",
      "Benzoyl peroxide as the active exfoliant"
    ],
    ans: 1,
    exp: "Enzyme exfoliants use proteolytic (protein-digesting) enzymes that selectively digest the keratin in dead skin cells without affecting living tissue. This makes them gentler than acid peels and appropriate for sensitive skin, rosacea-prone skin, and clients who cannot tolerate acid exfoliation. Papain (papaya) and bromelain (pineapple) are the most commonly used. Processing time, heat, and moisture activate enzymatic activity — hence enzyme masks are often applied with steam."
  }
  ],

  // hr
  hr: [
{
    q: "Which hair growth phase is MOST effective for laser or IPL hair removal?",
    opts: [
      "Telogen (resting phase)",
      "Catagen (transitional phase)",
      "Anagen (active growth phase)",
      "Exogen (shedding phase)"
    ],
    ans: 2,
    exp: "Laser and IPL are most effective during the anagen (active growth) phase because the hair shaft is fully connected to the melanin-rich dermal papilla. Multiple sessions are needed because not all follicles are in anagen simultaneously."
  },
  {
    q: "The main active ingredients in chemical depilatories that break down hair are:",
    opts: [
      "Hydrogen peroxide",
      "Calcium thioglycolate or sodium hydroxide (alkaline chemicals)",
      "Lanthionine",
      "Ammonium persulfate"
    ],
    ans: 1,
    exp: "Chemical depilatories use alkaline chemicals — typically calcium thioglycolate, sodium hydroxide, or potassium hydroxide — to break the disulfide bonds in the hair's keratin structure, dissolving the hair at or slightly below the skin surface."
  },
  {
    q: "The minimum hair length recommended for effective soft wax removal is:",
    opts: [
      "1 mm",
      "1/4 inch (approximately 6mm)",
      "1/2 inch (12mm)",
      "1 inch (25mm)"
    ],
    ans: 1,
    exp: "For soft wax to grip hair effectively, hair should be at least 1/4 inch (approximately 6mm) long. Shorter hair does not give the wax enough surface area to adhere. Sugaring can work on slightly shorter hair (1/16 to 1/8 inch)."
  },
  {
    q: "Hard wax differs from soft wax primarily in that hard wax:",
    opts: [
      "Requires a muslin strip to remove",
      "Must be applied over powder to prevent sticking to skin",
      "Adheres to the hair rather than the skin and is removed without a strip",
      "Requires a higher temperature than soft wax for all hair types"
    ],
    ans: 2,
    exp: "Hard wax wraps around the hair shaft as it hardens and is removed by gripping and pulling the wax itself — no strip needed. This makes it gentler on sensitive areas (bikini, underarms, face). Soft wax adheres to both skin and hair and requires a strip."
  },
  {
    q: "Which condition is an ABSOLUTE contraindication to waxing in the affected area?",
    opts: [
      "Ingrown hairs with no sign of infection",
      "Active eczema with broken, weeping skin",
      "Dry skin that was exfoliated 24 hours prior",
      "Mild hyperpigmentation from previous waxing"
    ],
    ans: 1,
    exp: "Active eczema with broken, weeping skin is an absolute contraindication: waxing causes severe trauma, greatly increases infection risk, and can spread the condition. Intact ingrown hairs, dry skin, and mild PIH are relative concerns, not absolute contraindications."
  },
  {
    q: "A client using topical tretinoin on her upper lip requests a lip wax. The esthetician should:",
    opts: [
      "Proceed normally since it is a small area",
      "Use hard wax only, as it is gentler",
      "Decline to wax the tretinoin-treated area because the skin is thinned and may tear (skin lifting)",
      "Apply hydrocortisone cream first to protect the skin"
    ],
    ans: 2,
    exp: "Topical retinoids thin the stratum corneum, making skin highly fragile. Waxing retinoid-treated skin frequently causes 'skin lifting' — painful removal of the epidermis. Most protocols require stopping retinoid use 5–7 days before waxing the treated area."
  },
  {
    q: "Which method of electrolysis utilizes alternating current to create heat that destroys the hair follicle?",
    opts: [
      "Galvanic electrolysis",
      "Thermolysis (shortwave/diathermy)",
      "Blend method",
      "IPL (intense pulsed light)"
    ],
    ans: 1,
    exp: "Thermolysis uses high-frequency alternating current to generate heat that destroys the follicle. Galvanic electrolysis uses direct current to create lye (sodium hydroxide) that chemically destroys the follicle. The blend method combines both. IPL uses light energy, not electrical current."
  },
  {
    q: "The primary safety concern when performing laser hair removal on Fitzpatrick V–VI skin tones is:",
    opts: [
      "The laser will not penetrate deeply enough to reach the follicle",
      "Competing epidermal melanin absorption can cause burns, scarring, or hypopigmentation",
      "Darker skin is immune to laser effects due to melanin",
      "These skin types have fewer hair follicles and will not respond to treatment"
    ],
    ans: 1,
    exp: "In darker skin, epidermal melanin competes with follicular melanin for laser absorption, increasing the risk of burns, blistering, and hypopigmentation. Nd:YAG 1064nm lasers with longer wavelengths and pulse durations are preferred for Fitzpatrick V–VI skin."
  },
  {
    q: "Traditional hand-applied sugar paste is removed in which direction relative to hair growth?",
    opts: [
      "In the direction of hair growth",
      "Against the direction of hair growth",
      "At a 90-degree angle to hair growth",
      "Direction does not matter with sugaring"
    ],
    ans: 0,
    exp: "Traditional hand-applied sugar paste is applied against hair growth and removed in the direction of hair growth — opposite to the soft wax technique. Removing in the direction of growth reduces breakage and follicle trauma and is gentler on the skin."
  },
  {
    q: "Hirsutism is BEST defined as:",
    opts: [
      "Excessive hair growth in both men and women caused by genetics",
      "Any unwanted hair growth regardless of location",
      "Androgen-dependent excessive terminal hair growth in women in a male-pattern distribution",
      "Excessive hair growth caused by medications or systemic illness"
    ],
    ans: 2,
    exp: "Hirsutism is excessive growth of coarse terminal hair in women in androgen-dependent areas (chin, upper lip, chest, abdomen), most commonly caused by PCOS. Hypertrichosis is generalized excess hair growth from genetics or non-hormonal factors."
  },
  {
    q: "Appropriate post-wax care recommendations include:",
    opts: [
      "Apply heavy moisturizer immediately and expose the area to sunlight",
      "Apply soothing aloe vera or azulene products; avoid heat, sun, and tight clothing for 24 hours",
      "Exfoliate the area immediately to prevent ingrown hairs",
      "Re-wax in 48 hours to remove remaining hairs"
    ],
    ans: 1,
    exp: "Mild redness and swelling are normal post-wax responses. Soothing products (aloe, azulene) calm the skin. Clients should avoid heat (hot showers, saunas), UV, tight clothing, and re-waxing for at least 24–48 hours to allow the skin to recover and prevent folliculitis."
  },
  {
    q: "Threading is BEST described as:",
    opts: [
      "A method using fine metallic threads that cut hair at the surface",
      "A temporary hair removal method using a twisted thread to trap and pull hairs from the follicle",
      "A permanent hair removal technique using electrical current",
      "A chemical method that dissolves hair at the surface"
    ],
    ans: 1,
    exp: "Threading (also called banding) uses a twisted cotton thread rolled across the skin to catch and extract multiple hairs from the follicle. It is temporary, chemical-free, and best suited for eyebrows and fine facial hair."
  },

{
    q: "Threading (khite) as a hair removal technique differs from waxing because:",
    opts: [
      "Threading uses chemicals to dissolve hair at the follicle",
      "Threading removes hair by looping a twisted thread around individual hairs and pulling them from the follicle — no heat or chemicals are involved, making it appropriate for clients on retinoids or those with skin contraindicated for wax",
      "Threading only trims hair rather than removing it from the follicle",
      "Threading is a permanent hair removal method"
    ],
    ans: 1,
    exp: "Threading is a mechanical hair removal technique using a looped, twisted cotton thread to capture and epilate individual hairs. Because it involves no chemicals or heat, it is safe for clients on retinoids (Accutane, tretinoin), those with thin/sensitive skin, or clients prone to wax-induced hyperpigmentation. Results last as long as waxing (3–4 weeks) as hair is removed from the follicle, not just cut."
  },
  {
    q: "The correct temperature for soft (strip) wax during an application is:",
    opts: [
      "Exactly 98.6°F (body temperature) to prevent burning",
      "Approximately 100–110°F — warm enough to spread smoothly and thin, but cool enough to not burn the skin; always test on the wrist before applying to a client",
      "As hot as possible to open the follicles more effectively",
      "Temperature does not matter for soft wax — only consistency matters"
    ],
    ans: 1,
    exp: "Soft (strip) wax should be applied at approximately 100–110°F. At this temperature, it is fluid enough to spread in a thin layer with an applicator stick. Wax that is too hot will burn the skin; wax that is too cool is too thick to spread and may not adhere properly. The wrist test (esthetician applies a small amount to their inner wrist) is performed before every client application to verify temperature."
  },
  {
    q: "Hard wax (non-strip wax) is preferred over soft (strip) wax for facial waxing because:",
    opts: [
      "Hard wax is applied with strips, providing more control",
      "Hard wax shrinks around the hair as it cools and adheres primarily to the hair rather than the skin surface — reducing skin trauma, lifting, and irritation on sensitive facial areas",
      "Hard wax works at a lower temperature than soft wax",
      "Hard wax contains added conditioning agents that permanently prevent regrowth"
    ],
    ans: 1,
    exp: "Hard wax is applied in a thicker layer and allowed to cool into a flexible solid. As it cools, it contracts slightly and grips the hair shaft. When removed, it releases more cleanly from the skin than soft wax, reducing skin abrasion and the risk of skin lifting — particularly important on the sensitive upper lip, chin, and bikini areas. For this reason, hard wax is preferred for sensitive areas and fragile skin."
  },
  {
    q: "A client has a history of herpes simplex labialis (cold sores). Before facial waxing of the lip area, the esthetician should:",
    opts: [
      "Proceed with waxing — herpes is only relevant to facials, not waxing",
      "Advise the client to consult with her physician about pre-treating with antiviral medication before waxing, as the trauma of waxing can trigger an HSV outbreak",
      "Apply more wax in a single pass to minimize the number of skin disturbances",
      "Use cold wax only, which does not trigger outbreaks"
    ],
    ans: 1,
    exp: "The trauma, friction, and heat of waxing the lip area can trigger a herpes simplex outbreak in clients with a known history of cold sores. Many physicians prescribe prophylactic antivirals (valacyclovir, acyclovir) to take before the appointment. The esthetician should ask about HSV history on the intake form, educate the client, and recommend they discuss prophylaxis with their doctor. During any active outbreak, waxing must be refused."
  },
  {
    q: "When performing eyebrow waxing, the 'one-pass rule' means:",
    opts: [
      "Only one client can be waxed per hour",
      "Wax should be applied only once to any given area — re-waxing over the same spot removes additional layers of skin with each pass, significantly increasing the risk of skin lifting, burns, and bruising",
      "The wax strip is removed in one continuous direction",
      "Only one layer of wax may be applied to the entire face per session"
    ],
    ans: 1,
    exp: "The one-pass rule is a fundamental waxing safety principle: no area should be waxed more than once per session. Wax adheres to the stratum corneum; the first application removes some of that superficial layer along with the hair. A second pass over the same area removes even more skin, dramatically increasing the risk of abrasion, lifting, burns, and post-inflammatory hyperpigmentation. If hairs remain after one pass, tweezers should be used for stragglers."
  },
  {
    q: "An ingrown hair (pseudofolliculitis) most commonly occurs after waxing in clients with:",
    opts: [
      "Fine, straight hair in all areas",
      "Tightly curled or coily hair — as the hair regrows, the curved shaft is prone to re-entering the skin rather than growing straight out of the follicle, causing a foreign-body inflammatory response",
      "Very sparse hair growth",
      "High-porosity hair"
    ],
    ans: 1,
    exp: "Pseudofolliculitis (ingrown hairs) is significantly more common in individuals with naturally curly or coily hair because the curved follicle directs regrowth back into the skin. This is especially prevalent in the bikini and beard areas. Prevention strategies include regular exfoliation (AHAs, BHAs between waxing sessions), moisturizing, and using hair-release serums. Clients prone to ingrowns should be counseled during the consultation."
  },
  {
    q: "Permanent hair reduction (laser hair removal and IPL) is:",
    opts: [
      "Permitted for licensed estheticians in California without restriction",
      "In California, classified as a medical procedure requiring physician supervision; estheticians cannot legally perform laser hair removal unless under specific medical delegation in a supervised medical setting",
      "The same as electrolysis and may be performed by any licensed esthetician",
      "Legal for estheticians who complete a 1-day laser safety certification"
    ],
    ans: 1,
    exp: "In California, laser hair removal is regulated as a medical procedure under the Medical Practice Act. It may only be performed by physicians, registered nurses, or trained personnel operating under the direct supervision of a licensed physician. Estheticians may not perform laser or IPL hair removal independently in a standard salon or spa setting. This is a critical scope-of-practice distinction tested on the state board."
  },
  {
    q: "Which of the following is an absolute contraindication to waxing?",
    opts: [
      "Client has not used lotion on the area being waxed",
      "Client has moles in the area — a mole should not be waxed over as the wax can traumatize the mole tissue, potentially causing irritation and making visual changes harder to detect",
      "Client has slightly dry skin",
      "Client shaved 10 days ago"
    ],
    ans: 1,
    exp: "Waxing over moles can abrade or lift the mole tissue, cause irritation or bleeding, and interfere with skin cancer self-examination. When performing waxing services, estheticians should identify all moles in the treatment area and carefully wax around them. Changes in a mole (ABCDE criteria) should be noted to the client. Other absolute contraindications to waxing include: isotretinoin use, active inflammation or infection, recent resurfacing treatments, and open wounds."
  },
  {
    q: "After a waxing service, post-wax care instructions should include telling the client to:",
    opts: [
      "Exfoliate the area immediately after the service to prevent ingrown hairs",
      "Avoid heat (sun exposure, hot tubs, saunas, exercise causing sweating) for 24–48 hours, apply soothing post-wax oil or lotion to the area, and avoid tight clothing on the waxed area",
      "Apply sunscreen with SPF 15 or higher immediately post-wax to all areas",
      "Return for a waxing service in exactly one week to maintain results"
    ],
    ans: 1,
    exp: "After waxing, the follicle is open and the skin is temporarily sensitized. Heat exposure (sun, hot tubs, heavy exercise) in the first 24–48 hours can cause folliculitis, increased redness, hyperpigmentation, or sweating-induced bacterial infection. Tight clothing can cause friction and folliculitis. Exfoliation should wait 48–72 hours post-wax. SPF should be applied if the area will be sun-exposed, but it is not done immediately post-wax before the skin settles."
  }
  ],

  // ee
  ee: [
{
    q: "Before applying lash or brow tint, what ESSENTIAL safety step must always be performed?",
    opts: [
      "A strand test to assess color uptake",
      "A patch test 24–48 hours in advance to check for allergic sensitivity",
      "A scalp assessment to evaluate hair health",
      "A Fitzpatrick assessment to determine the appropriate tint shade"
    ],
    ans: 1,
    exp: "Lash and brow tints contain oxidative dye chemicals that can cause severe allergic reactions, including anaphylaxis. A patch test applied 24–48 hours before service is mandatory. Sensitivity to dyes can develop at any time, even after years of previous use without reaction."
  },
  {
    q: "A client scheduled for lash tinting is wearing soft contact lenses. What should the esthetician do?",
    opts: [
      "Proceed normally, as contacts protect the eyes from tint",
      "Ask the client to remove contacts before the service, as tinting chemicals can damage them and leach into the eye",
      "Apply tint only to the outer lashes to avoid the lens area",
      "Use a weaker tint concentration to minimize risk"
    ],
    ans: 1,
    exp: "Soft contact lenses are porous and can absorb tinting chemicals, which can then cause chemical injury to the eye. Clients must remove contacts before any lash or brow tinting service. Protective eye pads must also be used."
  },
  {
    q: "When shaping eyebrows, the correct arch placement is determined by:",
    opts: [
      "Personal preference of the esthetician",
      "A line drawn upward from the outer edge of the iris to determine the highest point of the arch",
      "Measuring exactly 1 inch from the center of the brow",
      "Placing the arch directly above the outer corner of the eye"
    ],
    ans: 1,
    exp: "Classic brow mapping: the inner brow aligns with the outer nostril; the arch falls above the outer iris edge; the tail ends at a diagonal from the nostril through the outer corner of the eye. These are starting guidelines; brow shape is ultimately customized to the client's face."
  },
  {
    q: "Which is a CONTRAINDICATION to lash extension application?",
    opts: [
      "Having naturally sparse lashes",
      "Active conjunctivitis (pink eye) in one or both eyes",
      "Having Fitzpatrick Type III skin",
      "Wearing mascara daily"
    ],
    ans: 1,
    exp: "Active conjunctivitis is a contraindication: the eye tissue is inflamed and compromised, and applying adhesive chemicals near an infected eye worsens the condition and risks spreading infection. Service must be declined until fully resolved."
  },
  {
    q: "The PRIMARY chemical in eyelash extension adhesive that can cause allergic reactions is:",
    opts: [
      "Formaldehyde",
      "Cyanoacrylate",
      "Hydrogen peroxide",
      "Para-phenylenediamine (PPD)"
    ],
    ans: 1,
    exp: "Cyanoacrylate is the main bonding agent in lash extension adhesives. It can cause allergic contact reactions — particularly to the eyelids and surrounding skin. Sensitivity can develop over time even in clients who have had extensions without previous reaction."
  },
  {
    q: "For a client with very sparse, patchy eyebrows, the BEST approach is to:",
    opts: [
      "Aggressively wax the shape and rely on regrowth to create fullness",
      "Remove all visible stray hairs and tint to make fine existing hairs more visible",
      "Apply chemical depilation to the entire brow and redraw with a pencil",
      "Wax only the areas where regrowth is strong and ignore sparse areas"
    ],
    ans: 1,
    exp: "For sparse brows, preserving all possible hair is the priority. Tinting can make fine, light hairs more visible for a fuller appearance. Over-removing hairs from already sparse brows worsens the condition. Brow makeup and growth-supporting serums complement the service."
  },

{
    q: "Before applying semi-permanent eyelash extensions, a patch test for the adhesive (cyanoacrylate-based) must be performed:",
    opts: [
      "On the inner forearm 24 hours before the appointment",
      "The patch test should be applied to the skin behind the ear or inner forearm 24–48 hours before the full application, allowing enough time for a delayed allergic reaction (Type IV hypersensitivity) to develop",
      "On the eyelid immediately before the service begins",
      "Patch testing is only required for tinting, not lash adhesives"
    ],
    ans: 1,
    exp: "Cyanoacrylate ('super glue') adhesive used in lash extensions is a common sensitizer. Allergic contact dermatitis (Type IV, delayed hypersensitivity) can develop even after multiple uneventful applications. The patch test must be placed where the client can be observed 24–48 hours later for redness, itching, or swelling. Because Type IV reactions are delayed, a test done immediately before the service is meaningless. A reaction to the adhesive is a permanent contraindication."
  },
  {
    q: "Lash tinting (tinting the natural eyelash) in California:",
    opts: [
      "Is routinely permitted for licensed estheticians",
      "Uses coal-tar-based dyes (such as those in para-phenylenediamine/PPD formulas) on the periorbital area, which are not FDA-approved for use on the eyelashes or eyebrows — estheticians in California must use only products specifically approved for periorbital use",
      "Has no regulatory restrictions",
      "Is equivalent to applying regular hair color to the eyelashes"
    ],
    ans: 1,
    exp: "The FDA has not approved any color additives for use in dyeing eyelashes or eyebrows. Specifically, coal-tar hair dyes (containing PPD or similar) are prohibited from use near the eye due to risk of severe allergic reactions, swelling, and blindness. California estheticians must use only FDA-compliant products intended for the periorbital area and must always perform a patch test. This is both a scope and a regulatory safety issue."
  },
  {
    q: "A brow lamination service differs from a brow tint because:",
    opts: [
      "Brow lamination uses a permanent hair color",
      "Brow lamination is a chemical service that uses a thioglycolate-based solution to soften the disulfide bonds in the brow hairs, allowing them to be repositioned into a new shape and set — similar in chemistry to a hair permanent wave",
      "Brow lamination only uses heat, not chemicals",
      "Brow lamination permanently removes the brow hairs and implants new ones"
    ],
    ans: 1,
    exp: "Brow lamination is essentially a 'perm' for eyebrow hairs. It uses a two-step chemical process: Step 1 (reduction) uses ammonium thioglycolate or cysteamine to break disulfide bonds and soften the hair; Step 2 (oxidation/fixing) uses hydrogen peroxide to re-form the bonds in the new position. Results last 4–6 weeks. Because it uses chemicals similar to permanent wave solutions, the same contraindications apply — allergy history, patch testing, recent waxing."
  },
  {
    q: "When shaping eyebrows, the arch peak should be positioned:",
    opts: [
      "Directly above the center of the iris regardless of facial structure",
      "Approximately above the outer edge of the iris or where an imaginary line from the outer nose, through the pupil, intersects the brow — this natural-arch guideline creates the most flattering shape for most face structures",
      "As far lateral as possible for a dramatic appearance",
      "Always in the same position regardless of the client's natural brow growth"
    ],
    ans: 1,
    exp: "Classic brow mapping uses three reference lines drawn from the outer alar (base of the nose): (1) straight up = inner brow start; (2) through the pupil = arch peak; (3) through the outer canthus = tail end. The arch peak above the outer iris creates the illusion of lifted eyes and is proportionate to most faces. However, the esthetician should also account for the client's natural brow growth, facial shape, and personal preference."
  }
  ],

  // mu
  mu: [
{
    q: "Foundation undertone selection is critical for a natural-looking makeup result. A client with a pink or ruddy complexion benefits MOST from a foundation with:",
    opts: [
      "A yellow or golden undertone, which neutralizes the excess redness",
      "A pink undertone, which matches the natural skin tone exactly",
      "An ashy or grey undertone to cool down the redness",
      "A bronze undertone regardless of skin tone"
    ],
    ans: 0,
    exp: "Pink/ruddy complexions have a red-pink undertone. Yellow-based (warm) foundations neutralize excess redness using color theory (yellow is opposite red-pink on the color wheel). Matching a pink foundation to a pink complexion amplifies the redness rather than balancing it. This concept is fundamental to foundation selection in professional makeup artistry."
  },
  {
    q: "A color correcting concealer used to neutralize under-eye dark circles with a blue or purple tone should be:",
    opts: [
      "White, to brighten the area",
      "Peach or orange — opposite blue-purple on the color wheel — to neutralize the discoloration before applying the foundation or skin-toned concealer on top",
      "Green, to reduce visible redness",
      "Yellow, which neutralizes all discoloration universally"
    ],
    ans: 1,
    exp: "Color correction uses complementary colors (color wheel opposites) to neutralize discolorations. Blue/purple circles → peach or orange corrector. Red blemishes or rosacea → green corrector. Hyperpigmentation (brown) → lavender or peach corrector. The color corrector is applied first, then covered with a skin-tone-matching concealer or foundation. On darker skin tones, a more saturated orange corrector may be needed for deeper bruising."
  },
  {
    q: "The primary purpose of a makeup primer applied before foundation is:",
    opts: [
      "To provide SPF protection equivalent to a separate sunscreen",
      "To create a smooth, slightly tacky base that fills fine lines and pores, extends foundation wear time, and improves foundation adhesion to the skin",
      "To add color and coverage in a single step",
      "To exfoliate the skin surface just before makeup application"
    ],
    ans: 1,
    exp: "Makeup primers are silicone- or water-based formulas that sit between skin care and foundation. They fill surface texture irregularities (pores, fine lines), create a uniform surface for foundation adhesion, and — particularly silicone primers — extend wear time by creating a barrier that resists sebum and sweat. They do not replace SPF protection; a dedicated broad-spectrum sunscreen should be applied to bare skin before makeup."
  },
  {
    q: "For a client with a round face shape, contouring and highlighting techniques are used to:",
    opts: [
      "Add volume to the temples and widen the forehead for a more dramatic look",
      "Create the illusion of length and definition by contouring the sides of the face and below the cheekbones, and highlighting the center forehead, nose bridge, and chin — visually elongating the face",
      "Apply a bright highlighter across the entire cheek area to draw attention to the roundness",
      "Follow the exact same technique as for an oval face shape"
    ],
    ans: 1,
    exp: "Contouring is a shading technique that visually recedes areas (makes them appear smaller). For a round face, contour is applied along the sides of the face, temples, and below the cheekbones to create shadows that suggest more angular structure. Highlighting the center of the face (forehead center, nose bridge, chin) draws the eye vertically, creating the illusion of length. The goal is to balance the face toward an oval, the most versatile shape for makeup."
  },
  {
    q: "A 'cut crease' eye look differs from a basic lid application because:",
    opts: [
      "It only uses one eyeshadow color",
      "A cut crease uses a precise line of concealer or light eyeshadow applied directly in the crease to create a sharp, defined separation between the lid color and the crease/transition color — enhancing the appearance of a larger, more defined eye",
      "It requires no blending technique",
      "A cut crease is exclusively used for monolid eye shapes"
    ],
    ans: 1,
    exp: "A cut crease is an advanced eye makeup technique that creates a sharply defined line across the crease to give the impression of a deeper-set, more defined lid. Concealer or a sharp lighter color is applied directly in the crease line, separating the lid color sharply from the blended transition above. It is popular for clients who want dramatic definition, particularly those with hooded or deep-set eyes, and is a technique that requires practice to execute cleanly."
  },
  {
    q: "When selecting a lip liner, the professional approach is to:",
    opts: [
      "Always choose a liner two shades darker than the lipstick for maximum definition",
      "Match the liner to the lipstick shade or lip's natural color — to define the lip shape without visible liner bleed, and blend it into the lip surface to prevent a harsh border as the lipstick wears off",
      "Apply lip liner outside the natural lip line on all clients to add volume",
      "Use the same neutral nude liner for every client regardless of lipstick color"
    ],
    ans: 1,
    exp: "Lip liner serves to define the lip border, prevent lipstick bleeding into fine lines, and increase wear longevity. Matching the liner to the lipstick (or the lip's natural tone) creates a polished, seamless look and avoids a visible ring as the lipstick fades. Overly dark liner creates an unnatural border. Lining just outside the natural lip line is an acceptable technique for creating the illusion of fuller lips, but must be blended and appropriate for the client's lip anatomy."
  },
  {
    q: "Setting powder applied over liquid or cream foundation primarily serves to:",
    opts: [
      "Add additional coverage to the foundation",
      "Absorb surface oils, reduce shine, and 'lock in' the foundation by setting the emollients in the formula — extending wear time and reducing transfer",
      "Provide the main SPF protection for the makeup look",
      "Replace moisturizer in an oily skin care routine"
    ],
    ans: 1,
    exp: "Setting (or translucent) powder is applied after liquid or cream foundation to absorb excess oils and moisture from the formula's emollients, which 'sets' the makeup and reduces movement and transfer. It also mattifies the finish. Setting powder differs from baking (applying a thick layer of translucent powder and allowing it to sit before dusting off) or highlighting powders (which add luminosity). Setting powder does not add meaningful SPF."
  },
  {
    q: "Which face shape is generally considered the most versatile for makeup, requiring minimal contouring corrections?",
    opts: [
      "Square face shape",
      "Round face shape",
      "Oval face shape — it is considered the 'ideal' proportional shape because its balanced forehead, cheekbone, and jaw widths with a gently narrowing chin require few compensating techniques",
      "Heart face shape"
    ],
    ans: 2,
    exp: "The oval face shape has balanced proportions: forehead slightly wider than the jaw, cheekbones as the widest point, face length about 1.5× its width, and a gently rounded jaw. This 'ideal' shape requires minimal corrective contouring — almost any makeup style (eye shape, blush placement, lip shape) works well. When teaching makeup artistry, other face shapes are contoured or highlighted to approximate the oval."
  },
  {
    q: "Sanitary practices when using lip products on multiple clients require:",
    opts: [
      "Applying lip color directly from the tube to the brush once, then wiping the tube with a tissue",
      "Scraping individual product portions onto a clean palette using a single-use spatula; using dedicated single-use applicators or fully sanitized metal applicators for each client; never double-dipping into the product container",
      "Letting each client apply their own lip color using the applicator from the tube",
      "Cleaning makeup brushes with water between clients"
    ],
    ans: 1,
    exp: "Direct application from product packaging (lipstick tube, mascara wand, lip gloss applicator) to multiple clients is a cross-contamination violation. Correct sanitary practice: use a clean spatula to scrape product onto a disposable palette, apply with a single-use applicator or a fully disinfected metal tool, and never return product to the original container. This prevents the spread of HSV, bacterial infections, and other pathogens."
  },
  {
    q: "When performing makeup services, OSHA requirements regarding chemical exposure apply to:",
    opts: [
      "Only nail services, not makeup",
      "Any chemical in the workplace that poses a health hazard — including makeup setting sprays, airbrush makeup (which creates fine aerosol droplets that can be inhaled), and solvent-based products",
      "Only products classified as 'industrial chemicals'",
      "Only products applied to skin that is broken or abraded"
    ],
    ans: 1,
    exp: "OSHA's Hazard Communication Standard applies to any hazardous chemical in the workplace, including cosmetic products used professionally. Aerosol setting sprays and airbrush systems create fine mist particles that can be inhaled. SDS must be available for all such products. Good ventilation, appropriate respiratory protection during airbrush work, and avoiding direct inhalation of sprays are professional hygiene practices that protect the makeup artist."
  }
  ],
};
