package com.pm.pm;

public class Query {
    private Integer Budget;
    private String Activity;
    private Integer numPeople;
    private String OtherInfo;
    public Integer getBudget() {
        return Budget;
    }
    public void setBudget(Integer budget) {
        Budget = budget;
    }
    public String getActivity() {
        return Activity;
    }
    public void setActivity(String activity) {
        Activity = activity;
    }
    public Integer getNumPeople() {
        return numPeople;
    }
    public void setNumPeople(Integer numPeople) {
        this.numPeople = numPeople;
    }
    public String getOtherInfo() {
        return OtherInfo;
    }
    public void setOtherInfo(String otherInfo) {
        OtherInfo = otherInfo;
    }
    
    @Override
    public String toString() {
        return "Query [Budget=" + Budget + ", Activity=" + Activity + ", numPeople=" + numPeople + "]";
    }
}
