const fs = require('fs');

function replaceImageBySlug(file, replacements) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [slug, imgKey] of Object.entries(replacements)) {
        const regex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*)"([^"]+)"`, "g");
        content = content.replace(regex, `$1"${imgKey}"`);
    }
    fs.writeFileSync(file, content, 'utf8');
}

replaceImageBySlug('src/data/services-hvac.ts', {
    'ac-installation': 'svc-ac-install',
    'ac-repair': 'svc-ac-repair',
    'ac-maintenance': 'svc-ac-maintenance',
    'heating-installation': 'svc-heating-install',
    'heating-repair': 'svc-heating-repair',
    'heating-maintenance': 'svc-heating-maintenance',
    'furnace-installation': 'svc-furnace-install',
    'furnace-repair': 'svc-furnace-repair',
    'furnace-maintenance': 'svc-furnace-maintenance',
    'heat-pump-installation': 'svc-heat-pump-install'
});

replaceImageBySlug('src/data/services-plumbing.ts', {
    'plumbing-repair': 'svc-plumbing-repair',
    'water-heater-services': 'svc-water-heater',
    'drain-and-sewer-services': 'svc-drain-sewer'
});

console.log('Images updated.');
