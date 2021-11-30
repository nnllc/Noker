Content.makeFrontInterface(1000, 600);

//Website Logo

inline function onLogoWebButtonControl(component, value)
{
	Engine.openWebsite("https://newnationllc.com");
};

Content.getComponent("LogoWebButton").setControlCallback(onLogoWebButtonControl);


//Main FX Knob Controls
const var NokTopsFX = Synth.getEffect("NokTopsFX");
const var NokLowsFX = Synth.getEffect("NokLowsFX");

inline function onNokMainFXknbControl(component, value)
{
	NokTopsFX.setAttribute(NokTopsFX.CompressorThreshold, value);
	NokLowsFX.setAttribute(NokLowsFX.CompressorThreshold, value);
};

Content.getComponent("NokMainFXknb").setControlCallback(onNokMainFXknbControl);

//Hidden ComboBoxes for Drum Presets
//Kick
const var KickSampler = Synth.getSampler("KickSampler");

const var sampleMaps = Sampler.getSampleMapList();

const var KickCombo = Content.getComponent("KickCombo");
KickCombo.set("items", sampleMaps.join("\n"));

inline function onKickComboControl(component, value)
{
	KickSampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("KickCombo").setControlCallback(onKickComboControl);
//Snare1
const var Snare1Sampler = Synth.getSampler("Snare1Sampler");

const var Snare1Combo = Content.getComponent("Snare1Combo");
Snare1Combo.set("items", sampleMaps.join("\n"));

inline function onSnare1ComboControl(component, value)
{
	Snare1Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Snare1Combo").setControlCallback(onSnare1ComboControl);
//Snare2
const var Snare2Sampler = Synth.getSampler("Snare2Sampler");

const var Snare2Combo = Content.getComponent("Snare2Combo");
Snare2Combo.set("items", sampleMaps.join("\n"));

inline function onSnare2ComboControl(component, value)
{
	Snare2Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Snare2Combo").setControlCallback(onSnare2ComboControl);
//Clap1
const var Clap1Sampler = Synth.getSampler("Clap1Sampler");

const var ClapCombo1 = Content.getComponent("ClapCombo1");
ClapCombo1.set("items", sampleMaps.join("\n"));

inline function onClapCombo1Control(component, value)
{
	Clap1Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("ClapCombo1").setControlCallback(onClapCombo1Control);
//Clap2
const var Clap2Sampler = Synth.getSampler("Clap2Sampler");

const var ClapCombo2 = Content.getComponent("ClapCombo2");
ClapCombo2.set("items", sampleMaps.join("\n"));

inline function onClapCombo2Control(component, value)
{
	Clap2Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("ClapCombo2").setControlCallback(onClapCombo2Control);
//Hat1
const var Hat1Sampler = Synth.getSampler("Hat1Sampler");

const var HatCombo1 = Content.getComponent("HatCombo1");
HatCombo1.set("items", sampleMaps.join("\n"));

inline function onHatCombo1Control(component, value)
{
	Hat1Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("HatCombo1").setControlCallback(onHatCombo1Control);
//Hat2
const var Hat2Sampler = Synth.getSampler("Hat2Sampler");

const var HatCombo2 = Content.getComponent("HatCombo2");
HatCombo2.set("items", sampleMaps.join("\n"));

inline function onHatCombo2Control(component, value)
{
	Hat2Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("HatCombo2").setControlCallback(onHatCombo2Control);
//Hat3
const var Hat3Sampler = Synth.getSampler("Hat3Sampler");

const var HatCombo3 = Content.getComponent("HatCombo3");
HatCombo3.set("items", sampleMaps.join("\n"));

inline function onHatCombo3Control(component, value)
{
	Hat3Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("HatCombo3").setControlCallback(onHatCombo3Control);
//Hat4
const var Hat4Sampler = Synth.getSampler("Hat4Sampler");

const var HatCombo4 = Content.getComponent("HatCombo4");
HatCombo4.set("items", sampleMaps.join("\n"));

inline function onJustComboControl(component, value)
{
	Hat4Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("HatCombo4").setControlCallback(onJustComboControl);
//OpenHat1
const var OpenHat1Sampler = Synth.getSampler("OpenHat1Sampler");

const var OHCombo1 = Content.getComponent("OHCombo1");
OHCombo1.set("items", sampleMaps.join("\n"));

inline function onOHCombo1Control(component, value)
{
	OpenHat1Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("OHCombo1").setControlCallback(onOHCombo1Control);
//OpenHat2
const var OpenHat2Sampler = Synth.getSampler("OpenHat2Sampler");

const var OHCombo2 = Content.getComponent("OHCombo2");
OHCombo2.set("items", sampleMaps.join("\n"));

inline function onOHCombo2Control(component, value)
{
	OpenHat2Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("OHCombo2").setControlCallback(onOHCombo2Control);
//Crash
const var CrashSampler = Synth.getSampler("CrashSampler");

const var CrashCombo1 = Content.getComponent("CrashCombo1");
CrashCombo1.set("items", sampleMaps.join("\n"));

inline function onCrashCombo1Control(component, value)
{
	CrashSampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("CrashCombo1").setControlCallback(onCrashCombo1Control);
//Perc1
const var Perc1Sampler = Synth.getSampler("Perc1Sampler");

const var Perc1Combo = Content.getComponent("Perc1Combo");
Perc1Combo.set("items", sampleMaps.join("\n"));

inline function onPerc1ComboControl(component, value)
{
	Perc1Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Perc1Combo").setControlCallback(onPerc1ComboControl);
//Perc2
const var Perc2Sampler = Synth.getSampler("Perc2Sampler");

const var Perc2Combo = Content.getComponent("Perc2Combo");
Perc2Combo.set("items", sampleMaps.join("\n"));

inline function onPerc2ComboControl(component, value)
{
	Perc2Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Perc2Combo").setControlCallback(onPerc2ComboControl);
//Perc3
const var Perc3Sampler = Synth.getSampler("Perc3Sampler");

const var Perc3Combo = Content.getComponent("Perc3Combo");
Perc3Combo.set("items", sampleMaps.join("\n"));

inline function onPerc3ComboControl(component, value)
{
	Perc3Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Perc3Combo").setControlCallback(onPerc3ComboControl);
//Perc4
const var Perc4Sampler = Synth.getSampler("Perc4Sampler");

const var Perc4Combo = Content.getComponent("Perc4Combo");
Perc4Combo.set("items", sampleMaps.join("\n"));

inline function onPerc4ComboControl(component, value)
{
	Perc4Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Perc4Combo").setControlCallback(onPerc4ComboControl);
//Synth Bass
const var SynthBassSampler = Synth.getSampler("SynthBassSampler");

const var SynthBassCombo = Content.getComponent("SynthBassCombo");
SynthBassCombo.set("items", sampleMaps.join("\n"));

inline function onSynthBassComboControl(component, value)
{
	SynthBassSampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("SynthBassCombo").setControlCallback(onSynthBassComboControl);
//808 Bass
const var Bass808Sampler = Synth.getSampler("Bass808Sampler");

const var Bass808Combo = Content.getComponent("Bass808Combo");
Bass808Combo.set("items", sampleMaps.join("\n"));

inline function onBass808ComboControl(component, value)
{
	Bass808Sampler.loadSampleMap(sampleMaps[value-1]);
};

Content.getComponent("Bass808Combo").setControlCallback(onBass808ComboControl);

//Custom Settings Popup
const var panel1 = Content.addPanel("panel1", 645, 36);

//const var hideShow = Content.addButton("hideShow");
const var hideShow = Content.getComponent("hideShow");

inline function onhideShowControl(number, value)
{
        panel1.showControl(value); 
}

hideShow.setControlCallback(onhideShowControl);function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 