function toonInfo(provincie) {
    const info = {
        "Antwerpen": `
            <p>Antwerpen is de grootste haven van België en bekend om zijn diamanten. 
            De stad Antwerpen zelf heeft een prachtige historische binnenstad met de Onze-Lieve-Vrouwekathedraal en het Rubenshuis. 
            De provincie heeft ook mooie natuurgebieden zoals het Rivierenhof en de Kalmthoutse Heide.</p>
        `,
        "Oost-Vlaanderen": `
            <p>Oost-Vlaanderen heeft Gent als bruisende hoofdstad, vol geschiedenis en studentenleven. 
            Bezoek de Graslei en Korenlei aan de rivier, het middeleeuwse Gravensteen of geniet van een boottocht. 
            De provincie heeft ook mooie dorpjes en wandelroutes in de Vlaamse Ardennen.</p>
        `,
        "West-Vlaanderen": `
            <p>West-Vlaanderen ligt aan de kust en heeft steden zoals Brugge en Oostende. 
            Brugge is een historische stad met grachten en middeleeuwse architectuur. 
            Oostende is ideaal voor een dagje strand. Het achterland biedt rustige natuur en polders om te fietsen.</p>
        `,
        "Vlaams-Brabant": `
            <p>Vlaams-Brabant ligt rond Brussel en heeft Leuven als grootste stad. 
            Leuven staat bekend om de universiteit, oude bibliotheek en gezellige cafés. 
            In Vlaams-Brabant vind je ook prachtige kastelen, bossen en het Hageland met wijngaarden.</p>
        `,
        "Limburg": `
            <p>Limburg is de groenste provincie van Vlaanderen, ideaal om te fietsen en wandelen. 
            Hasselt is de hoofdstad en beroemd om zijn jenever en mode. 
            Limburg heeft uitgestrekte natuurgebieden zoals het Nationaal Park Hoge Kempen en mooie fruitstreken.</p>
        `,
        "Henegouwen": `
            <p>Henegouwen ligt in Wallonië en heeft Charleroi als grootste stad. 
            Het staat bekend om industriegeschiedenis, maar ook mooie kastelen en natuur zoals de bossen van Chimay. 
            De stad Bergen (Mons) is cultureel interessant met musea en evenementen.</p>
        `,
        "Luik": `
            <p>Luik is een industriële provincie met de stad Luik zelf als cultureel centrum. 
            Bezoek de historische kerken, de citadel van Luik en de levendige markt. 
            De provincie heeft ook de Ardennen met rivieren en wandelroutes, perfect voor outdoor-liefhebbers.</p>
        `,
        "Namen": `
            <p>Namen is de hoofdstad van Wallonië en ligt aan de samenvloeiing van de rivieren Maas en Samber. 
            De citadel van Namen biedt prachtig uitzicht. 
            De provincie heeft rustige dorpjes en veel kastelen langs de rivier, ideaal voor een ontspannen weekend.</p>
        `,
        "Luxemburg": `
            <p>Luxemburg is de grootste en meest bosrijke provincie van België. 
            Het staat bekend om de Ardennen met heuvels, rivieren en pittoreske dorpjes zoals Durbuy. 
            Perfect voor wandelen, kajakken en rust in de natuur.</p>
        `,
        "Waals-Brabant": `
            <p>Waals-Brabant ligt ten zuiden van Brussel en heeft charmante stadjes zoals Wavre en Waterloo. 
            De beroemde Slag bij Waterloo kan hier bezocht worden. 
            De provincie heeft ook rustige landschappen, kastelen en wandelroutes voor natuurliefhebbers.</p>
        `
    };

    document.getElementById("info").innerHTML =
        `<h2>${provincie}</h2>${info[provincie]}`;
}
