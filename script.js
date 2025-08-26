function showQuiz() {
  document.getElementById("quiz").style.display = "block";
  window.location.hash = "quiz";
}

function calculateResult() {
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  if (answers.length < 5) {
    alert("Please answer all 5 questions.");
    return;
  }

  const score = {};
  answers.forEach(answer => {
    const value = answer.value;
    score[value] = (score[value] || 0) + 1;
  });

  let topType = null;
  let max = 0;

  for (const type in score) {
    if (score[type] > max) {
      max = score[type];
      topType = type;
    }
  }

  const results = {
    aerospace: "🚀 Aerospace Engineering – rockets, planes, and space exploration await you!",
    civil: "🏗️ Civil Engineering – design cities, bridges, and sustainable spaces.",
    biomedical: "🧬 Biomedical Engineering – improve lives with medical innovation.",
    automotive: "🚗 Automotive Engineering – build the future of transportation.",
    software: "💻 Software Engineering – code the next big thing.",
    chemical: "🧪 Chemical Engineering – mix chemistry and creativity.",
    computer: "🖥️ Computer Engineering – where hardware meets code.",
    electrical: "⚡ Electrical Engineering – electrify the world!",
    marine: "🌊 Marine Engineering – conquer the seas with tech.",
    propulsion: "🔥 Propulsion Engineering – jet engines, rockets, and speed.",
    materials: "🧱 Materials Engineering – develop the materials of the future.",
    material: "🧱 Materials Engineering – you think in atoms and molecules.",
    architecture: "🏛️ Architecture – build beautiful, functional structures.",
    biochemical: "🧫 Biochemical Engineering – blend biology and chemistry.",
    agricultural: "🌾 Agricultural Engineering – innovate in food and farming.",
    petroleum: "⛽ Petroleum Engineering – discover and extract energy sources.",
    nuclear: "☢️ Nuclear Engineering – harness the atom responsibly.",
    geological: "🪨 Geological Engineering – study and protect the Earth.",
    audio: "🎧 Audio Engineering – shape sound, music, and experiences.",
    mechatronics: "🤖 Mechatronics Engineering – you love robots and automation.",
    systems: "🧠 Systems Engineering – connect everything together.",
    industrial: "🏭 Industrial Engineering – efficiency is your superpower."
  };

  const resultMessage = results[topType] || "🎓 You’re a unique mix! Consider exploring multiple engineering paths.";
  document.getElementById("result").innerHTML = `<h3>Your Result:</h3><p>${resultMessage}</p>`;
}
