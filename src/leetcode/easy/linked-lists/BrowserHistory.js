class Site {
  constructor(site) {
    this.prev = null
    this.next = null
    this.value = site
  }
}

export class BrowserHistory {
  constructor(homepage) {
    const homeSite = new Site(homepage)
    this.history = homeSite
    this.current = homeSite
  }

  forward(steps) {
    let currentSite = this.current

    // if currentsite doesn't exist, then we won't continue the loop, meaning we went forward as much as we could
    while (currentSite) {
      // if steps is 0, then it means we went forward the amount we should've
      if (steps === 0) {
        break
      }

      currentSite = currentSite.next
      steps--
    }

    this.current = currentSite
    return currentSite.value
  }

  visit(url) {
    const newSite = new Site(url)
    this.current.next = newSite
    newSite.prev = this.current
    this.current = newSite
  }

  back(steps) {
    let currentSite = this.current

    // if currentsite doesn't exist, then we won't continue the loop, meaning we went forward as much as we could
    while (currentSite) {
      // if steps is 0, then it means we went forward the amount we should've
      if (steps === 0) {
        break
      }

      currentSite = currentSite.prev
      steps--
    }

    this.current = currentSite
    return currentSite.value
  }
}
