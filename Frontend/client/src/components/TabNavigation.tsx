interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'fas fa-info-circle' },
    { id: 'cast', label: 'Cast & Crew', icon: 'fas fa-users' },
    { id: 'videos', label: 'Videos', icon: 'fas fa-play-circle' },
    { id: 'reviews', label: 'Reviews', icon: 'fas fa-star' }
  ];

  return (
    <nav className="bg-card/50 backdrop-blur-sm border-b border-border sticky top-0 z-40" data-testid="tab-navigation">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center space-x-2 px-4 sm:px-6 py-4 text-sm sm:text-base font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab.id 
                  ? 'text-accent border-b-2 border-accent bg-accent/10' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                }
              `}
              data-testid={`tab-${tab.id}`}
            >
              <i className={`${tab.icon} text-sm`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}