(function () {
  var wsetUrl = "https://wset.com/sports/full-court-press/cave-springs-knight-balances-basketball-debate-and-track-while-chasing-one-more-title-february-2026";
  var wsetImage = "https://wset.com/resources/media2/16x9/588/800/5x0/80/83ee9dc8-0281-4c7b-bad8-78e31b380d52-HASSAN5.jpg";
  var wsetVideo = "https://harvest-media-clips.sinclairstoryline.com/WSET/2026-02-21T04:31:37.834Z/Live-DVR/548fa2e5-fcd3-4669-aa84-88ab2cae69ac/mp4/index.mp4";

  function storyItem(label) {
    var trigger = Array.from(document.querySelectorAll(".resume-story-trigger")).find(function (button) {
      return button.textContent.indexOf(label) !== -1;
    });
    return trigger && trigger.closest(".resume-story-item");
  }

  function setVideo(card, src, poster, title, description) {
    if (!card) return;
    var video = card.querySelector("video");
    var source = video && video.querySelector("source");
    if (video && source && source.getAttribute("src") !== src) {
      source.setAttribute("src", src);
      video.setAttribute("poster", poster);
      video.setAttribute("playsinline", "");
      video.load();
    }
    var heading = card.querySelector("figcaption b");
    var copy = card.querySelector("figcaption span");
    if (heading) heading.textContent = title;
    if (copy) copy.textContent = description;
  }

  function repairKnightSection() {
    var item = storyItem("Cave Spring Knight");
    if (!item) return;
    var cards = item.querySelectorAll(".resume-media-card");
    setVideo(cards[0], "/media/resume/knighting-ceremony.mp4", "/media/resume/knighting-ceremony-poster.jpg", "Cave Spring Knighting Ceremony", "The moment I was formally named and knighted as the Cave Spring Knight.");
    setVideo(cards[1], "/media/resume/knights-tale-full.mp4", "/media/resume/knight-feature-poster.jpg", "Pep Rally I Hosted", "A school pep rally I hosted while serving as the Cave Spring Knight.");
  }

  function repairDebateSection() {
    var item = storyItem("Debate, basketball, and track");
    if (!item) return;
    var grid = item.querySelector(".resume-media-grid");
    if (!grid) return;
    var card = Array.from(grid.querySelectorAll(".resume-media-card")).find(function (figure) {
      return /Full Court Press|Knight's Tale/i.test(figure.textContent);
    });
    if (!card) {
      card = document.createElement("figure");
      card.className = "resume-media-card wide-media";
      grid.prepend(card);
    }
    card.id = "wset-full-court-press";
    card.innerHTML = '<video controls playsinline preload="metadata" poster="' + wsetImage + '"><source src="' + wsetVideo + '" type="video/mp4">Your browser cannot play this video. <a href="' + wsetUrl + '" target="_blank" rel="noreferrer">Watch it on WSET</a>.</video><figcaption><b>WSET Full Court Press: A Knight\'s Tale</b><span>WSET profiles how I balanced basketball, policy debate, track, academics, and the Cave Spring Knight honor. <a href="' + wsetUrl + '" target="_blank" rel="noreferrer">Open the original WSET story ↗</a></span></figcaption>';
  }

  function repairPage() {
    repairKnightSection();
    repairDebateSection();
  }

  var style = document.createElement("style");
  style.textContent = ".wset-feature-link{position:relative;display:block;aspect-ratio:16/9;overflow:hidden;background:#15162e;color:#fff;text-decoration:none}.wset-feature-link img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .3s ease}.wset-feature-link span{position:absolute;left:1rem;bottom:1rem;padding:.7rem 1rem;border-radius:999px;background:rgba(25,27,67,.92);font-weight:800;box-shadow:0 8px 24px rgba(0,0,0,.25)}.wset-feature-link:hover img,.wset-feature-link:focus-visible img{transform:scale(1.025)}";
  document.head.appendChild(style);
  document.addEventListener("click", function (event) {
    if (event.target.closest && event.target.closest(".resume-story-trigger")) setTimeout(repairPage, 80);
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", repairPage);
  else repairPage();
  setTimeout(repairPage, 700);
})();
