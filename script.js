function popUp() {
      let click = document.getElementById('click')
      let pop = document.getElementById('membertoken')
      let cross = document.getElementById('cross')
      click.onclick = (() => {
            pop.style.display = "block";

      })
      cross.onclick = (() => {
            pop.style.display = "none";

      })
}
popUp()
function popUp2() {
      let click2 = document.getElementById('click2')
      let pop = document.getElementById('membertoken')
      let cross = document.getElementById('cross')
      click2.onclick = (() => {
            pop.style.display = "block";

      })
      cross.onclick = (() => {
            pop.style.display = "none";

      })
}
popUp2()