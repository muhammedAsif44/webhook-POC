 
const Lead = require("../model/leadSchema");
exports.receiveWebhook = async (req, res) => {
  try {
    const body = req.body;

    // extract fields if needed
    const name = body.name || body.fullName ;
    const email = body.email || body.Email || null;
 

    // save to Mongo
    const lead = await Lead.create({
      name,
      email,
       
    });

    console.log("  Saved lead:", lead);

    return res.status(200).json({
      success: true,
      message: "Webhook received and stored",
    });
  } catch (err) {
    console.error("  Error saving lead:", err);
    return res.status(500).json({ success: false, err });
  }
};

exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error("  Fetch Error:", err);
    res.status(500).json({ success: false });
  }
};
