import React, { useState } from 'react';
import "./Tab.css";

const TabView = (props) => {
    const [currentTab, setCurrentTab] = useState("");

    const tabs = [
        { id: 1, tabTitle: "Tab 1", content: "Tab 1 content is showing here." },
        { id: 2, tabTitle: "Tab 2", content: "Tab 2 content is showing here." },
        { id: 3, tabTitle: "Tab 3", content: "Tab 3 content is showing here." }
    ];

    const handleTabs = (e) => {
        setCurrentTab(e.target.id)
    };

    return (
        <div className='container'>
            <div className='tabs'>
                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        id={tab.id}
                        disabled={currentTab === `${tab.id}`}
                        onClick={(handleTabs)}
                        style={
                            currentTab === `${tab.id}`
                                ? {
                                    color: "white",
                                    backgroundColor: "black"
                                }
                                : null
                        }
                    >
                        {tab.tabTitle}
                    </button>
                ))}
            </div>
            <div className='content'>
                {tabs.map((tab, i) => (
                    <div key={i}>
                        {currentTab === `${tab.id}` && (
                            <div>
                                <p>{tab.content}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TabView;
