import '../../dist/bar.css';
import '../../dist/button.css';
import '../../dist/breadcrumb.css';
import '../../dist/tabs.css';
import '../../dist/toolbar.css';
import '../../dist/dynamic-page.css';
import './custom.scss';

export default {
    title: 'Layouts/Dynamic Page',
    parameters: {
        description: `The dynamic page is the foundation for all pages in SAP Fiori. It is a generic layout designed to support various use cases; there, the content of both the header and page can vary.
        <br><br>
        The header of the dynamic page is collapsible, which helps the users focus on the actual page content but still ensures that important header information and actions are readily available.
        <br>

## Usage 
**Use the dynamic page if:**

- You want to build a freestyle application that uses the foundation components for SAP Fiori pages, such as the dynamic page header and the footer toolbar.

**Do not use the dynamic page if:**

- You only need to display a small amount of information. In this case, use a **Dialog** instead. If you can’t avoid using the dynamic page, use letterboxing to mitigate the issue.


## Structure
**Dynamic page consists of the following elements:**

- <code class="docs-code">fd-dynamic-page</code> Main element
  - <code class="docs-code">fd-dynamic-page\\_\\_header</code>The header area containing title area, collapsible header with buttons, and tabs
    - <code class="docs-code">fd-dynamic-page\\_\\_title-area</code> The area holding title, KPI content, subtitle, and actions
        - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb-container</code> Breadcrumb container, can also hold global actions
            - <code class="docs-code">fd-dynamic-page\\_\\_breadcrumb</code> Breadcrumbs
        - <code class="docs-code">fd-dynamic-page\\_\\_title-container</code> The container for title, KPI content and actions
            - <code class="docs-code">fd-dynamic-page\\_\\_title</code> Dynamic page title
            - <code class="docs-code">fd-dynamic-page\\_\\_title-content</code> The KPI content
            - <code class="docs-code">fd-dynamic-page\\_\\_toolbar</code> Toolbar container for actions
            - <code class="docs-code">fd-dynamic-page\\_\\_toolbar--actions</code> Global actions
        - <code class="docs-code">fd-dynamic-page\\_\\_subtitle</code> Dynamic page subtitle
    - <code class="docs-code">fd-dynamic-page\\_\\_collapsible-header</code> Dynamic page header
    - <code class="docs-code">fd-dynamic-page\\_\\_collapsible-header-visibility-container</code> The container for pin/collapse buttons
        - <code class="docs-code">fd-dynamic-page\\_\\_collapse-button</code> Collapse button
        - <code class="docs-code">fd-dynamic-page\\_\\_pin-button </code> Pin button
    - <code class="docs-code">fd-dynamic-page\\_\\_tabs</code> Tabs/Wizard can be optionally used as a header extension
  - <code class="docs-code">fd-dynamic-page\\_\\_content</code> Dynamic page content

Note: Footer is optional and used for finalizing page actions. It is usually displayed in edit mode and uses a floating footer bar.
There are no specific styles for footer when used with dynamic page.

## Modifiers
| **Description** | <div style="margin-left: 2rem;"> **Modifier class** </div> |
| :---- | :-------------- |
| No shadow for pin/collapse when tabs are used | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--no-shadow</code>
||<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_summarized-title-area--no-shadow</code>        |
| Add shadow to tabs when tabs are used | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_tabs--add-shadow</code>       |
| Collapsed styles when header is collapsed | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_title-area--collapsed</code>      |
||<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_title--collapsed</code>        |
||<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_summarized-title--collapsed</code>        |
| The pin/collapse button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--button-group</code>      |
| The left gradient of the button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--left-gradient</code>      |
| The right gradient of the button group | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header-visibility-container--right-gradient</code>      |
## Background variants

| **Description** | <span style="margin-left: 2rem;">**Modifier class**</span> |
| :---- | :-------------- |
| List background for content area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_content--list-bg</code>        |
| Transparent background for title area | <code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_title-area--transparent-bg</code> |
| Transparent background for header area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_header--transparent-bg</code>        |
| Transparent background for content area|<code class="docs-code" style="margin-left: 2rem;">fd-dynamic-page\\_\\_content--transparent-bg</code>        |

`,
        tags: ['f3', 'theme', 'development']
    }
};

export const desktop = () => `
    <section class="fd-dynamic-page" aria-label="Dynamic Page Desktop Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--xl" tabindex="0">
                <nav aria-label="Breadcrumbs">
                    <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                    </ul>
                </nav>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title"> Balenciaga Tripple S Trainers </div>
                    <div class="fd-dynamic-page__title-content"> Some RANDOM things </div>
                    <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                        <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Survey">
                                <i class="sap-icon--survey"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Pool">
                                <i class="sap-icon--pool"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Chart">
                                <i class="sap-icon--pie-chart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--xl" role="region" id="fddplhvc6" aria-label="Dynamic Page Desktop Header" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="true" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc6">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                    <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                            aria-label="Pin this">
                            <i class="sap-icon--pushpin-off"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--xl fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV550" href="#fuCwV550" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz165" aria-selected="true" href="#AiWfz165" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--xl">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV550" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz165" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
    <br /><br />
`;

desktop.storyName = 'Desktop';
desktop.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on desktop screens with the L, XL, and XXL sizes. To optimize dynamic page for desktop, add these modifier classes to the following elements:
        
| Element | Modifier class |
| ----------------: | :------------ |
| Title Area | \`fd-dynamic-page__title-area--xl\` |
| Header | \`fd-dynamic-page__collapsible-header--xl\` |
| Tabs | \`fd-dynamic-page__tabs--xl\` |
| Content | \`fd-dynamic-page__content--xl\` |

Note: The XL size is presented in this table, however the L and XXL size works as well.

It is also possible to add **Tabs** to the header area, which helps divide the page content. To display tabs, add the \`fd-dynamic-page__tabs\` class along with any of these size modifiers:

- \`--sm\`
- \`--md\`
- \`--lg\`
- \`--xl\`

Also add the modifier classes \`--add-shadow\` to the unordered list, and \`--overflow\` at the parent level for the box-shadow styling.
`
    }
};

export const tablet = () => `
    <section class="fd-dynamic-page" aria-label="Dynamic Page Tablet Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--md" tabindex="0">
                <div class="fd-dynamic-page__breadcrumb-container">
                    <nav aria-label="Breadcrumbs">
                        <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                            <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                        </ul>
                    </nav>
                    <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Survey">
                            <i class="sap-icon--survey"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Pool">
                            <i class="sap-icon--pool"></i>
                        </button>
                        <button class="fd-button fd-button--transparent" aria-label="Chart">
                            <i class="sap-icon--pie-chart"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-dynamic-page__title-container">
                    <a href="#" class="fd-dynamic-page__title fd-dynamic-page__title--md fd-link" tabindex="0">Balenciaga Tripple S Trainers </a>
                    <div class="fd-dynamic-page__title-content"> Some RANDOM things </div>
                    <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--md" role="region"  aria-hidden="false" id="fddplhvc5" aria-label="Tablet header">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="true" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc5">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                    <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                            aria-label="Pin this">
                            <i class="sap-icon--pushpin-off"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--md fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV551" href="#fuCwV551" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz166" aria-selected="true" href="#AiWfz166" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--md">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV551" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz166" role="tabpanel" >
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
    <br /><br />
`;

tablet.storyName = 'Tablet';
tablet.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on tablet screens with the M size. To optimize dynamic page for tablet, add these modifier classes to the following elements:

| Element | Modifier class |
| ----------------: | :------------ |
| Title Area | \`fd-dynamic-page__title-area--md\` |
| Title | \`fd-dynamic-page__title--md\` |
| Header | \`fd-dynamic-page__collapsible-header--md\` |
| Tabs | \`fd-dynamic-page__tabs--md\` |
| Content | \`fd-dynamic-page__content--md\` |
 
It is recommended that the navigation actions are displayed in a separate row above global actions, and are placed at the same level as the breadcrumb component.`
    }
};

export const mobile = () => `
<div class="mobile-container">
    <section class="fd-dynamic-page" aria-label="Dynamic Page Mobile Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--sm" tabindex="0">
                <div class="fd-dynamic-page__breadcrumb-container">
                    <nav aria-label="Breadcrumbs">
                        <ul class="fd-dynamic-page__breadcrumb--sm fd-breadcrumb">
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                            <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                        </ul>
                    </nav>
                    <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Close">
                                <i class="sap-icon--decline"></i>
                            </button>
                    </div>
                </div>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title"> Balenciaga Tripple S Trainers </div>
                        
                        <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                                <i class="sap-icon--overflow"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Header actions">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Expanded header in mobile </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--sm" role="region" id="fddplhvc4" aria-label="Dynamic Page Mobile Header">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="true" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc4">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--sm fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV552" href="#fuCwV552" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz167" aria-selected="true" href="#AiWfz167" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>  
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--sm">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV552" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz167" role="tabpanel">
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>

    <br /><br />

    <section class="fd-dynamic-page" aria-label="Dynamic Page Mobile Collapsed Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--sm fd-dynamic-page__title-area--collapsed" tabindex="0">
                <div class="fd-dynamic-page__breadcrumb-container">
                    <nav aria-label="Breadcrumbs">
                        <ul class="fd-dynamic-page__breadcrumb--sm fd-breadcrumb">
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                            <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                        </ul>
                    </nav>
                    <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Close">
                                <i class="sap-icon--decline"></i>
                            </button>
                    </div>
                </div>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title fd-dynamic-page__title--collapsed"> Balenciaga Tripple S Trainers </div>
                        
                        <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                                <i class="sap-icon--overflow"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Header actions">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Collapsed header </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--sm" role="region" aria-hidden="true" id="fddplhvcm1"  aria-label="Dynamic Page Mobile Collapsed Header" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="false" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvcm1">
                            <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--sm fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV553" href="#fuCwV553" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz168" aria-selected="true" href="#AiWfz168" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>   
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--sm">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV553" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz168" role="tabpanel">
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>

    <br /><br />

    <section class="fd-dynamic-page" aria-label="Dynamic Page Mobile Summary Line Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__summarized-title-area fd-dynamic-page__summarized-title-area--sm fd-dynamic-page__summarized-title-area--no-shadow" tabindex="0">
                <div class="fd-dynamic-page__summarized-title fd-dynamic-page__summarized-title--collapsed"> Balenciaga Tripple S Trainers </div>
                <div role="toolbar" aria-label="Expand summary line action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Expand">
                            <i class="sap-icon--slim-arrow-down"></i>
                        </button>
                </div>
            </div>
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--sm fd-dynamic-page__title-area--collapsed" aria-hidden="true" tabindex="0">
                <div class="fd-dynamic-page__breadcrumb-container">
                    <nav aria-label="Breadcrumbs">
                        <ul class="fd-dynamic-page__breadcrumb--sm fd-breadcrumb">
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                            <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                        </ul>
                    </nav>
                    <div role="toolbar" aria-label="Close action" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--transparent" aria-label="Close">
                            <i class="sap-icon--decline"></i>
                        </button>
                    </div>
                </div>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title fd-dynamic-page__title--collapsed"> Balenciaga Tripple S Trainers </div>
                        <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="More Header Content">
                                <i class="sap-icon--overflow"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Header actions">
                                <i class="sap-icon--overflow"></i>
                            </button>
                        </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Collapsed title area and header with summary line </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--sm" role="region" aria-hidden="true" id="fddplhvcm2"  aria-label="Dynamic Page Mobile Collapsed Header" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow" aria-hidden="true">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="false" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvcm2">
                            <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
            <div class="fd-dynamic-page__tabs--overflow">
                <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--sm fd-dynamic-page__tabs--add-shadow" role="tablist">
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="fuCwV554" href="#fuCwV554" role="tab">
                            <span class="fd-tabs__tag">
                                Link
                            </span>
                        </a>
                    </li>
                    <li role="listitem" class="fd-tabs__item">
                        <a class="fd-tabs__link" aria-controls="AiWfz169" aria-selected="true" href="#AiWfz169" role="tab">
                            <span class="fd-tabs__tag">
                                Selected
                            </span>
                        </a>
                    </li>
                </ul>  
            </div>
        </header>     
        <div class="fd-dynamic-page__content fd-dynamic-page__content--sm">
            <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV554" role="tabpanel">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            </div>
            <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz169" role="tabpanel">
                <h4>This is an example of a summary line, without the expand/collapse feature.</h4>
                <br />
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
            </div>
        </div>
        <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
            <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                </div>
                <div class="fd-bar__element">
                    <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                </div>
            </div>
        </footer>
    </section>
</div>
<br /><br />
`;

mobile.storyName = 'Mobile';
mobile.parameters = {
    docs: {
        storyDescription: `The dynamic page displays on mobile screens with the S size. To optimize dynamic page for mobile, add these modifier classes to the following elements:
        
| Element | Modifier class |
| ----------------: | :------------ |
| Title Area | \`fd-dynamic-page__title-area--sm\` |
| Breadcrumb | \`fd-dynamic-page__breadcrumb--sm\` |
| Header | \`fd-dynamic-page__collapsible-header--sm\` |
| Tabs | \`fd-dynamic-page__tabs--sm\` |
| Content | \`fd-dynamic-page__content--sm\` |
| Summary line (optional) | \`fd-dynamic-page__summarized-title-area--sm\` |
 
It is recommended to add a summary line insead of the expand/collapse header feature so users can better focus on the page content. To display a summary line, 
add \`fd-dynamic-page__summarized-title\` in the \`fd-dynamic-page__summarized-title-area\` element.`
    }
};

export const expandable = () => `
    <hr />
    <h3>1:  Header with both collapse and pin buttons, expanded by default. </h3>
    <hr />
    <br /><br />    
    <section class="fd-dynamic-page" aria-label="Dynamic Page Expandable Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--xl" tabindex="0">
                <nav aria-label="Breadcrumbs">
                    <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                    </ul>
                </nav>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title"> Balenciaga Tripple S Trainers </div>
                    <div class="fd-dynamic-page__title-content"> Header with both collapse and pin buttons, expanded by default</div>
                    <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                        <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Survey">
                                <i class="sap-icon--survey"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Pool">
                                <i class="sap-icon--pool"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Chart">
                                <i class="sap-icon--pie-chart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--xl" role="region"  aria-hidden="false" id="fddplhvc1" aria-label="Default expanded header" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="true" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc1">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                    <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                            aria-label="Pin this">
                            <i class="sap-icon--pushpin-off"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
    <br /><br />
    <br /><br />

    <hr />
    <h3>2: Collapsed Header with both expand and pin buttons. </h3>
    <hr />
    <br /><br />
    <section class="fd-dynamic-page" aria-label="Dynamic Page Collapsed Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--xl fd-dynamic-page__title-area--collapsed" tabindex="0">
                <nav aria-label="Breadcrumbs">   
                    <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                    </ul>
                </nav>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title fd-dynamic-page__title--collapsed"> Balenciaga Tripple S Trainers Model 123456AB On Sale </div>
                    <div class="fd-dynamic-page__title-content">Collapsed Header with both expand and pin buttons </div>
                    <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                        <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Survey">
                                <i class="sap-icon--survey"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Pool">
                                <i class="sap-icon--pool"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Chart">
                                <i class="sap-icon--pie-chart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--xl" role="region"  aria-hidden="true" id="fddplhvc2"  aria-label="Collapsed header">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="false" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc2">
                            <i class="sap-icon--slim-arrow-down"></i>
                    </button>
                    <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                            aria-label="Pin this">
                            <i class="sap-icon--pushpin-off"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
    <br /><br />
    <br /><br />
    <hr />
    <h3>3: The header can only be expanded/collapsed, not pinned.</h3>
    <hr />
    <br /><br />

    <section class="fd-dynamic-page" aria-label="Dynamic Page Pinnable Example">
        <header class="fd-dynamic-page__header">
            <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--xl" tabindex="0">
                <nav aria-label="Breadcrumbs">  
                    <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                        <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                        <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                    </ul>
                </nav>
                <div class="fd-dynamic-page__title-container">
                    <div class="fd-dynamic-page__title"> Balenciaga Tripple S Trainers </div>
                    <div class="fd-dynamic-page__title-content"> The header can only be expanded/collapsed, not pinned. </div>
                    <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                        <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                        <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                        <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--transparent" aria-label="Survey">
                                <i class="sap-icon--survey"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Pool">
                                <i class="sap-icon--pool"></i>
                            </button>
                            <button class="fd-button fd-button--transparent" aria-label="Chart">
                                <i class="sap-icon--pie-chart"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
            </div>
            <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--xl" role="region" id="fddplhvc3" aria-hidden="false"  aria-label="Pinned header">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
            </div>
            <div class="fd-dynamic-page__collapsible-header-visibility-container">
                <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                    <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                            aria-label="See More" 
                            aria-expanded="true" 
                            aria-haspopup="true" 
                            aria-controls="fddplhvc3">
                            <i class="sap-icon--slim-arrow-up"></i>
                    </button>
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
            </div>
        </header>
        <div class="fd-dynamic-page__content fd-dynamic-page__content--xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
            eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
            dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
        </div>
    </section>
    <br /><br />
`;

expandable.storyName = 'Expandable';
expandable.parameters = {
    docs: {
        storyDescription: `As demonstrated earlier, the dynamic page header can be either displayed or hidden with the expand/collapse buttons. Users can select the pin button to keep the header displayed (enabling the sticky feature). 
        To collapse the dynamic page, add the \`--collapsed\` modifier class to the title area and title elements.`
    }
};

export const rtl = () => `
    <div dir="rtl">
        <section class="fd-dynamic-page" aria-label="Dynamic Page RTL Example">
            <header class="fd-dynamic-page__header">
                <div class="fd-dynamic-page__title-area fd-dynamic-page__title-area--xl" tabindex="0">
                    <nav aria-label="Breadcrumbs">
                        <ul class="fd-dynamic-page__breadcrumb fd-breadcrumb">
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Men</a></li>
                            <li class="fd-breadcrumb__item"><a class="fd-breadcrumb__link" tabindex="0" href="#">Shoes</a></li>
                            <li class="fd-breadcrumb__item"><a aria-current="page" class="fd-breadcrumb__link" tabindex="0" href="#">Running Shoes</a></li>
                        </ul>
                    </nav>
                    <div class="fd-dynamic-page__title-container">
                        <div class="fd-dynamic-page__title"> Balenciaga Tripple S Trainers </div>
                        <div class="fd-dynamic-page__title-content"> Some RANDOM things </div>
                        <div role="toolbar" aria-label="Product actions" class="fd-dynamic-page__toolbar fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                            <button class="fd-button fd-button--compact fd-button--positive">Accept</button>
                            <button class="fd-button fd-button--compact fd-button--reject">Reject</button>
                            <div role="toolbar" aria-label="Global actions" class="fd-dynamic-page__toolbar--actions fd-toolbar fd-toolbar--clear fd-toolbar--transparent">
                                <button class="fd-button fd-button--transparent" aria-label="Survey">
                                    <i class="sap-icon--survey"></i>
                                </button>
                                <button class="fd-button fd-button--transparent" aria-label="Pool">
                                    <i class="sap-icon--pool"></i>
                                </button>
                                <button class="fd-button fd-button--transparent" aria-label="Chart">
                                    <i class="sap-icon--pie-chart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="fd-dynamic-page__subtitle"> Oversized multimaterial sneakers with quilted effect </div>
                </div>
                <div class="fd-dynamic-page__collapsible-header fd-dynamic-page__collapsible-header--xl" role="region" id="fddplhvc7" aria-label="RTL Header">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam possimus corrupti architecto perspiciatis, 
                    delectus necessitatibus incidunt numquam asperiores tenetur iure. 
                    Cum consequuntur impedit repellendus esse, facere autem optio consequatur nobis?
                </div>
                <div class="fd-dynamic-page__collapsible-header-visibility-container fd-dynamic-page__collapsible-header-visibility-container--no-shadow">
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--left-gradient"></div>
                    <div role="toolbar" aria-label="Header actions" class="fd-dynamic-page__collapsible-header-visibility-container--button-group">
                        <button class="fd-dynamic-page__collapse-button fd-button fd-button--compact" 
                                aria-label="See More" 
                                aria-expanded="true" 
                                aria-haspopup="true" 
                                aria-controls="fddplhvc7">
                                <i class="sap-icon--slim-arrow-up"></i>
                        </button>
                        <button class="fd-dynamic-page__pin-button fd-button fd-button--compact" 
                                aria-label="Pin this">
                                <i class="sap-icon--pushpin-off"></i>
                        </button>
                    </div>
                    <div class="fd-dynamic-page__collapsible-header-visibility-container--right-gradient"></div>
                </div>
                <div class="fd-dynamic-page__tabs--overflow">
                    <ul class="fd-tabs fd-tabs--l fd-dynamic-page__tabs fd-dynamic-page__tabs--xl fd-dynamic-page__tabs--add-shadow" role="tablist">
                        <li role="listitem" class="fd-tabs__item">
                            <a class="fd-tabs__link" aria-controls="fuCwV555" href="#fuCwV555" role="tab">
                                <span class="fd-tabs__tag">
                                    Link
                                </span>
                            </a>
                        </li>
                        <li role="listitem" class="fd-tabs__item">
                            <a class="fd-tabs__link" aria-controls="AiWfz164" aria-selected="true" href="#AiWfz164" role="tab">
                                <span class="fd-tabs__tag">
                                    Selected
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
            <div class="fd-dynamic-page__content fd-dynamic-page__content--xl">
                <div class="fd-tabs__panel" aria-expanded="false" id="fuCwV555" role="tabpanel">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam 
                    eum tempore aliquid dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum illo voluptatem, unde voluptate aliquam eum tempore aliquid 
                    dolorem cumque ullam perspiciatis omnis et asperiores dolores, consequatur, suscipit sint animi amet?
                </div>
                <div class="fd-tabs__panel" aria-expanded="true" id="AiWfz164" role="tabpanel" >
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                    Dolor sit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius assumenda, quidem natus optio repudiandae deleniti 
                    in atque quis, sed cum asperiores minus rerum incidunt unde quod fuga amet ea reprehenderit.
                </div>
            </div>
            <footer class="fd-bar fd-bar--floating-footer" style="position:relative">
                <div role="toolbar" aria-label="Finalizing actions" class="fd-bar__right">
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--emphasized fd-button--compact">Save</button>
                    </div>
                    <div class="fd-bar__element">
                        <button aria-label="button" class="fd-button fd-button--transparent fd-button--compact">Cancel</button>
                    </div>
                </div>
            </footer>
        </section>
    </div>
    <br /><br />
`;

rtl.storyName = 'RTL';
rtl.parameters = {
    docs: {
        storyDescription: 'The dynamic page is displayed from right to left on the screen so that it may be used internationally.'
    }
};
