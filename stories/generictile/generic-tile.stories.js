export default {
    title: 'Components/Generic Tile',
    parameters: {
        description: `
Generic Tiles can be used to represent an app similar to the SAP Fiori launchpad home page. They can display different
types of content, which are based on the data supplied by the app. They can contain an icon, a title, an informative
text, KPIs, counters and charts.
      `,
        tags: ['f3', 'a11y', 'theme'],
        docs: { iframeHeight: 500 },
        components: ['tile', 'badge', 'generic-tile']
    }
};

export const genericTileSizes = () => `
<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
</div>
`;

genericTileSizes.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The large (default) tiles are designed for screens larger than 374px. For smaller screens use the small tiles \`fd-tile--s\`.
-   Large Tile - 11 x 11rem
-   Small Tile - 9.25 x 9.25rem
        ` }
};

export const genericTileLayout = () => `
<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header"></div>
        <div class="fd-tile__content"></div>
        <div class="fd-tile__footer"></div>
    </div>
</div>
            `;
genericTileLayout.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The generic tile control supports two tile dimensions - 1×1 (default) and 2×1 (\`fd-tile--double\`).

-   Large Tile (1 x 1) - 11 x 11rem
-   Large Tile (2 x 1) - 22.5 x 11rem
-   Small Tile (1 x 1) - 9.25 x 9.25rem
-   Small Tile (2 x 1) - 19 x 9.25rem

The layout of the generic tile is fixed, with designated areas for the header, content area, and footer.

-   Header \`fd-tile__header\`: **required**. It contains a title and an (optional) subtitle.
-   Title \`fd-tile__title\`: **required**. Can have up to two lines of text before it is truncated (or three lines if there is no subtitle).
-   Subtitle \`fd-tile__subtitle\`: **optional**. Can have one line of text before it is truncated.
-   Content \`fd-tile__content\`: **optional**.
-   Footer \`fd-tile__footer\`: **optional**. Can contain a refresh icon \`sap-icon--refresh\` and status.
        ` }
};

export const genericTileContentColumns = () => `
<div class="fddocs-container">
    <div role="button" aria-label="button" tabindex="0" class="fd-tile">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
    <div role="button" aria-label="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--double">
        <div class="fd-tile__header fd-tile__header--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
            <div class="fd-tile__section" style="background-color: #C0E0FA"></div>
        </div>
    </div>
</div>
`;

genericTileContentColumns.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The tiles header, content and footer can be split into two columns with a 0.25rem vertical padding. Use the (\`*--2-col\`) modifier classes to achieve the 2-col design.

- Header \`fd-tile__header fd-tile__header--2-col\`
    - Section \`fd-tile__section\`
    - Section \`fd-tile__section\`
- Content \`fd-tile__content fd-tile__content--2-col\`
    - Section \`fd-tile__section\`
    -Section \`fd-tile__section\`
- Footer \`fd-tile__footer fd-tile__footer--2-col\`
    - Section \`fd-tile__section\`.
    - Section \`fd-tile__section\`.

The background color is used to illustrate the column sections in the documentation page.
        ` }
};

export const launchTile = () => `
<h4>Launch Tile With Numeric Content and Launch Icon</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__launch-icon-container">
                    <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__launch-icon-container">
                    <i role="presentation" class="fd-numeric-content__launch-icon sap-icon--line-charts"></i>
                </div>
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">1234</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile With Combined Header and Content</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--s fd-tile--launch">
        <div class="fd-tile__header-content">
            <div class="fd-tile__title">Launch Tile Title Text Lorem ipsum dolor sit amet, consectetur elit</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile (Profile)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/60/60/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/50/50/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>Launch Tile (Logo)</h4>
<br>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Logo) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <img class="fd-tile__logo" src="//unpkg.com/fundamental-styles/dist/images/sap-logo.png" srcset="//unpkg.com/fundamental-styles/dist/images/sap-logo@2x.png 1x, //unpkg.com/fundamental-styles/dist/images/sap-logo@3x.png 2x, //unpkg.com/fundamental-styles/dist/images/sap-logo@4x.png 3x" alt="SAP">
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
            `;

launchTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Structure of the Numeric Content

-   Launch Icon Container: \`fd-numeric-content__launch-icon-container\`
    -   Launch Icon: \`fd-numeric-content__launch-icon sap-icon--line-charts\`
-   KPI Container **(optional)**: \`fd-numeric-content__kpi-container\`
    -   KPI **(optional)**: \`fd-numeric-content__kpi\`
        -   States:
            -   neutral (default)
            -   positive: \`fd-numeric-content__kpi--positive\`
            -   negative: \`fd-numeric-content__kpi--negative\`
            -   critical: \`fd-numeric-content__kpi--critical\`
            -   informative: \`fd-numeric-content__kpi--informative\`
-   Scale Container **(optional)**: \`fd-numeric-content__scale-container\`
    -   Scale **(optional)**: \`fd-numeric-content__scale\`
        -   States:
            -   neutral (default)
            -   positive: \`fd-numeric-content__scale--positive\`
            -   negative: \`fd-numeric-content__scale--negative\`
            -   critical: \`fd-numeric-content__scale--critical\`
            -   informative: \`fd-numeric-content__scale--informative\`
        -   Deviation Arrows **(optional)**: \`sap-icon--down\` or \`sap-icon--up\`
        -   Text **(optional)**: \`fd-numeric-content__scale-text\`

Numeric Content Sizes:

-   L-Numeric Content size. Longest combination for 4-character languages
-   M-Numeric Content size. Longest combination for 6-character languages
-   S-Numeric Content size. Longest combination for 8-character languages

The header can contain a maximum of 3 lines; all 3 lines can be used for the title or one of the lines can be used for a subtitle. If a 4 line title or an optional subtitle line is required, the fd-tile_header-content can be used to represent a header and will merge the content containers into one tile.

        ` }
};

export const kpiTile = () => `
<h4>KPI Tile with L-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">M</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi">1Ñç</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">milçM</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer fd-tile__footer--2-col">
            <div class="fd-tile__section">
                <i class="fd-tile__refresh sap-icon--refresh" aria-label="Refresh"></i>
                <span class="fd-tile__footer-text">Now</span>
            </div>
            <div class="fd-tile__section"><span class="fd-tile__footer-text">Footer</span></div>
        </div>
    </div>
</div>
<br>
<br>
<h4>KPI Tile with M-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text eiusmod tempor incididunt ut labore </div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--positive">123</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--positive">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Title Text eiusmod tempor incididunt</div>
            <div class="fd-tile__subtitle">Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--m fd-numeric-content--small-tile">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">-889</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--negative">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--up"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<br>
<br>
<h4>KPI Tile with S-Size Numeric Content</h4>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--s">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--critical">12</div>
                </div>
                <div class="fd-numeric-content__scale-container">
                    <div class="fd-numeric-content__scale fd-numeric-content__scale--critical">
                        <i role="presentation" class="fd-numeric-content__scale-arrow sap-icon--down"></i>
                        <span class="fd-numeric-content__scale-text">%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--kpi fd-tile--s">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Tile Title Text</div>
            <div class="fd-tile__subtitle">Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content">
            <div class="fd-numeric-content fd-numeric-content--small-tile fd-numeric-content--m">
                <div class="fd-numeric-content__kpi-container">
                    <div class="fd-numeric-content__kpi fd-numeric-content__kpi--informative">1.95</div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">CAD, Current Quarter</span>
        </div>
    </div>
</div>
`;

kpiTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Key Performance Indicators (KPIs) are used to measure and monitor a company’s performance at a strategic and operational level. The KPI Tile control supports a limited number of digits which varies depending on the size of the tile.

-   L-Numeric Content size. Longest combination for 4-character languages
-   M-Numeric Content size. Longest combination for 6-character languages
-   S-Numeric Content size. Longest combination for 8-character languages

Structure of the Numeric Content

-   KPI Container: \`fd-numeric-content__kpi-container\`
    -   KPI: \`fd-numeric-content__kpi\`
        -   States:
            -   neutral (default)
            -   positive: \`fd-numeric-content__kpi--positive\`
            -   negative: \`fd-numeric-content__kpi--negative\`
            -   critical: \`fd-numeric-content__kpi--critical\`
            -   informative: \`fd-numeric-content__kpi--informative\`
-   Scale Container **(optional)**: \`fd-numeric-content__scale-container\`
    -   Scale **(optional)**: \`fd-numeric-content__scale\`
        -   States:
            -   neutral (default)
            -   positive: \`fd-numeric-content__scale--positive\`
            -   negative: \`fd-numeric-content__scale--negative\`
            -   critical: \`fd-numeric-content__scale--critical\`
            -   informative: \`fd-numeric-content__scale--informative\`
        -   Deviation Arrows **(optional)**: \`sap-icon--down\` or \`sap-icon--up\`
        -   Text **(optional)**: \`fd-numeric-content__scale-text\`
        ` }
};

export const feedTile = () => `
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>
            `;

feedTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The Feed tile can be used to show new notification content in a news feed. If there are no new notifications, the tile displays the most recent notification.
To create a Feed tile, use the \`fd-tile--feed\` modifier class.
        ` }
};

export const badgeTile = () => `
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch">
        <div class="fd-badge">Badge</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/60/60/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/60/60/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--feed">
        <div class="fd-badge">New</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt magna aliqua.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi">35</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--feed">
        <div class="fd-badge">Badge with a very very very very very very very very very long text</div>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Feed Tile Title Text sed do eiusmod</div>
            <div class="fd-tile__subtitle">Feed Tile Subtitle Text</div>
        </div>
        <div class="fd-tile__content fd-tile__content--2-col">
            <div class="fd-tile__section">
                <div class="fd-tile__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod.</div>
                <div class="fd-tile__content-byline">About 1 minute ago.</div>
            </div>
            <div class="fd-tile__section">
                <div class="fd-numeric-content fd-numeric-content--m">
                    <div class="fd-numeric-content__kpi-container">
                        <div class="fd-numeric-content__kpi fd-numeric-content__kpi--negative">9</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer</span>
        </div>
    </div>
</div>
            `;

badgeTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
Badges are used to display very short and important information.
Use a badge on a Tile if the Tile is new or has been newly added to a page.
Tiles do not display badges in action/edit mode.
        ` }
};

export const slideTile = () => `
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/200/200/nature/10/')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--slide fd-tile--s">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/200/200/nature/10/')"></div>
        <button aria-label="toggle play button" class="fd-tile__toggle"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/400/200/nature/10/')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/400/200/nature/10/')"></div>
        <button aria-label="toggle pause button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>
            `;

slideTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
The Slide Tile contains a news headline, a background image, the news source, and a time stamp. A start and pause button are always displayed on touch devices and can be revealed by hovering the mouse over the tile on desktop devices. The dots on the bottom of each tile identify the number of pages they contain.
To create a Slide Tile, use the \`fd-tile--slide\` modifier class.
        ` }
};

export const tileInActionMode = () => `
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/60/60/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Footer Text</span>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--launch fd-tile--s fd-tile--action">
        <div class="fd-tile__overlay"></div>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__header">
            <div class="fd-tile__title">Launch Tile (Profile) Title Text</div>
            <div class="fd-tile__subtitle">Launch Tile Subtitle</div>
        </div>
        <div class="fd-tile__content">
            <span class="fd-tile__profile-img" style="background-image: url('http://lorempixel.com/50/50/nature/10/')" role="presentation" aria-label="Profile Image"></span>
        </div>
        <div class="fd-tile__footer">
            <span class="fd-tile__footer-text">Unit, Notification</span>
        </div>
    </div>
</div>
<div class="fddocs-container">
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/400/200/nature/10/')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
    <div role="button" tabindex="0" class="fd-tile fd-tile--double fd-tile--s fd-tile--slide fd-tile--action">
        <div class="fd-tile__background-img" style="background-image: url('http://lorempixel.com/400/200/nature/10/')"></div>
        <div class="fd-tile__overlay"></div>
        <button aria-label="toggle button" class="fd-tile__toggle fd-tile__toggle--pause"></button>
        <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button><button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
        <div class="fd-tile__container">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Wind Map: Monitoring Real-Time and Forecasted Wind Conditions across the Globe</div>
                <div class="fd-tile__subtitle">SAP News</div>
            </div>
            <div class="fd-tile__footer">
                <span class="fd-tile__footer-text">May 14, 2020</span>
            </div>
            <div class="fd-tile__page-indicator">
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot fd-tile__dot--active"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
                <span class="fd-tile__dot"></span>
            </div>
        </div>
    </div>
</div>
`;

tileInActionMode.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
In action mode view, the close button is displayed on the top right-hand corner of the Tile. The action icon is only an indicator and is displayed on the bottom right-hand corner. The click/touch area fills the entire Tile, excluding the click/touch area reserved for the close button. For Action Mode use the \`fd-tile--action\` modifier class.
        ` }
};

export const lineTile = () => `
<h4>Line Tile - Floating Behaviour, Cozy Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container">
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem </div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container fd-tile-container--list">
                <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Compact Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container">
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Compact Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container fd-tile-container--list">
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--compact fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cozy Mode, With Badge</h4>
<div class="fddocs-container">
    <div class="fd-tile-container">
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title perspiciatis unde omnis iste natus error</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia voluptas</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title accusamus dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle facilis distinctio</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy Mode, With Badge</h4>
<div class="fddocs-container">
    <div class="fd-tile-container fd-tile-container--list">
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title accusamus et iusto odio dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle facilis est et expedita distinctio</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line">
            <div class="fd-tile__header">
                <div class="fd-tile__title-container">
                    <div class="fd-badge">Badge</div>
                    <div class="fd-tile__title">Line Tile Title praesentium voluptatum deleniti atque</div>
                </div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit</div>
            </div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - Floating Behaviour, Cozy and Action Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container">
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Disabled Line Tile Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle enim ipsam voluptatem quia</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
    </div>
</div>
<br><br><br>
<h4>Line Tile - List Behaviour, Cozy and Action Mode</h4>
<div class="fddocs-container">
    <div class="fd-tile-container fd-tile-container--list">
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title very very very very very very long text</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle very very very very very very long text</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button></div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action is-disabled">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Disabled Line Tile Title sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Very Long Title perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</div>
                <div class="fd-tile__subtitle">Line Tile Very Long Subtitle enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
        </div>
        <div role="button" tabindex="0" class="fd-tile fd-tile--line fd-tile--action">
            <div class="fd-tile__header">
                <div class="fd-tile__title">Line Tile Title iusto odio dignissimos ducimus</div>
                <div class="fd-tile__subtitle">Line Tile Subtitle lorem ipsum dolor sit amet</div>
            </div>
            <div class="fd-tile__action-container">
                <button aria-label="indicator button" tabindex="-1" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-indicator">
                    <i class="sap-icon--overflow" role="presentation"></i>
                </button>
                <button aria-label="close button" class="fd-button fd-button--compact fd-button--transparent fd-tile__action-close">
                    <i class="sap-icon--decline" role="presentation"></i>
                </button>
            </div>
        </div>
    </div>
</div>
            `;

lineTile.parameters = {
    docs: {
        iframeHeight: 500,
        storyDescription: `
-   Line Tile Container: \`fd-tile-container\`. The container controls the behaviour of the tiles - **Floating** (default) and **List** (\`fd-tile-container--list\`). For screen sizes less than 450px use the **List** behaviour. For bigger screens use the default **Floating** behaviour.
    -   Line Tile: apply the \`fd-tile--line\` modifier class to \`fd-tile\`. Line Tiles have two modes - cozy (default) and compact (\`fd-tile--compact\`). *Note: the compact mode is applied only on Line Tiles. It should not be applied on the other types.
        -   Line Tile Header: \`fd-tile__header\`
            -   Title \`fd-tile__title\`: **required**. For a Line Tile with a badge the title and the badge must be wrapped in a container \`fd-tile__title-container\`.
            -   Subtitle \`fd-tile__subtitle\` **optional**.

**Breakpoints**

-   **List** behaviour: for screen sizes less than 450px - S screens.
-   **Floating** behaviour: for screen sizes greater or equal to 450px - M, L and XL screens.

**Wrapping and Overflow Behaviour**

-   **Floating** behaviour: If the content of the Tile can't fit in one line, the Tile wraps into two rows. *Note: this behaviour requires JavaScript and is not provided in Fundamental-Styles.
-   **List** behaviour: the Tile grows vertically and the text inside wraps into two rows, splitting the title in the first row and the subtitle in the second row.

**List Tile States**

-   Regular
-   Hover
-   Pressed
-   Disabled - the disabled state can only be applied on Line Tiles. The other types do not have a disabled state.

**Action Mode**

The controls are wrapped in a container \`fd-tile__action-container\` which is right aligned within the tile. The default spacing between the header and actions container for List View in Action mode is 0.25rem. Gradient masking is also supported in edit mode.

        ` }
};
