import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/email-field';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('email-field-styles')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  protected override render() {
    return html`
        <!-- tag::snippet[] -->
        <vaadin-email-field theme="align-right small helper-above-field"
          label="Label" helper-text="Helper text" value="foo@bar.com">
        </vaadin-email-field>
        <!-- end::snippet[] -->
    `;
  }
}
