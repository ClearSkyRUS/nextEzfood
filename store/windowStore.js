import { action, observable } from 'mobx'

class WindowStore {
    @observable windowWidth = 768
    @observable fixedMenu = false
    @observable mobile = true
    @observable sidebarOpened = false
    @observable menuPosition = ''

    @action getWindowParams = () => {
        this.windowWidth = window.innerWidth
        this.mobile = (this.windowWidth > 770) ? false : true
        this.menuPosition = document.location.pathname
    }

    @action openSidebar = () => {
        this.sidebarOpened = true
    }

    @action hideSidebar = () => {
        this.sidebarOpened = false
    }

    @action togleSidebar = () => {
        this.sidebarOpened = !this.sidebarOpened
    }

    @action showFixedMenu = () => {
        this.fixedMenu = true
    }

    @action hideFixedMenu = () => {
        this.fixedMenu = false
    }

}

export default WindowStore;