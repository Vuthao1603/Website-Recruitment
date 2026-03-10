'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">web_recuitment documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                                <li class="link">
                                    <a href="overview.html" data-type="chapter-link">
                                        <span class="icon ion-ios-keypad"></span>Overview
                                    </a>
                                </li>

                            <li class="link">
                                <a href="index.html" data-type="chapter-link">
                                    <span class="icon ion-ios-paper"></span>
                                        README
                                </a>
                            </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>

                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' : 'data-bs-target="#xs-controllers-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' :
                                            'id="xs-controllers-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' : 'data-bs-target="#xs-injectables-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' :
                                        'id="xs-injectables-links-module-AppModule-83e800dd09fd549a1d80ef13900f68e58f4fbe4dc16c067bd177080fb38c2274b4b8ab37ea6b891c0cfa2e770c73dcd834ccde6855c9338c38a08381af50a9cd"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' :
                                            'id="xs-controllers-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' :
                                        'id="xs-injectables-links-module-AuthModule-0740ae8c15c2d29487b7107f2b2b92e8c50d8262489680751f2efd0c9e4649b68edcfee3e2fb8accb7d0b1883d2873f4eb13058e7bd5ace91d580f7b8aaefc97"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' :
                                            'id="xs-controllers-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' :
                                        'id="xs-injectables-links-module-CompaniesModule-cbeac0796913660c6d39b3ca775ae0eca8a1bf9104b9fa3576dca76ead8c7776f493144c9be6a490a733fe1ca9514b0a31873fdee1657efbbbfd1b15bd65fc19"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' :
                                            'id="xs-controllers-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' :
                                        'id="xs-injectables-links-module-DatabasesModule-4bba743def76412f07e5c480fc636c7e1b5a0198e1524ac41a8cdd6e5fb98e656bc520c772bb5137562fa9bdac5f840d451fe688f3a9e9c85ad25741142fa0ef"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' :
                                            'id="xs-controllers-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' :
                                        'id="xs-injectables-links-module-FilesModule-8ec647d69c43551d3d2e13bbde5695758eb94c5a14d3a6d545890a5f6a6bb1ef4cb14626830eb2999c71b89f895298777942fcb374ee587f0674a2e8d2906602"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' :
                                            'id="xs-controllers-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' :
                                        'id="xs-injectables-links-module-JobsModule-ef3eed8fb22bfd8fd15b0e22be7200b11948aabe693f7cf6de9033fed3a92907865e32f4fc85b696e55f2fc85430af65b9a7b4d07c55b58c20025d395d820cc6"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' : 'data-bs-target="#xs-controllers-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' :
                                            'id="xs-controllers-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' : 'data-bs-target="#xs-injectables-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' :
                                        'id="xs-injectables-links-module-MailModule-d82edd8221adc305f0b2ee35cff75a9a2fef76de1c40248dfce777feca24574e96ac10fd5c884a0ab2b8258ddde25c2d6889f41b15b4d0ae210121079468a76f"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' :
                                            'id="xs-controllers-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' :
                                        'id="xs-injectables-links-module-PermissionsModule-35fb8afba1bf9322cb48b2e6b88a51de7e66a03f2d0cf99cce7feaf973b56359d46db48b96ec91ce5432366829fa59ffd3b16f009f6d0506dc3d55edf4fd3b44"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' :
                                            'id="xs-controllers-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' :
                                        'id="xs-injectables-links-module-ResumesModule-5af6407d30bfeca2f9e44f17644fcc867740ebac19abe4cece9cf327761b5593fa87a9b36574aa67390fba73a21a673357c5b2c46ff1dbe0d7c68f45b131adfe"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' :
                                            'id="xs-controllers-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' :
                                        'id="xs-injectables-links-module-RolesModule-dc01c753ab353fcb554f49c53a671b9d444b8d855345be24124768493a88960dcf5171fd98245c90d7a0a56f9c41d8d9c7a741ffe9b92fff27d642069005c3fd"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' :
                                            'id="xs-controllers-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' :
                                        'id="xs-injectables-links-module-SubscribersModule-813ef3ed011979c197b74bd521152ea995645aecf94beaf1a6c72b138bf47baecb29a237461452bcdc78a43b5343efaccb8820816b8e3d853db3532b068271c6"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' :
                                            'id="xs-controllers-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' :
                                        'id="xs-injectables-links-module-UsersModule-c1bc97c46ea029cf6f0f304f29905cde8e8c25473580e8736c4d37a3de950be9c7cd55669fbb3db6b4915e2e4de4cd49892f261052f047096861d10767993634"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLoginDto.html" data-type="entity-link" >UserLoginDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});