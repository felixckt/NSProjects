package com.tns.gen.java.lang;

public class Object_bar_50_32_CompatCloseListenerImpl extends java.lang.Object implements com.tns.NativeScriptHashCodeProvider, android.support.v7.widget.SearchView.OnCloseListener {
	public Object_bar_50_32_CompatCloseListenerImpl(){
		super();
		com.tns.Runtime.initInstance(this);
	}

	public boolean onClose()  {
		java.lang.Object[] args = null;
		return (boolean)com.tns.Runtime.callJSMethod(this, "onClose", boolean.class, args);
	}

	public boolean equals__super(java.lang.Object other) {
		return super.equals(other);
	}

	public int hashCode__super() {
		return super.hashCode();
	}

}
