var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"en-us\">';
xmlSynonymsData += '    <Groups />';
xmlSynonymsData += '    <Directional>';
xmlSynonymsData += '        <DirectionalSynonym Stem=\"true\" From=\"network\" To=\"system\" FromStem=\"network\" />';
xmlSynonymsData += '    </Directional>';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);
