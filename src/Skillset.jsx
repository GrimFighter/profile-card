

export default function Skillset() {
    const skills = [
        { skillname: "C", color: "#A8B9CC", level: "Intermediate" },
        { skillname: "C++", color: "#00599C", level: "Advanced" },
        { skillname: "Python", color: "#306998", level: "Intermediate" },
        { skillname: "HTML", color: "#E34F26", level: "Advanced" },
        { skillname: "CSS", color: "#1572B6", level: "Advanced" },
        { skillname: "JavaScript", color: "#F7DF1E", level: "Intermediate" },
        { skillname: "React", color: "#61DAFB", level: "Intermediate" },
        { skillname: "Node.js", color: "#68A063", level: "Beginner" },
        { skillname: "MongoDB", color: "#47A248", level: "Beginner" },
        { skillname: "SQL", color: "#F29111", level: "Intermediate" },
        { skillname: "Git", color: "#F05032", level: "Intermediate" },
        { skillname: "GitHub", color: "#6CC644", level: "Intermediate" },
        { skillname: "Creative Writing", color: "#FFD700", level: "Advanced" },
        { skillname: "Photography", color: "#FF4500", level: "Intermediate" },
        { skillname: "Cooking", color: "#FFA500", level: "Beginner" }
      ];
      
  return (
    <div className="skill-list">
        {skills.map((skill, index) => (
            <div className="skill" key={index} style={{background: skill.color}}>
                {skill.skillname} {skill.level == 'Intermediate' ? '👍': (skill.level =='Advanced'? '💪':(skill.level == "Beginner"? '👶':''))}
            </div>
        ))}
    </div>
  )
}
