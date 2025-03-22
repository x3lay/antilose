"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Feature {
  name: string;
  enabled: boolean;
  description?: string;
}

const FeatureButton = ({ feature, onClick }: { feature: Feature; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button
        variant="outline"
        className={`justify-start w-full transition-all duration-300 ${
          feature.enabled ? 'bg-primary/20 border-primary/50' : ''
        } hover:bg-primary/10 hover:border-primary/50`}
        onClick={onClick}
      >
        <span className="relative z-10">{feature.name}</span>
      </Button>
      {isHovered && feature.description && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 bottom-full mb-2 left-0 w-64 p-3 rounded-lg bg-background/95 backdrop-blur-sm border border-border/50 shadow-xl"
        >
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

const TabSection = ({ title, description, features }: { title: string; description: string; features: Feature[] }) => {
  const [enabledFeatures, setEnabledFeatures] = useState<Set<string>>(new Set());

  const toggleFeature = (featureName: string) => {
    const newEnabledFeatures = new Set(enabledFeatures);
    if (newEnabledFeatures.has(featureName)) {
      newEnabledFeatures.delete(featureName);
    } else {
      newEnabledFeatures.add(featureName);
    }
    setEnabledFeatures(newEnabledFeatures);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg font-semibold mb-4"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mb-4"
        >
          {description}
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <FeatureButton
                feature={{ ...feature, enabled: enabledFeatures.has(feature.name) }}
                onClick={() => toggleFeature(feature.name)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const LegitTab = () => {
  const legitFeatures: Feature[] = [
    { name: "Enable", enabled: false, description: "Enable the legit bot" },
    { name: "Aim head", enabled: false, description: "Target the head" },
    { name: "Aim body", enabled: false, description: "Target the body" },
    { name: "Aim arms", enabled: false, description: "Target the arms" },
    { name: "Aim legs", enabled: false, description: "Target the legs" },
    { name: "Triggerbot", enabled: false, description: "Automatically shoot when crosshair is on target" },
    { name: "Aimbot speed", enabled: false, description: "Adjust aimbot speed" },
    { name: "Limit radius", enabled: false, description: "Limit the aimbot radius" },
    { name: "Shoot check", enabled: false, description: "Check before shooting" },
    { name: "Scope check", enabled: false, description: "Only aim when scoped" },
    { name: "Radius", enabled: false, description: "Set the aimbot radius" },
    { name: "Radius in scope", enabled: false, description: "Set the radius when scoped" },
    { name: "Show radius", enabled: false, description: "Display the aimbot radius" },
    { name: "Radius color", enabled: false, description: "Set the color of the radius" },
    { name: "Hitbox multiplier", enabled: false, description: "Adjust hitbox size" },
    { name: "Hitbox value (2-6)", enabled: false, description: "Set hitbox value" },
  ];

  return (
    <TabSection
      title="LEGIT"
      description="Legit features for a more natural gameplay experience."
      features={legitFeatures}
    />
  );
};

const VisualsTab = () => {
  const playerFeatures: Feature[] = [
    { name: "ESP", enabled: false, description: "Enable ESP" },
    { name: "ESP Only visible", enabled: false, description: "Only show visible players" },
    { name: "Box", enabled: false, description: "Show player boxes" },
    { name: "Box color", enabled: false, description: "Set box color" },
    { name: "Snaplines", enabled: false, description: "Show snaplines" },
    { name: "Snaplines color", enabled: false, description: "Set snaplines color" },
    { name: "Player name", enabled: false, description: "Show player names" },
    { name: "Health bar", enabled: false, description: "Show health bars" },
    { name: "Weapon name", enabled: false, description: "Show weapon names" },
    { name: "Weapon icon", enabled: false, description: "Show weapon icons" },
    { name: "Ammo bar", enabled: false, description: "Show ammo bars" },
    { name: "Grenades", enabled: false, description: "Show grenades" },
    { name: "Show money", enabled: false, description: "Display player money" },
    { name: "Show armor", enabled: false, description: "Display player armor" },
    { name: "Show armor helmet", enabled: false, description: "Display helmet status" },
    { name: "Show player device", enabled: false, description: "Display player device" },
    { name: "Show reload state", enabled: false, description: "Display reload state" },
    { name: "Show scope state", enabled: false, description: "Display scope state" },
    { name: "Show bomber", enabled: false, description: "Display bomber status" },
    { name: "Distance", enabled: false, description: "Show distance to players" },
    { name: "Skeleton", enabled: false, description: "Show player skeletons" },
    { name: "Sounds", enabled: false, description: "Enable sound ESP" },
    { name: "Show hitboxes", enabled: false, description: "Display hitboxes" },
    { name: "Dropped weapons", enabled: false, description: "Show dropped weapons" },
    { name: "Weapons Name", enabled: false, description: "Show weapon names" },
    { name: "Weapons icon", enabled: false, description: "Show weapon icons" },
    { name: "Weapons ammo", enabled: false, description: "Show weapon ammo" },
    { name: "Weapons distance", enabled: false, description: "Show weapon distance" },
    { name: "Camera field of view", enabled: false, description: "Adjust camera FOV" },
    { name: "Left arm", enabled: false, description: "Show left arm" },
    { name: "Invert knife arm", enabled: false, description: "Invert knife arm" },
    { name: "Viewmodel pos", enabled: false, description: "Adjust viewmodel position" },
    { name: "Viewmodel fov", enabled: false, description: "Adjust viewmodel FOV" },
    { name: "Grenade Name", enabled: false, description: "Show grenade names" },
    { name: "Grenade Trajectory", enabled: false, description: "Show grenade trajectory" },
    { name: "Grenade Warning", enabled: false, description: "Warn about grenades" },
    { name: "Detonated Grenades", enabled: false, description: "Show detonated grenades" },
    { name: "Grenade Timer", enabled: false, description: "Show grenade timer" },
    { name: "Grenade Radius", enabled: false, description: "Show grenade radius" },
  ];

  return (
    <TabSection
      title="VISUALS"
      description="Visual features for enhanced gameplay."
      features={playerFeatures}
    />
  );
};

const ChangersTab = () => {
  const changerFeatures: Feature[] = [
    { name: "Skin changer", enabled: false, description: "Change weapon skins" },
    { name: "Medal changer", enabled: false, description: "Change medals" },
    { name: "Frame changer", enabled: false, description: "Change frames" },
    { name: "Item changer", enabled: false, description: "Change items" },
    { name: "Inventory", enabled: false, description: "Manage inventory" },
  ];

  return (
    <TabSection
      title="CHANGERS"
      description="Change skins, medals, and other items."
      features={changerFeatures}
    />
  );
};

const MiscTab = () => {
  const miscFeatures: Feature[] = [
    { name: "Fakelags", enabled: false, description: "Simulate lag" },
    { name: "Lag timer", enabled: false, description: "Set lag timer" },
    { name: "Unlag timer", enabled: false, description: "Set unlag timer" },
    { name: "Random lag", enabled: false, description: "Enable random lag" },
    { name: "Fake ping (1-999)", enabled: false, description: "Set fake ping" },
    { name: "Antiaim", enabled: false, description: "Enable antiaim" },
    { name: "Autowin", enabled: false, description: "Automatically win rounds" },
    { name: "Fast game", enabled: false, description: "Speed up the game" },
    { name: "Fast strafes", enabled: false, description: "Enable fast strafes" },
    { name: "Fast walk", enabled: false, description: "Enable fast walk" },
    { name: "No recoil", enabled: false, description: "Remove recoil" },
    { name: "No spread", enabled: false, description: "Remove spread" },
    { name: "Rapid fire", enabled: false, description: "Enable rapid fire" },
    { name: "Wallshot", enabled: false, description: "Shoot through walls" },
    { name: "High damage", enabled: false, description: "Increase damage" },
    { name: "High impulse", enabled: false, description: "Increase impulse" },
    { name: "High armor penetration", enabled: false, description: "Increase armor penetration" },
    { name: "Instant reload", enabled: false, description: "Reload instantly" },
    { name: "Instant switch", enabled: false, description: "Switch weapons instantly" },
    { name: "One bullet", enabled: false, description: "One bullet kill" },
    { name: "Infinity clip ammo", enabled: false, description: "Infinite clip ammo" },
    { name: "Infinity backpack ammo", enabled: false, description: "Infinite backpack ammo" },
    { name: "Infinity grenades", enabled: false, description: "Infinite grenades" },
    { name: "Fast knife", enabled: false, description: "Enable fast knife" },
    { name: "No grenades damage", enabled: false, description: "Disable grenade damage" },
    { name: "Instant defuse", enabled: false, description: "Defuse instantly" },
    { name: "Defuse everywhere", enabled: false, description: "Defuse anywhere" },
    { name: "Instant plant", enabled: false, description: "Plant bomb instantly" },
    { name: "Infinity money", enabled: false, description: "Infinite money" },
    { name: "Kills hack", enabled: false, description: "Hack kills" },
    { name: "Assist hack", enabled: false, description: "Hack assists" },
    { name: "Deaths hack", enabled: false, description: "Hack deaths" },
    { name: "Score hack", enabled: false, description: "Hack score" },
    { name: "MVP Hack", enabled: false, description: "Hack MVP" },
    { name: "Always unlock inputs", enabled: false, description: "Unlock inputs" },
    { name: "Fly", enabled: false, description: "Enable flying" },
    { name: "Force lag", enabled: false, description: "Force lag" },
    { name: "Teleport hack", enabled: false, description: "Enable teleport" },
  ];

  return (
    <TabSection
      title="MISC"
      description="Miscellaneous features for various enhancements."
      features={miscFeatures}
    />
  );
};

const FunctionsSection = () => {
  const [activeTab, setActiveTab] = useState("legit");

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0">
        <motion.div
          className="w-full h-full bg-gradient-radial from-primary/20 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Product <span className="gradient-text">Functions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              To learn about the function description, please hover your mouse over it.
            </p>
          </motion.div>
        </div>

        <Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-5 gap-4 mb-8 bg-background/50 p-1">
              {["rage", "legit", "visuals", "changers", "misc"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="relative overflow-hidden data-[state=active]:bg-primary/20"
                >
                  <span className="relative z-10 capitalize">{tab}</span>
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.2 }}
  >
    <TabsContent value="rage">
      {/* рейдж вкладка пока в разработке */}
    </TabsContent>
    <TabsContent value="legit">
      <LegitTab />
    </TabsContent>
    <TabsContent value="visuals">
      <VisualsTab />
    </TabsContent>
    <TabsContent value="changers">
      <ChangersTab /> {/* Добавлен компонент ChangersTab */}
    </TabsContent>
    <TabsContent value="misc">
      <MiscTab />
    </TabsContent>
  </motion.div>
</AnimatePresence>
          </Tabs>
        </Card>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-block dark-glass px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Description:</span> Full function that our SoftWare have a now.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunctionsSection; 