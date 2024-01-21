/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Efficacy of N-Acetylcysteine in reducing the risk of Postoperative Atrial Fibrillation in Cardiothoracic Surgery: A Systematic Review and Meta-Analysis of Randomized Controlled Trials ",
    authors:
      "Atef Abdelrahman Hassan, Noha Rami Ismail, Abdelmoemen Esam Rezk, Hanady Mohammad Elfeky, Abdelrahman Mohamed Mady, Ahmed Gamal Allam,and Kirellos Said Abbas",
    conferences:
      "No conference",
    researchYr: 2024,
    citebox: "popup1",
    image: "assets/images/research-page/inteferenceNetwork.png",
    citation: {
      vancouver:
        "will be available when published soon!!.",
    },
    abstract:
      "Introduction: New-onset postoperative atrial fibrillation (POAF) is a common complication following cardiac surgeries. N-acetylcysteine (NAC) showed a significant reduction in the incidence of POAF. This review aims to systematically summarize and meta-analyze data from previously published Randomized Controlled Trials (RCTs).Methods: Electronic databases: PubMed, Cochrane, Embase, Scopus, and Web of Science were searched. Data was extracted and the quality of the included studies was assessed. A random-effects DerSimonian Laird model was employed for meta-analysis.Results: Fifteen RCTs were included in this study (NAC n = 940, control n=935). In the NAC group, 16.38% developed POAF compared to 23.53% in the control group. NAC supplementation was associated with decreased incidence of POAF in patients undergoing Cardiothoracic surgeries (RR 0.70, 95% CI 0.59 to 0.83; P<0.0001).Conclusions: NAC administration may be a useful strategy to prevent POAF after cardiac surgery.",
    absbox: "absPopup1",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
