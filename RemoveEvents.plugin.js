/**
 * @name RemoveEvents
 * @author ior_
 * @description Removes the "Events" button, its divider, and extra empty spacing in Discord servers.
 * @version 1.3.0
 */

module.exports = class RemoveEvents {
    start() {
        this.removeElements();
        this.observeChanges();
    }

    stop() {
        if (this.observer) this.observer.disconnect();
    }

    removeElements() {
        // Remove the Events button
        const eventsButton = document.querySelector('.link__2ea32.basicChannelRowLink__2ea32');
        if (eventsButton) {
            const listItem = eventsButton.closest('li'); // Get the parent <li>
            if (listItem) {
                console.log('[RemoveEvents] Removing entire Events row:', listItem);
                listItem.remove(); // Remove the whole row
            } else {
                console.log('[RemoveEvents] Removing Events button only.');
                eventsButton.remove(); // Fallback: Remove just the button
            }
        }

        // Remove the divider
        const divider = document.querySelector('.sectionDivider__629e4');
        if (divider) {
            console.log('[RemoveEvents] Removing section divider:', divider);
            divider.remove();
        }

        // Remove the empty div with height: 12px;
        const emptySpacer = document.querySelector('div[style="height: 12px;"]');
        if (emptySpacer) {
            console.log('[RemoveEvents] Removing empty spacer div:', emptySpacer);
            emptySpacer.remove();
        }
    }

    observeChanges() {
        this.observer = new MutationObserver(() => this.removeElements());
        this.observer.observe(document.body, { childList: true, subtree: true });
    }
};
