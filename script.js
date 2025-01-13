const inputField = document.querySelector(".inputField");
const main = document.querySelector(".resume-builder");
const outputContainer = document.querySelector(".output_container");


let isHidden = true;

// view input form and resume preview
function hide() {
    if (isHidden) {
    
        main.style.display = "none";
        isHidden = false;

        outputContainer.style.display = "block";
        outputContainer.innerHTML = `
            <div class="output">
                <div class="heading">
                    <h1>${inputField["name"].value}</h1>
                    <h4>${inputField["title"].value}</h4>
                </div>
                <div class="info">
                    <div class="left">
                        <div class="box">
                            <h2>Objective</h2>
                            <p>${inputField["objective"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Skills</h2>
                            <p>${inputField["skills"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Academic Details</h2>
                            <p>${inputField["academic_details"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Contact</h2>
                            <p>${inputField["contact"].value}</p>
                        </div>
                    </div>
                    <div class="right">
                        <div class="box">
                            <h2>Work Experience</h2>
                            <p>${inputField["work_experience"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Achievements</h2>
                            <p>${inputField["achievements"].value}</p>
                        </div>
                        <div class="box">
                            <h2>Projects</h2>
                            <p>${inputField["projects"].value}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button id="download-btn">Print Resume</button>

        `;

        const downloadResume = () => {
            try {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF();
                const resumeElement = document.querySelector('.output');
                
                if (!resumeElement) {
                throw new Error('Resume element not found');
                }

                pdf.html(resumeElement, {
                    callback: function(doc) {
                        try {
                            doc.save('resume.pdf');
                        } catch (err) {
                          console.error('Error saving PDF:', err);
                          alert('Failed to save PDF');
                        }
                    },
                    x: 10,
                    y: 10,
                    html2canvas: {
                        scale: 0.70 // Slightly reduce scale to prevent content cutoff
                    }
                });
            } catch (err) {
              console.error('Error generating PDF:', err);
              alert('Failed to generate PDF');
            }
        };
        document.getElementById('download-btn').addEventListener('click', downloadResume);

        
       
          
          
    } else {
        // Show the input form 
        main.style.display = "block";
        isHidden = true;

        outputContainer.style.display = "none";
        outputContainer.innerHTML = "";
    }
}


