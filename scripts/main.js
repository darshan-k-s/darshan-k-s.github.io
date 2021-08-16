const typewriter = [
    'Front end web developer  ',
    'Robotics enthusiast  ',
    'UX design  ',
];
const skills = [
    "JavaScript", "ROS", "C", "C++", "Python", "PHP",
    "MySQL", "jQuery", "Bootstrap", "SCSS", "CSS3", "HTML5"
];
const projects = [{
    id: 1,
    name: "Wall follower robot",
    image: "./images/proj1.PNG",
    desc: "A gazebo simulation of a 4-wheeled skid-steer drive wall following robot. Created with ROS.",
    link: "https://github.com/Darshan-K-S-work/wall-follower-robot"
}, ];
$(document).ready(function () {
    loadSkills();
    loadProjects();
});

function loadProjects() {
    let projectsHTML = projects.map(
        function (item) {
            return `
            <div class="tile">
                <div class="image"></div>
                <div class="abt">
                    <h4>${item.name}</h4>
                    <div class="projunderline"></div>
                    <div class="description">${item.desc}</div>
                    <button class="visit-project"><a target="_blank" href="${item.link}">Check it out</a></button>
                </div>
            </div>
            `;
        }
    );
    $(".project-tiles").html(projectsHTML.join(""));
    for (let i = 0; i < projects.length; i++) {
        $(".tile .image").css("background-image", "url('" + projects[i].image + "')");
    }
}

function loadSkills() {
    let skillsHTML = "";
    for (let i = 0; i < skills.length; i++) {
        skillsHTML = skillsHTML + ` 
            <p class="skill ${(i>=8)?'hidden':''}">${skills[i]}</p>
        `;
    }
    $(".skills-container").html(skillsHTML);
}
let caretFlag = true;
$(".caret").click(function (e) {
    if (caretFlag) {
        $(".caret button span").text("View less");
        $(".caret button span").addClass("up");
    } else {
        $(".caret button span").text("View more");
        $(".caret button span").removeClass("up");
    }
    caretFlag = !caretFlag;
    $(".hidden").toggle();
    let scrollPercentage = getProgress();
    $(".scroll-progress").css("width", scrollPercentage + "%");
});
// Typewriter effect
let i = 0;
let j = 0;
typeFlag = true;
let txt = "";
setTimeout(function () {
    setInterval(typewriterEffect, 150);
}, 2000);

function typewriterEffect() {
    switch (typeFlag) {
        case false:
            if (j < typewriter.length) {
                if (i > 0) {
                    txt = txt.slice(0, -1);
                    $("#typingtxt").text(txt);
                    --i;
                } else {
                    ++j;
                    i = 0;
                    typeFlag = true;
                }
            }
            break;
        case true:
            if (j < typewriter.length) {
                if (i < typewriter[j].length) {
                    $("#typingtxt").text(txt);
                    txt = txt + typewriter[j][i];
                    ++i;
                } else {
                    typeFlag = false;
                }
            } else {
                j = 0;
                i = 0;
            }
            break;
    }
}
setInterval(function () {
    $(".fa-angle-down").css("opacity", 0.5);
    $(".fa-angle-down").addClass("down-animation");
    setTimeout(function () {
        $(".fa-angle-down").removeClass("down-animation");
    }, 7500);
}, 8000);
$(window).scroll(function () {
    let scrollPercentage = getProgress();
    $(".scroll-progress").css("width", scrollPercentage + "%");
    if (scrollPercentage > 1) {
        $(".toplinks").css("visibility", "hidden");
    } else {
        $(".toplinks").css("visibility", "visible");
    }
});

function getProgress() {
    let scrollPos = $(window).scrollTop();
    let totheight = $('body').outerHeight();
    let windowheight = $(window).outerHeight();
    let effheight = totheight - windowheight;
    let percentage = (scrollPos / effheight) * 100;
    return percentage;
}